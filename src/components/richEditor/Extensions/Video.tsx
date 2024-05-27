import { Node, mergeAttributes } from "@tiptap/core";

const VideoExtension = Node.create({
  name: "video", // unique name for the Node
  group: "block", // belongs to the 'block' group of extensions
  selectable: true, // so we can select the video
  draggable: true, // so we can drag the video
  atom: true, // is a single unit

  addAttributes() {
    return {
      src: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [{ tag: "video" }];
  },

  addNodeView() {
    return ({ editor, node }) => {
      const div = document.createElement("div");
      div.className = "relative overflow-hidden h-80";
      const iframe = document.createElement("iframe");

      if (editor.isEditable) {
        iframe.className =
          "pointer-events-none w-full h-full absolute inset-0 object-cover";
      }

      iframe.src = node.attrs.src;
      div.append(iframe);
      return {
        dom: div,
      };
    };
  },
  renderHTML({ HTMLAttributes }) {
    return ["video", mergeAttributes(HTMLAttributes)];
  },
});

export default VideoExtension;
