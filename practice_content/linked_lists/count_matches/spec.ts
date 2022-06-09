import { QuestionSpecification, RANDOM_SKIN } from "examma-ray";

export const Practice_Question_List_Matches: QuestionSpecification = {
  question_id: "linked_list_matches",
  tags: [],
  points: 10,
  mk_description:
`Consider adding a member function \`{{fn_name}}()\` to \`List\`. Implement this function according to its RME.

The intent of this problem is to work directly with the node structure of the list. Along those lines, please respect these restrictions:

- You may **not** use iterators.
- You may **not** call any other functions as helpers.
- You may **not** create/destroy any nodes.`,
  response: {
    kind: "code_editor",
    codemirror_mime_type: "text/x-c++src",
    code_language: "cpp",
    header:
`// EFFECTS: Returns the number of elements that are
//          at the same position and have the same
//          value in both this list and the other
// EXAMPLES:
//  this list: {6, 5, 6}, other: {2, 5, 6} -> returns 2
//  this list: {5}, other: {5, 6} -> returns 1
//  this list: {4, 7}, other: {7, 4} -> returns 0
//  this list: {5}, other: {} -> returns 0
int {{fn_name}}(const List &other) const {`,
    footer: "}",
    starter: "",
    sample_solution:
`Node *n1 = first;
Node *n2 = other.first;
int matches = 0;
while(n1 && n2) {
 if (n1->datum == n2->datum) {
 ++matches;
 }
 n1 = n1->next;
 n2 = n2->next;
}
return matches;
`
  },
  skin: RANDOM_SKIN([
    {
      skin_id: "count_matches",
      replacements: {
        fn_name: "count_matches",
      }
    }
  ])
};