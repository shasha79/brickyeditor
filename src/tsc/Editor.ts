/// <reference path="types/jquery.d.ts" />
/// <reference path="types/common.d.ts" />

namespace BrickyEditor {
  export class Editor {
    private isLoaded: boolean;
    private container: BlocksContainer;

    public $editor: JQuery;
    public static UI: UI;
    public options: EditorOptions;

    private onError = (message: string, code: number = 0) =>
      this.options.onError({ message: message, code: code });

    constructor($editor: JQuery, options: EditorOptions) {
      Fields.BaseField.registerCommonFields();

      this.$editor = $editor;
      this.$editor.addClass(Selectors.classEditor);
      this.options = new EditorOptions(options);
      this.container = this.createContainer();

      Editor.UI = new UI(this);
    }

    private createContainer(): BlocksContainer {
      const onAdd = (block: Block, idx: number) => {
        if (this.isLoaded) {
          this.trigger(Events.onBlockAdd, { block: block, idx: idx });
          this.trigger(Events.onChange, {
            blocks: this.getData(),
            html: this.getHtml()
          });
        }
      };

      const onDelete = (block: Block, idx: number) => {
        this.trigger(Events.onBlockDelete, { block: block, idx: idx });
        this.trigger(Events.onChange, {
          blocks: this.getData(),
          html: this.getHtml()
        });
      };

      const onUpdate = (block, property, oldValue, newValue) => {
        this.trigger(Events.onBlockUpdate, {
          block: block,
          property: property,
          oldValue: oldValue,
          newValue: newValue
        });
        this.trigger(Events.onChange, {
          blocks: this.getData(),
          html: this.getHtml()
        });
      };

      return new BlocksContainer(
        this.$editor,
        onAdd,
        onDelete,
        (block: Block) => {
          this.trigger(Events.onBlockSelect, { block: block });
        },
        (block: Block) => {
          this.trigger(Events.onBlockDeselect, { block: block });
        },
        (block: Block, from: number, to: number) => {
          this.trigger(Events.onBlockMove, {
            block: block,
            from: from,
            to: to
          });
          this.trigger(Events.onChange, {
            blocks: this.getData(),
            html: this.getHtml()
          });
        },
        onUpdate,
        this.options.onUpload
      );
    }

    public async initAsync() {
      const editor = this;

      /// Load templates
      Editor.UI.toggleToolsLoader(true);

      const templates = await Services.TemplateService.loadTemplatesAsync(
        editor.options.templatesUrl,
        editor.$editor,
        editor.onError
      );

      Editor.UI.toggleToolsLoader(false);
      Editor.UI.setTemplates(templates);

      // Load initial blocks
      const blocks = await this.tryLoadInitialBlocksAsync();
      this.loadBlocks(blocks);

      // Trigger jQuery event
      this.isLoaded = true;
      this.trigger(Events.onLoad, this);
    }

    // load initial blocks
    private async tryLoadInitialBlocksAsync(): Promise<Block[]> {
      const url = this.options.blocksUrl;
      const editor = this;
      return new Promise<Block[]>(async (resolve, reject) => {
        if (url) {
          try {
            let blocks = await $.get(url);
            // Blocks can be nested
            blocks = 'blocks' in blocks ? blocks.blocks : blocks;
            resolve(blocks);
          } catch (error) {
            editor.onError(EditorStrings.errorBlocksFileNotFound(url));
            reject(error);
          }
        } else if (this.options.blocks) {
          resolve(this.options.blocks);
        } else {
          resolve(null);
        }
      });
    }

    tryBindFormSubmit() {
      const editor = this;
      const $form = this.options.formSelector
        ? $(this.options.formSelector)
        : null;
      const $input = this.options.inputSelector
        ? $(this.options.inputSelector)
        : null;

      if (!$form || !$input || $form.length == 0 || $input.length == 0) return;

      $form.on("submit", () => {
        $input.val(JSON.stringify(editor.getData()));
        return true;
      });
    }

    bindFormSubmit() {
      const editor = this;
      const $form = this.options.formSelector
        ? $(this.options.formSelector)
        : null;
      const $input = this.options.inputSelector
        ? $(this.options.inputSelector)
        : null;

      if (!$form || !$input || $form.length == 0 || $input.length == 0) return;

      $form.on("submit", () => {
        $input.val(JSON.stringify(editor.getData()));
        return true;
      });
    }

    public getData(): any {
      return this.container.getData(this.options.ignoreHtml);
    }

    public getHtml(): string {
      return this.container.getHtml();
    }

    /// BLOCKS
    public loadBlocks(blocks: Array<any>) {
      if (blocks && blocks.length) {
        blocks.forEach(block => {
          let template = Services.TemplateService.getTemplate(block.template);
          if (template) {
            this.container.addBlock(template, block.fields, null, false);
          } else {
            const message = EditorStrings.errorBlockTemplateNotFound(
              block.template
            );
            this.onError(message);
          }
        });
      }
    }

    public addBlock(template: Template) {
      const container = this.getContainer(this.container);
      container.addBlock(template, null, null, true);
    }

    private getContainer(container: BlocksContainer) {
      if (container.selectedBlock && container.selectedBlock.isContainer()) {
        const field = container.selectedBlock
          .selectedField as Fields.ContainerField;
        if (field) {
          return this.getContainer(field.container);
        }
      }
      return container;
    }

    private trigger(event: string, data: any) {
      const editor = this;
      const $editor = this.$editor;

      $editor.trigger("bre." + event, data);
      Common.propsEach(editor.options, (key, value) => {
        if (key.breEqualsInvariant(event) && value) {
          value(data);
        }
      });
    }
  }
}
