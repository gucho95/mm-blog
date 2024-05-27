import { Editor } from "@tiptap/react";
import { Dispatch, SetStateAction } from "react";
import { FormattingMenuAction } from "../../types";
import BulListIcon from "./Icons/BulList";
import NumListIcon from "./Icons/NumList";
import StrikeThroughIcon from "./Icons/StrikeThrought";
import H3Icon from "./Icons/H3";
import H4Icon from "./Icons/H4";
import H2Icon from "./Icons/H2";
import H1Icon from "./Icons/H1Icon";
import LinkIcon from "./Icons/Link";
import BoldIcon from "./Icons/Bold";
import ItalicIcon from "./Icons/Italic";
import UnderlineIcon from "./Icons/Underline";

export const getMenuActions = ({
  editor,
  setLinkDialogVisible,
}: {
  editor: Editor;
  setLinkDialogVisible: Dispatch<SetStateAction<boolean>>;
}): FormattingMenuAction[] => [
  {
    name: "h1",
    title: "Format to H1",
    icon: <H1Icon />,
    onSelect: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    selected: () => editor.isActive("heading", { level: 1 }),
  },
  {
    name: "h2",
    title: "Format to H2",
    icon: <H2Icon />,
    onSelect: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    selected: () => editor.isActive("heading", { level: 2 }),
  },
  {
    name: "h3",
    title: "Format to H3",
    icon: <H3Icon />,
    onSelect: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    selected: () => editor.isActive("heading", { level: 3 }),
  },
  {
    name: "h4",
    title: "Format to H4",
    icon: <H4Icon />,
    onSelect: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
    selected: () => editor.isActive("heading", { level: 4 }),
    borderAfter: true,
  },
  {
    name: "bold",
    title: "Format Bold",
    icon: <BoldIcon />,
    onSelect: () => editor.chain().focus().toggleMark("bold").run(),
    selected: () => editor.isActive("bold"),
  },
  {
    name: "italic",
    title: "Format Italic",
    icon: <ItalicIcon />,
    onSelect: () => editor.chain().focus().toggleMark("italic").run(),
    selected: () => editor.isActive("italic"),
  },
  {
    name: "underline",
    title: "Format Underline",
    icon: <UnderlineIcon />,
    onSelect: () => editor.chain().focus().toggleMark("underline").run(),
    selected: () => editor.isActive("underline"),
  },
  {
    name: "strikethrough",
    title: "Format StrikeThrough",
    icon: <StrikeThroughIcon />,
    onSelect: () => editor.chain().focus().toggleMark("strike").run(),
    selected: () => editor.isActive("strike"),
    borderAfter: true,
  },
  {
    name: "bulleted-list",
    title: "Toggle Bullete List",
    icon: <BulListIcon />,
    onSelect: () => editor.chain().focus().toggleBulletList().run(),
    selected: () => editor.isActive("bulletList"),
  },
  {
    name: "ordered-list",
    title: "Toggle Ordered List",
    icon: <NumListIcon />,
    onSelect: () => editor.chain().focus().toggleOrderedList().run(),
    selected: () => editor.isActive("orderedList"),
    borderAfter: true,
  },
  {
    name: "link",
    title: "Toggle Link",
    icon: <LinkIcon />,
    onSelect: () => {
      setLinkDialogVisible(true);
    },
    selected: () => editor.isActive("link"),
  },
];
