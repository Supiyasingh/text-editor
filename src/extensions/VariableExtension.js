import { Node } from "@tiptap/core";

export const VariableExtension = Node.create({
  name: "variable",
  group: "inline",
  inline: true,
  atom: true,

  addAttributes() {
    return {
      label: {
        default: "",
      },
    };
  },

  parseHTML() {
    return [{ tag: "span[data-variable]" }];
  },

  renderHTML({ node }) {
    return [
      "span",
      { "data-variable": node.attrs.label, class: "variable-token" },
      node.attrs.label,
    ];
  },

  addNodeView() {
    return ({ node }) => {
      const span = document.createElement("span");
      span.classList.add("bg-blue-200", "px-2", "py-1", "rounded-md", "text-blue-900");
      span.innerText = node.attrs.label;
      return { dom: span };
    };
  },
});
