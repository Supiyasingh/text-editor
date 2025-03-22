import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Color from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import TextAlign from "@tiptap/extension-text-align";
import VariablePopover from "./VariablePopover";
import Toolbar from "./Toolbar";
import { useState } from "react";

const Editor = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [position, setPosition] = useState({ top: 0 ,left:1 });

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Underline,
      Color,
      FontFamily.configure({
        types: ["textStyle"],
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: '<p>Type "{{" to insert variables...</p>',
    onUpdate: ({ editor }) => {
      const text = editor.getText();
      if (text.endsWith("{{")) {
        const { from } = editor.state.selection;
        const { left, top } = editor.view.coordsAtPos(from);
        setPosition({ left, top });
        setShowPopover(true);
      } else {
        setShowPopover(false);
      }
    },
  });

  return (
    <div className="relative w-full  max-w-4xl  p-4 bg-white shadow-lg rounded-lg border border-gray-300">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className="prose max-w-full border p-3 rounded-md mt-2" />
      {showPopover && <VariablePopover position={position} editor={editor} />}
    </div>
  );
};

export default Editor;
