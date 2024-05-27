import { useState } from "react";
import { Editor, EditorProvider } from "@tiptap/react";

import BlockActionsMenu from "./Components/BlockActionsMenu";
import FormattingMenu from "./Components/FormattingMenu";
import extensions from "./Extensions";
import classes from "./style.module.css";

type RichEditorProps = {
  onChange: ({ html, text }: { html: string; text: string }) => void;
};

const RichEditor = (props: RichEditorProps) => {
  const [jsonContent, setJsonContent] = useState({});

  const onEditorUpdate = (editor: Editor) => {
    setJsonContent(editor.getJSON());
    props.onChange({ html: editor.getHTML(), text: editor.getText() });
  };

  return (
    <EditorProvider
      editorProps={{ attributes: { class: classes.editor } }}
      extensions={extensions}
      content={jsonContent}
      onUpdate={({ editor }) => onEditorUpdate(editor)}
    >
      <FormattingMenu />
      {/* <BlockActionsMenu /> */}
    </EditorProvider>
  );
};

export default RichEditor;
