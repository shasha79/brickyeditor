import { bre } from "@/types/bre";
import { helpers } from "@/helpers";
import { iconDelete } from "@/icons/iconDelete";
import { iconCopy } from "@/icons/iconCopy";
import { iconUp } from "@/icons/iconUp";
import { iconDown } from "@/icons/iconDown";

const defaultButtons: bre.block.BlockEditorButton[] = [
  {
    name: "delete",
    icon: iconDelete,
    action: ff => ff("delete")
  },
  {
    name: "clone",
    icon: iconCopy,
    action: ff => ff("clone")
  },
  {
    name: "up",
    icon: iconUp,
    action: ff => ff("move", { offset: -1 })
  },
  {
    name: "down",
    icon: iconDown,
    action: ff => ff("move", { offset: 1 })
  }
];

const createEditor = (): bre.block.BlockEditor => {
  const $element = helpers.div("bre-block-editor");

  const btns = defaultButtons.map(btn => {
    const { action, icon, name } = btn;
    const $btn = helpers.div("bre-block-editor-button", icon);
    $btn.title = name;
    $element.append($btn);

    return {
      $btn,
      action
    };
  });

  return {
    $element,
    btns
  };
};

const initBlockEditor = (block: bre.block.Block) => {
  if (block.editor === undefined) {
    block.editor = createEditor();

    block.editor.btns.forEach(({ $btn, action }) => {
      $btn.onclick = () => action(block.fire);
    });

    block.$element.prepend(block.editor.$element);
  }

  return block.editor;
};

export const showBlockEditor = (block: bre.block.Block, parent: boolean) => {
  const editor = initBlockEditor(block);
  helpers.toggleVisibility(editor.$element, true);
  helpers.toggleClassName(editor.$element, "bre-block-editor-vertical", parent);
  return editor;
};

export const hideBlockEditor = (block: bre.block.Block) => {
  const { editor } = block;
  if (editor !== undefined) {
    helpers.toggleVisibility(editor.$element, false);
    helpers.toggleClassName(
      editor.$element,
      "bre-block-editor-vertical",
      false
    );
  }
};
