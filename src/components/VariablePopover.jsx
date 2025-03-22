import { VARIABLES } from '../data/variables';

const VariablePopover = ({ position, editor }) => {
  const handleInsert = (variable) => {
    editor.chain().focus().insertContent(variable.value).run();
  };

  return (
    <div
      className="absolute bg-white shadow-md p-2 rounded-md border z-50"
      style={{ top: position.top -120, centre: position.centre }}
    >
      {VARIABLES.map((variable) => (
        <button
          key={variable.id}
          onClick={() => handleInsert(variable)}
          className="block px-3 py-1 text-sm hover:bg-gray-200 w-full text-left"
        >
          {variable.label}
        </button>
      ))}
    </div>
  );
};

export default VariablePopover;
