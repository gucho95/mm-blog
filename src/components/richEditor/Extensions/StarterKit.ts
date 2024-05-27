import StarterKit from "@tiptap/starter-kit";
const StarterKitExtension = StarterKit.configure({
  bulletList: {
    keepMarks: true,
    keepAttributes: false,
  },
  orderedList: {
    keepMarks: true,
    keepAttributes: false,
  },
});

export default StarterKitExtension;
