import React from "react";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./Menubar";

export default () => {
  const editor = useEditor({
    extensions: [
      Image.extend({
        defaultAttributes: {
          class: "mx-auto w-full object-cover max-h-[300px]",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        defaultAlignment: "right",
      }),
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
  });

  const handleEditorChanges = () => {
    const html = editor?.getHTML();
    const json = editor?.getJSON();
    const text = editor?.getText();
    console.log("Html ====>", html);
    console.log("JSON ====>", json);
    console.log("Text ====>", text);
  };

  return (
    <div style={{ position: "absolute", top: "80px", left: "10px", right: "10px", background: "#0b0a08" }}>
      <div className="text-white rounded-xl bg-#0b0a08 p-2" style={{ border: "3px solid #262523" }}>
        <MenuBar editor={editor} />
      </div>
      <div className="text-white rounded-xl bg-#0b0a08 mt-6 p-10" style={{ border: "3px solid #262523", height: "calc(70vh - 134px)" }}>
        <EditorContent editor={editor} />
      </div>
      <button
        type="button"
        onClick={handleEditorChanges}
        className="w-full px-5 py-2.5 my-2 text-xl font-bold text-center text-white bg-#664b62 rounded-lg border-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-#664b62"
        style={{ border: "1px solid #ffffff" }}
      >
        Publish
      </button>
    </div>
  );
};
