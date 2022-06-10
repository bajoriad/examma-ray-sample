import { QuestionSpecification, SectionSpecification} from "examma-ray";

export const Practice_Question_List_Index_Of : QuestionSpecification = {
  question_id: "recursion_list_index_of",
  tags: [],
  points: 8,
  mk_description:
`For this question, you will work with a structure of nodes (see reference material) representing a **singly linked list** of integers.

Consider the \`index_of\` function below, which searches a **singly linked list** represented by \`Node\`s for a particular value and returns the 0-based index at which that value first occurs (or \`-1\` if the value is not found).

The \`index_of\` function internally calls a helper function \`index_of_helper\`, passing in an initial value of \`0\` for the \`index\` parameter:

\`\`\`cpp
// EFFECTS: Returns the index at which 'value' first occurs in the
//          given list. If the value does not occur, returns -1.
Node *index_of(Node *node, int value) {
    return index_of_helper(node, value, 0);
}
\`\`\`

Implement the \`index_of_helper\` function below.

- Your implementation should work correctly for any list.
- Your code **must** use recursion (and **may not** use any loops).
- Your implementation must be **tail recursive**.
- You may not call any functions, other than calling \`index_of_helper\` recursively.`,
  response: {
    kind: "code_editor",
    codemirror_mime_type: "text/x-c++src",
    code_language: "cpp",
    header: "int index_of_helper(Node *node, int value, int index) {",
    starter: "",
    footer: "}",
    sample_solution:
`if (!node) {
  return -1;
 }
 if (node->datum == value) {
  return index;
 }
 return index_of_helper(node->next, value, index + 1);`
  }
};

export const Practice_Section_Recursion_List_Index_Of : SectionSpecification = {
  section_id: "recursion_list_index_of",
  title: "Recursion on Lists",
  mk_description: "",
  mk_reference: `
##### Nodes and List Structure
\`\`\`cpp
struct Node {
  int datum;
  Node *next;
};
// a null pointer represents
// an empty list
\`\`\`

##### \`index_of()\` Examples

Assume the list contains:

\`\`\`text
0 -> 3 -> 4 -> 0 -> 3 -> 2
\`\`\`

If \`value\` is 4, 2 should be returned.
If \`value\` is 3, 1 should be returned.
If \`value\` is 5, -1 should be returned.
`,
  questions: [
    Practice_Question_List_Index_Of,
  ],
}