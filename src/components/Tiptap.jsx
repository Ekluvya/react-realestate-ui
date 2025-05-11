import React, { useState } from "react";
import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Quote,
  Code,
  Undo,
  Redo,
  PanelLeft,
  PanelRightClose,
} from "lucide-react";

import CharacterCount from "@tiptap/extension-character-count";

const extensions = [StarterKit, CharacterCount];

const initialContent = `
<h1>Welcome to the Editor</h1>
<p>This is a <strong>beautiful</strong> editor built with Tiptap and styled with Tailwind CSS.</p>
<p>Try selecting some text to see the bubble menu, or click the plus button to insert elements.</p>
<blockquote>You can create quotes like this one</blockquote>
`;

const Tiptap = ({ setValue }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const editor = useEditor({
    extensions,
    content: initialContent,
    onUpdate: ({ editor }) => {
      setValue(editor.getHTML()); // Update the value in the parent
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-slate max-w-none focus:outline-none min-h-[200px] px-4 py-2",
      },
    },
  });

  if (!editor) {
    return <div className="text-center p-4">Loading editor...</div>;
  }

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg border border-gray-200 max-w-4xl mx-auto my-8">
      {/* Editor Toolbar */}
      <div className="flex items-center gap-1 border-b border-gray-200 bg-gray-50 p-2 rounded-t-lg">
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          title={isCollapsed ? "Expand toolbar" : "Collapse toolbar"}
        >
          {isCollapsed ? (
            <PanelLeft size={18} />
          ) : (
            <PanelRightClose size={18} />
          )}
        </button>

        {!isCollapsed && (
          <>
            <div className="h-6 mx-1 w-px bg-gray-300"></div>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors ${
                editor.isActive("bold") ? "bg-gray-200 text-blue-600" : ""
              }`}
              title="Bold"
            >
              <Bold size={18} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors ${
                editor.isActive("italic") ? "bg-gray-200 text-blue-600" : ""
              }`}
              title="Italic"
            >
              <Italic size={18} />
            </button>

            <div className="h-6 mx-1 w-px bg-gray-300"></div>

            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={`p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors ${
                editor.isActive("heading", { level: 1 })
                  ? "bg-gray-200 text-blue-600"
                  : ""
              }`}
              title="Heading 1"
            >
              <Heading1 size={18} />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={`p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors ${
                editor.isActive("heading", { level: 2 })
                  ? "bg-gray-200 text-blue-600"
                  : ""
              }`}
              title="Heading 2"
            >
              <Heading2 size={18} />
            </button>

            <div className="h-6 mx-1 w-px bg-gray-300"></div>

            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors ${
                editor.isActive("bulletList") ? "bg-gray-200 text-blue-600" : ""
              }`}
              title="Bullet List"
            >
              <List size={18} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors ${
                editor.isActive("orderedList")
                  ? "bg-gray-200 text-blue-600"
                  : ""
              }`}
              title="Numbered List"
            >
              <ListOrdered size={18} />
            </button>

            <div className="h-6 mx-1 w-px bg-gray-300"></div>

            <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={`p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors ${
                editor.isActive("blockquote") ? "bg-gray-200 text-blue-600" : ""
              }`}
              title="Quote"
            >
              <Quote size={18} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={`p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors ${
                editor.isActive("codeBlock") ? "bg-gray-200 text-blue-600" : ""
              }`}
              title="Code Block"
            >
              <Code size={18} />
            </button>

            <div className="h-6 mx-1 w-px bg-gray-300"></div>

            <button
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
              className={`p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors ${
                !editor.can().undo() ? "opacity-50" : ""
              }`}
              title="Undo"
            >
              <Undo size={18} />
            </button>
            <button
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
              className={`p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors ${
                !editor.can().redo() ? "opacity-50" : ""
              }`}
              title="Redo"
            >
              <Redo size={18} />
            </button>
          </>
        )}
      </div>

      {/* Editor Content */}
      <div className="relative bg-white rounded-b-lg">
        <EditorContent editor={editor} className="border-0 min-h-64" />

        {/* Floating Menu (appears when cursor is on empty line) */}
        <FloatingMenu
          editor={editor}
          className="bg-white shadow-lg border border-gray-200 rounded-md py-1 flex flex-col"
          tippyOptions={{
            placement: "bottom-start",
            offset: [0, 10],
          }}
        >
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100"
          >
            <Heading1 size={16} />
            <span>Heading 1</span>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100"
          >
            <Heading2 size={16} />
            <span>Heading 2</span>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100"
          >
            <List size={16} />
            <span>Bullet List</span>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100"
          >
            <Quote size={16} />
            <span>Quote</span>
          </button>
        </FloatingMenu>

        {/* Bubble Menu (appears when text is selected) */}
        <BubbleMenu
          editor={editor}
          className="bg-white shadow-lg border border-gray-200 rounded-md flex"
          tippyOptions={{ maxWidth: "none" }}
        >
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 hover:bg-gray-100 ${
              editor.isActive("bold") ? "text-blue-600" : "text-gray-700"
            }`}
          >
            <Bold size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 hover:bg-gray-100 ${
              editor.isActive("italic") ? "text-blue-600" : "text-gray-700"
            }`}
          >
            <Italic size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={`p-2 hover:bg-gray-100 ${
              editor.isActive("codeBlock") ? "text-blue-600" : "text-gray-700"
            }`}
          >
            <Code size={16} />
          </button>
        </BubbleMenu>
      </div>

      {/* Character Count */}
      <div className="px-4 py-2 text-xs text-gray-500 border-t border-gray-200">
        {editor.storage.characterCount.characters()} characters ·
        {editor.storage.characterCount.words()} words
      </div>
    </div>
  );
};

export default Tiptap;
