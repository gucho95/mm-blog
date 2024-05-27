import { Extensions } from "@tiptap/react";
import UnderlineExtension from "@tiptap/extension-underline";
import YoutubeExtension from "./Youtube";
import PlaceholderExtension from "./Placeholder";
import ImageExtension from "@tiptap/extension-image";
import StarterKitExtension from "./StarterKit";
import LinkExtension from "./Link";
import VideoExtension from "./Video";

const extensions: Extensions = [
  StarterKitExtension,
  PlaceholderExtension,
  UnderlineExtension,
  ImageExtension,
  YoutubeExtension,
  LinkExtension,
  VideoExtension,
];

export default extensions;
