import { QuestionSpecification, RANDOM_SKIN } from "examma-ray";

export const Practice_Question_Linked_List_Move_Range_To_Back: QuestionSpecification = {
  question_id: "linked_list_move_range_to_back",
  tags: [],
  points: 8,
  mk_description:
`Consider adding a private member function \`{{fn_name}}()\` to \`List\`. Implement this function according to its RME.

- You may **NOT** call any functions.
- You may **NOT** use loops or recursion of any kind.
`,
  response: {
    kind: "fill_in_the_blank",
    content:
`\`\`\`cpp
// REQUIRES: {{param_first}} and {{param_last}} point to Nodes in this list.
//           The node pointed to by {{param_last}} is either the same node
//           as pointed to by {{param_first}} or comes after it in the list.
// MODIFIES: *this
// EFFECTS:  Moves all nodes starting with {{param_first}} and ending with
//           (and including) {{param_last}} to the back of the list.
// EXAMPLE: If list contains {{example_in}}, {{param_first}}
//          points to the node holding {{example_first}} and {{param_last}} points to the
//          node holding {{example_last}}, then list.{{fn_name}}({{param_first}}, {{param_last}})
//          modifies it to be {{example_out}}.
// HINT:    Use scratch paper to draw a picture.
template <typename T>
void {{fn_name}}(Node *{{param_first}}, Node *{{param_last}}) {

  if ({{param_last}} == last) {
    return; // do nothing if already at back
  }

  {{param_last}}->next->prev = _______________BLANK_______________;

  if ({{param_first}}->prev) {
    _______________BLANK_______________ = {{param_last}}->next;
  }
  else {
    first = _______________BLANK_______________;
  }

  last->next = _______________BLANK_______________;

  _______________BLANK_______________ = last;

  {{param_last}}->next = _______________BLANK_______________;

  last = {{param_last}};

}
\`\`\`
`,
    sample_solution: [
      "{{param_first}}->prev",
      "{{param_first}}->prev->next",
      "{{param_last}}->next",
      "{{param_first}}",
      "{{param_first}}->prev",
      "nullptr",
    ]
  },
  skin: RANDOM_SKIN([
    {
      skin_id: "move_range_to_back",
      replacements: {
        fn_name: "move_range_to_back",
        param_first: "rng_first",
        param_last: "rng_last",
        example_in: "[2, 4, 5, 3, 7, 9, 1]",
        example_out: "[2, 4, 9, 1, 5, 3, 7]",
        example_first: "5",
        example_last: "7"
      }
    }
  ])
};