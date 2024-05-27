import classes from "../style.module.css";
import Placeholder from "@tiptap/extension-placeholder";

const PlaceholderExtension = Placeholder.configure({
  placeholder: "Your article content",
  emptyEditorClass: classes.placeholder,
  considerAnyAsEmpty: true,
  showOnlyWhenEditable: true,
});

export default PlaceholderExtension;
