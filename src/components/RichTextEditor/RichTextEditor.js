import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { MenuBar } from "./MenuBar/MenuBar";
import "./RichTextEditor.styles.css";


const CustomDocument = Document.extend({
  content: "heading block*",
});

function RichTextEditor() {
  const [noteHTML, setNoteHTML] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        document: false,
      }),
      CustomDocument,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return "What’s the title?";
          }
          return "Can you add some further context?";
        },
      }),
    ],
    content: noteHTML,
    onUpdate: ({ editor }) => {
      const noteHTML = editor.getHTML();
      setNoteHTML(noteHTML);
    },
  });

  return (
    <div className="textEditor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

export { RichTextEditor };
