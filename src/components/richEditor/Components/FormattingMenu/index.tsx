import { useMemo, useState } from "react";
import { BubbleMenu, useCurrentEditor } from "@tiptap/react";
import { EditorState } from "@tiptap/pm/state";
import { EditorView } from "@tiptap/pm/view";
import clsx from "clsx";
import InsertLinkDialog from "./InserLinkDialog";
import { getMenuActions } from "./Actions";
import classes from "./style.module.css";
import Menu from "@/components/menu";

const FormattingMenu = () => {
  const { editor } = useCurrentEditor();
  const [linkDialogVisible, setLinkDialogVisible] = useState(false);

  const actions = useMemo(() => {
    console.log("calculate menu actions");
    return editor ? getMenuActions({ editor, setLinkDialogVisible }) : [];
  }, [editor]);

  // show menu only when there is text selected
  const shoudShow = (state: EditorState, view: EditorView): boolean => {
    const { from, to } = view.state.selection;
    const text = state.doc.textBetween(from, to, "");
    return Boolean(text.trim().length);
  };

  const onInsertLinkSuccess = (href: string) => {
    editor?.chain().focus().toggleLink({ href, target: "_blank" }).run();
    onInsertLinkClose();
  };

  const onInsertLinkClose = () => {
    setLinkDialogVisible(false);
    editor?.chain().focus().run();
  };

  return (
    <div>
      <BubbleMenu
        className={clsx(classes.formattingMenuWrapper, {
          "opacity-0": linkDialogVisible,
        })}
        tippyOptions={{
          maxWidth: "100%",
          placement: "bottom-start",
          moveTransition: "transform 0.1s linear",
        }}
        shouldShow={({ editor }) => shoudShow(editor.state, editor.view)}
      >
        {editor?.isFocused ? <Menu actions={actions} /> : null}
      </BubbleMenu>

      <InsertLinkDialog
        dialogProps={{
          title: "Insert link",
          isOpen: linkDialogVisible,
          onClose: onInsertLinkClose,
        }}
        onSuccess={onInsertLinkSuccess}
      />
    </div>
  );
};

export default FormattingMenu;
