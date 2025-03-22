const Toolbar = ({ editor }) => {
    if (!editor) return null;
  
    return (
      <div className="p-2 border-b flex flex-wrap gap-2">
        {/* Formatting */}
        <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => editor.chain().focus().toggleUnderline().run()}>
          Underline
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => editor.chain().focus().toggleStrike().run()}>
          Strikethrough
        </button>
  
        {/* Font Family */}
        <select className="px-3 py-1 border rounded" onChange={(e) => editor.chain().focus().setFontFamily(e.target.value).run()}>
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Courier New">Courier</option>
          <option value="Verdana">Verdana</option>
        </select>
  
        {/* Font Size */}
        <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => editor.chain().focus().setFontSize("20px").run()}>
          Font 20px
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => editor.chain().focus().setFontSize("24px").run()}>
          Font 24px
        </button>
  
        {/* Text Color */}
        <input type="color" className="w-10 h-8 border rounded" onChange={(e) => editor.chain().focus().setColor(e.target.value).run()} />
  
        {/* Alignment */}
        <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => editor.chain().focus().setTextAlign("left").run()}>
          Left
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => editor.chain().focus().setTextAlign("center").run()}>
          Center
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => editor.chain().focus().setTextAlign("right").run()}>
          Right
        </button>
      </div>
    );
  };
  
  export default Toolbar;
  