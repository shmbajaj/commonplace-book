import {
  FaBold,
  FaHeading,
  FaItalic,
  FaListOl,
  FaListUl,
  FaParagraph,
  FaQuoteLeft,
  FaRedo,
  FaStrikethrough,
  FaUnderline,
  FaUndo,
  FaMinus,
  FaHighlighter,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
} from "react-icons/fa";
import { ImClearFormatting, ImPagebreak } from "react-icons/im";
import { FiCode } from "react-icons/fi";
import { HiOutlineTerminal } from "react-icons/hi";
import "./MenuBar.styles.css";

function MenuBar({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <div className="menubar">
      <div className="menubarItems">
        <div>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <FaBold />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            <FaItalic />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive("underline") ? "is_active" : ""}
          >
            <FaUnderline />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            <FaStrikethrough />
          </button>
        </div>

        <div>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            <FaHeading />
          </button>

          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
          >
            <FaHeading className="heading2" />
          </button>

          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 }) ? "is-active" : ""
            }
          >
            <FaHeading className="heading3" />
          </button>

          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={
              editor.isActive("heading", { level: 4 }) ? "is-active" : ""
            }
          >
            <FaHeading className="heading4" />
          </button>

          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
              editor.isActive("heading", { level: 5 }) ? "is-active" : ""
            }
          >
            <FaHeading className="heading5" />
          </button>

          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
              editor.isActive("heading", { level: 6 }) ? "is-active" : ""
            }
          >
            <FaHeading className="heading6" />
          </button>
        </div>

        <div>
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={editor.isActive("highlight") ? "is-active" : ""}
          >
            <FaHighlighter />
          </button>

          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={
              editor.isActive({ textAlign: "left" }) ? "is-active" : ""
            }
          >
            <FaAlignLeft />
          </button>

          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={
              editor.isActive({ textAlign: "center" }) ? "is-active" : ""
            }
          >
            <FaAlignCenter />
          </button>

          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={
              editor.isActive({ textAlign: "right" }) ? "is-active" : ""
            }
          >
            <FaAlignRight />
          </button>

          <button
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            className={
              editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
            }
          >
            <FaAlignJustify />
          </button>
        </div>

        <div>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            <FaListUl />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
          >
            <FaListOl />
          </button>
        </div>

        <div className="ml-auto">
          <button onClick={() => editor.chain().focus().undo().run()}>
            <FaUndo />
          </button>

          <button onClick={() => editor.chain().focus().redo().run()}>
            <FaRedo />
          </button>
        </div>
      </div>

      <div className="menubarItems">
        <div>
          <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
            <ImClearFormatting />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={editor.isActive("code") ? "is-active" : ""}
          >
            <FiCode />
          </button>

          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive("paragraph") ? "is-active" : ""}
          >
            <FaParagraph />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            <FaQuoteLeft />
          </button>

          <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            <FaMinus />
          </button>

          <button onClick={() => editor.chain().focus().setHardBreak().run()}>
            <ImPagebreak />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive("codeBlock") ? "is-active" : ""}
          >
            <HiOutlineTerminal />
          </button>
        </div>
      </div>
    </div>
  );
}

export { MenuBar };
