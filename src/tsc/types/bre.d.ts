import { helpers } from '@/helpers';
import { Locale } from '@/i18n';

// This types is for mock cases
declare type Mutable<T> = { -readonly [P in keyof T]: T[P] };

declare global {
  interface Window {
    BrickyEditor: {
      i18n: {
        default: string;
        locale: string;
        messages: Record<string, Locale>;
      };
    };
  }
}

declare namespace bre {
  type FileUploadHandler = (file: any, callback: (url: string) => void) => void;

  type EditorPlugin = { init: (editor: bre.Editor) => void };

  type EditorOptions = {
    locale: string;
    /** Url to predifined templates */
    templatesUrl: string;

    onUpload?: FileUploadHandler;

    /** Url to fetch initial blocks, overrides initial blocks property */
    blocksUrl?: string;
    /** Inital block data */
    blocks?: bre.block.BlockData[];

    /** Show blocks selector in compact mode */
    compactTools?: boolean;
    /** Max screen width to show tools in compact mode */
    compactToolsWidth?: number;
    /** Ignore blocks html field, if you need only json */
    ignoreHtml?: boolean;
    /** Form selector to bind form submit event */
    formSelector?: string;
    /** Input selector to put json to on form submit */
    inputSelector?: string;

    templateSelector: {
      zoom: boolean;
    };

    plugins?: Array<{ plugin: EditorPlugin }>;
  };

  type EditorModal = (
    $content: HTMLElement,
    ok?: () => void,
    cancel?: () => void
  ) => void;

  type EditorHelpers = typeof helpers;

  type BlocksContainerEvent = {
    container: bre.BlocksContainer;
  };

  type BlocksContainerEventMap = {
    change: BlocksContainerEvent;
    select: BlocksContainerEvent;
  };

  type BlocksContainer = {
    editor: bre.Editor;
    $element: HTMLElement;
    $placeholder: HTMLElement | null;
    blocks: block.Block[];
    selectedBlock: block.Block | null;
    parentContainerField: bre.field.container.ContainerField | null;
    // usePlaceholder: boolean;
    // data: () => any;
    // html: () => string;
    // add: (block: Block) => void;
  };

  type EditorState = {
    selectedField: bre.field.FieldBase | null;
    selectedBlocks: bre.block.Block[];
    selectedContainers: bre.BlocksContainer[];
  };

  type Editor = bre.event.Emitter<bre.event.EventMaps> & {
    $element: HTMLElement;
    data: () => bre.block.BlockData[];
    html: () => string;

    state: EditorState;
    options: EditorOptions;
    shared: {
      modal: EditorModal;
      helpers: EditorHelpers;
    };
  };

  namespace event {
    type BaseEvent<TSender> = {
      sender: TSender;
    };

    type EventMaps = BlocksContainerEventMap &
      field.FieldEventMap &
      // template.TemplatesEventMap &
      block.BlockEventMap;

    type OnOffFunc<TEventMap extends EventMaps> = <K extends keyof TEventMap>(
      type: K,
      listener: (ev: TEventMap[K]) => void
    ) => void;

    type FireFunc<TEventMap extends EventMaps> = <K extends keyof TEventMap>(
      type: K,
      ev: TEventMap[K]
    ) => void;

    type Emitter<TEventMap extends EventMaps> = {
      on: OnOffFunc<TEventMap>;
      off: OnOffFunc<TEventMap>;
      fire: FireFunc<TEventMap>;
    };
  }

  type ElementContainer = {
    $element: HTMLElement;
  };

  namespace field {
    type FieldEvent = bre.event.BaseEvent<bre.field.FieldBase>;

    type FieldEventMap = {
      fieldChange: FieldEvent;
      fieldSelect: FieldEvent;
      fieldBlur: FieldEvent;
      fieldCreate: FieldEvent;
    };

    type FieldBase = {
      parentBlock: bre.block.Block;
      $element: HTMLElement;
      data: FieldData;
    };

    type Field<TFieldData extends field.FieldData> = FieldBase & {
      data: TFieldData;
    };

    type FieldEditor<TFieldData extends field.FieldData> = {
      $element: HTMLElement;
      data: TFieldData;
    };

    type FieldDescriptor<
      TFieldData extends field.FieldData = field.FieldData
    > = {
      makeField: (
        $element: HTMLElement,
        initialData: TFieldData,
        parentBlock: block.Block
      ) => Field<TFieldData>;
      setupPreview: (
        $element: HTMLElement,
        initialData: TFieldData
      ) => HTMLElement;
      getHtml: (field: Field<TFieldData>) => HTMLElement;
      getEditor?: (
        field: Field<TFieldData>
      ) => {
        $element: HTMLElement;
        data: TFieldData;
      };
    };

    namespace container {
      type ContainerFieldType = 'container';
      type ContainerFieldPayload = {
        html: string;
        blocks: bre.block.BlockData[];
      };
      type ContainerFieldData = bre.field.FieldData<
        ContainerFieldType,
        ContainerFieldPayload
      >;
      type ContainerField = bre.field.Field<ContainerFieldData> & {
        container: bre.BlocksContainer;
      };
    }
  }

  namespace template {
    type Template = {
      $template: HTMLElement;
      $preview: HTMLElement;
      name: string;
    };

    type TemplateGroup = {
      name: string | null;
      templates: bre.template.Template[];
    };

    // type TemplatesEventMap = {
    //   select: {
    //     template: bre.template.Template;
    //   };
    // };

    // type Templates = event.Emitter<TemplatesEventMap> & {
    //   $element: HTMLElement;
    //   setTemplates: (groups: bre.template.TemplateGroup[]) => void;
    // };
  }

  namespace block {
    type BlockEvent<T = {}> = event.BaseEvent<bre.block.Block> & T;
    type BlockEventMap = {
      blockAdd: BlockEvent;
      blockDelete: BlockEvent;
      blockClone: BlockEvent;
      blockSelect: BlockEvent;
      blockMove: BlockEvent<{
        offset: number;
      }>;
    };

    type BlockData = {
      template: string;
      fields: field.FieldData[];
    };

    type Block = {
      $element: HTMLElement;
      data: BlockData;
      fields?: field.FieldBase[];
      editor?: BlockEditor;
      parentContainer: BlocksContainer;
      selected: boolean;
    };

    type BlockEditorButton = {
      name: string;
      icon: string;
      onClickHandler: (block: bre.block.Block) => void;
      getIsDisabledForBlock?: (block: bre.block.Block) => boolean;
    };

    type BlockEditor = {
      $element: HTMLDivElement;
      buttons: {
        $element: HTMLDivElement;
        button: BlockEditorButton;
      }[];
    };
  }

  type LinkData = Partial<Pick<HTMLLinkElement, 'href' | 'title' | 'target'>>;

  namespace field {
    type FieldType = 'html' | 'container' | 'embed' | 'image' | 'htmlCode';

    type FieldData<TType extends FieldType = any, TData = {}> = {
      type: TType;
      name: string;
    } & TData;
  }

  // TODO: or Exclude 'slice'?
  type FileInfo = Pick<File, 'name' | 'size' | 'type' | 'lastModified'>;

  type FileContent = {
    fileContent: string;
    fileInfo: bre.FileInfo;
  };
}
