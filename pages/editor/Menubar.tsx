import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaArrowRotateLeft,
  FaTextSlash,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaWindowMinimize,
  FaTurnDown,
  FaBackward,
  FaForward,
  FaRegImage,
  FaAlignLeft,
  FaAlignRight,
  FaAlignCenter,
  FaAlignJustify,
} from "react-icons/fa6";
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
} from "react-icons/lu";
import EditorButtons from "./EditorButtons";
import { useCallback } from "react";

const MenuBar = ({ editor }: any) => {
  if (!editor) {
    return null;
  }

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex justify-center flex-wrap py-4 px-2 bg-#0b0a08 -600 rounded-t-lg gap-2">
      <EditorButtons
        title="Bold It"
        editor={editor}
        handleClick={() => editor.chain().focus().toggleBold().run()}
        toggleName="bold"
      >
        <FaBold className={`${editor.isActive("bold") && "text-amber-500"}`} />
      </EditorButtons>

      <EditorButtons
        title="Italic"
        editor={editor}
        handleClick={() => editor.chain().focus().toggleItalic().run()}
        toggleName="italic"
      >
        <FaItalic
          className={`${editor.isActive("italic") && "text-amber-500"}`}
        />
      </EditorButtons>

      <EditorButtons
        title="OverLine"
        editor={editor}
        handleClick={() => editor.chain().focus().toggleStrike().run()}
        toggleName="strike"
      >
        <FaStrikethrough
          className={`${editor.isActive("strike") && "text-amber-500"}`}
        />
      </EditorButtons>

      <button
        title="Reset Text Changes"
        type="button"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="py-2.5 px-[15px] text-white border border-white rounded-lg"
      >
        <FaArrowRotateLeft />
      </button>

      <EditorButtons
        title="Align Right"
        editor={editor}
        handleClick={() => editor.chain().focus().setTextAlign("right").run()}
        toggleName={{ textAlign: "right" }}
      >
        <FaAlignRight
          className={`${
            editor.isActive({ textAlign: "right" }) && "text-amber-500"
          }`}
        />
      </EditorButtons>

      <EditorButtons
        title="Align Center"
        editor={editor}
        handleClick={() => editor.chain().focus().setTextAlign("center").run()}
        toggleName={{ textAlign: "center" }}
      >
        <FaAlignCenter
          className={`${
            editor.isActive({ textAlign: "center" }) && "text-amber-500"
          }`}
        />
      </EditorButtons>

      <EditorButtons
        title="Align Left"
        editor={editor}
        handleClick={() => editor.chain().focus().setTextAlign("left").run()}
        toggleName={{ textAlign: "left" }}
      >
        <FaAlignLeft
          className={`${
            editor.isActive({ textAlign: "left" }) && "text-amber-500"
          }`}
        />
      </EditorButtons>

      <EditorButtons
        title="Justify"
        editor={editor}
        handleClick={() => editor.chain().focus().setTextAlign("justify").run()}
        toggleName={{ textAlign: "justify" }}
      >
        <FaAlignJustify
          className={`${
            editor.isActive({ textAlign: "justify" }) && "text-amber-500"
          }`}
        />
      </EditorButtons>

      <button
        title="Reset Tag Changes"
        type="button"
        onClick={() => editor.chain().focus().clearNodes().run()}
        className="py-2.5 px-[15px] text-white border border-white rounded-lg"
      >
        <FaTextSlash />
      </button>

      <EditorButtons
        title="Bullet List"
        editor={editor}
        handleClick={() => editor.chain().focus().toggleBulletList().run()}
        toggleName="bulletList"
      >
        <FaListUl
          className={`${editor.isActive("bulletList") && "text-amber-500"}`}
        />
      </EditorButtons>

      <EditorButtons
        title="Ordered List"
        editor={editor}
        handleClick={() => editor.chain().focus().toggleOrderedList().run()}
        toggleName="orderedList"
      >
        <FaListOl
          className={`${editor.isActive("orderedList") && "text-amber-500"}`}
        />
      </EditorButtons>

      {/* <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive("codeBlock")
          ? "is-active"
          : "" + `text-white border border-white rounded-xl px-2 py-1`
        }
        >
        code block
      </button> */}

      <EditorButtons
        title="Blockquote"
        editor={editor}
        handleClick={() => editor.chain().focus().toggleBlockquote().run()}
        toggleName="blockquote"
      >
        <FaQuoteLeft
          className={`${editor.isActive("blockquote") && "text-amber-500"}`}
        />
      </EditorButtons>

      <button
        title="Horizontal Rule"
        type="button"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="py-2.5 px-[15px] text-white border border-white rounded-lg"
      >
        <FaWindowMinimize />
      </button>

      <button
        title="Hard Break"
        type="button"
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="py-2.5 px-[15px] text-white border border-white rounded-lg"
      >
        <FaTurnDown />
      </button>

      <button
        title="Add Image"
        type="button"
        onClick={addImage}
        className="py-2.5 px-[15px] text-white border border-white rounded-lg"
      >
        <FaRegImage />
      </button>

      <button
        title="Undo"
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="py-2.5 px-[15px] text-white border border-white rounded-lg"
      >
        <FaForward />
      </button>

      <button
        title="Redo"
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="py-2.5 px-[15px] text-white border border-white rounded-lg cursor-pointer"
      >
        <FaBackward />
      </button>

      {/* <EditorButtons
        editor={editor}
        handleClick={() => editor.chain().focus().setColor("#958DF1").run()}
        toggleName="textStyle"
      >
        <Fa6
          className={
            editor.isActive("textStyle", { color: "#958DF1" })
              ? "is-active"
              : "" + `text-white border border-white rounded-xl px-2 py-1`
          }
        />
      </EditorButtons> */}

      {/* <button
        type="button"
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        disabled={!editor.can().chain().focus().setColor("#000").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" })
            ? "is-active"
            : "" + `text-white border border-white rounded-xl px-2 py-1`
        }
      >
        Purple
      </button> */}
    </div>
  );
};

export default MenuBar;