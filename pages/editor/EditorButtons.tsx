import { ReactNode, MouseEventHandler } from "react";
import { Editor } from "@tiptap/core";

interface Props {
  children: ReactNode;
  editor: Editor;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  toggleName: string | any;
  level?: number;
  title: string;
  className?: string;
}

export default function EditorButtons({
  editor,
  children,
  handleClick,
  toggleName,
  className,
  level,
  title,
}: Props) {
  return (
    <button
      type="button"
      title={title}
      onClick={handleClick}
      disabled={!handleClick}
      className={`${className} border rounded-lg py-2.5 px-[15px] ${
        editor.isActive(toggleName, level && { level: level })
          ? "text-amber-200 border-amber-200"
          : "text-white border-white"
      }`}
    >
      {children}
    </button>
  );
}