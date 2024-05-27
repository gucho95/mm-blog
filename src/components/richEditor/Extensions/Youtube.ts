import Youtube from "@tiptap/extension-youtube";

const YoutubeExtension = Youtube.configure({
  disableKBcontrols: true,
  modestBranding: false,
  controls: false,
});

export default YoutubeExtension;
