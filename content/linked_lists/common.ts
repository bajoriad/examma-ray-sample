import { SectionSpecification } from "examma-ray";
import indentString from "indent-string";

export function createDoublyLinkedListReference(
  options: {
    public_additions?: string;
    private_additions?: string;
    element_type?: string;
  } = {}
) {
  return `A doubly-linked, double-ended list, similar to the list from project 4.

\`\`\`cpp${options.element_type ? "" : "\ntemplate <typename T>"}
class List {
public:
  // Assume the default ctor and Big Three are defined as needed
${indentString(options.public_additions ?? "", 2)}
private:
  struct Node {
    ${options.element_type ?? "T"} datum;    // element stored in this Node
    Node *prev; // previous Node, or null if none
    Node *next; // next Node, or null if none
  };

  Node *first;  // first Node in the list, or null if empty
  Node *last;   // last Node in the list, or null if empty

  int num_nodes; // number of nodes in the list
${indentString(options.private_additions ?? "", 2)}
};
\`\`\`
`;
}

export function createSinglyLinkedListReference(
  options: {
    public_additions?: string;
    private_additions?: string;
    element_type?: string;
  } = {}
) {
  return `A singly-linked, single-ended list, similar to the list shown in lecture (not Project 4).

\`\`\`cpp${options.element_type ? "" : "\ntemplate <typename T>"}
class List {
public:
  // Assume the default ctor and Big Three
  // are defined as needed
${indentString(options.public_additions ?? "", 2)}
private:
  struct Node {
    ${options.element_type ?? "T"} datum;    // element stored in this Node
    Node *next; // next Node, or null if none
  };

  // first Node in the list, or null if empty
  Node *first;

  // INVARIANT: this variable keeps track of
  // the number of nodes in the list.
  int num_nodes;
${indentString(options.private_additions ?? "", 2)}
};
\`\`\`
`;
}

export const Template_Section_Doubly_Linked_List: Omit<
  SectionSpecification,
  "section_id" | "questions"
> = {
  title: "Linked Lists",
  mk_description:
    "In this problem, you will work with a linked list class template, shown in the **reference material**.",
  mk_reference: createDoublyLinkedListReference()
};

export const Template_Section_Singly_Linked_List: Omit<
  SectionSpecification,
  "section_id" | "questions"
> = {
  title: "Linked Lists",
  mk_description:
    "In this problem, you will work with a **singly** linked list class template, shown in the **reference material**.",
  mk_reference: createSinglyLinkedListReference()
};
