import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { MenuBar } from "./MenuBar/MenuBar";
import "./RichTextEditor.styles.css";
import { useNotes, useFeatureBar } from "context";
import { useEffect } from "react";
import { useState } from "react";

const CustomDocument = Document.extend({
  content: "heading block*",
});

function RichTextEditor() {
  const [noteBackgroundColor, setNoteBackgroundColor] = useState(
    "var(--color-ebebeb)"
  );
  const [noteHtml, setNoteHtml] = useState(``);
  const {
    notesState: { activeNote },
    replicaNote,
    setReplicaNote,
  } = useNotes();
  const {
    state: { activeFeature },
  } = useFeatureBar();

  useEffect(() => {
    const { text } = activeNote;
    setNoteBackgroundColor("var(--color-ebebeb)");
    if (editor) {
      editor.options.editable = true;
      editor.commands?.setContent(text, { emitUpdate: true });
      if (activeFeature !== "notes" || !activeNote) {
        editor.options.editable = false;
      }
    }
  }, [activeNote]);

  useEffect(() => {
    if (
      replicaNote.backgroundColor !== "var(--color-ebebeb)" &&
      replicaNote.backgroundColor
    ) {
      setNoteBackgroundColor(replicaNote.backgroundColor);
    }
  }, [replicaNote.backgroundColor]);

  useEffect(() => {
    const re = /(?<=<h1>)(.*?)(?=<\/h1>)/g;
    if (activeNote && noteHtml) {
      const title = re.exec(noteHtml);
      if (title) {
        setReplicaNote((prev) => ({ ...prev, title: title[0] }));
      }
      setReplicaNote((prev) => ({ ...prev, text: noteHtml }));
    }
  }, [noteHtml]);

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
    content: noteHtml,
    editable: false,
    onUpdate: ({ editor }) => {
      const noteHTML = editor.getHTML();
      setNoteHtml(noteHTML);
    },
  });

  return (
    <div className="textEditor">
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        style={{ backgroundColor: noteBackgroundColor }}
      />
    </div>
  );
}
export { RichTextEditor };
