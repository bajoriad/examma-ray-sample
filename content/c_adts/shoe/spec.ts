import { QuestionSpecification, RANDOM_QUESTION, SectionSpecification } from "examma-ray";

export const Question_Shoe_Init : QuestionSpecification<"code_editor"> = {
  question_id: "shoe_init",
  points: 3,
  mk_description:
`
Write the \`Shoe_init()\` function that initializes a shoe object with a given size (and an initially untied state). Note the example of using this function given in the **reference material**.
`,
  response: {
    kind: "code_editor",
    code_language: "cpp",
    codemirror_mime_type: "text/x-c++src",
    header: "",
    starter: "",
    footer: "",
    sample_solution:
`void Shoe_init(Shoe *shoe, int size) {
  shoe->size = size;
  shoe->is_tied = false;
}`
  }
}

export const Question_Shoe_Is_Tied : QuestionSpecification<"code_editor"> = {
  question_id: "shoe_is_tied",
  points: 3,
  mk_description:
`
Write the \`Shoe_is_tied()\` function that returns true if a shoe is tied, and false otherwise. Note the example of using this function given in the **reference material**.
`,
  response: {
    kind: "code_editor",
    code_language: "cpp",
    codemirror_mime_type: "text/x-c++src",
    header: "",
    starter: "",
    footer: "",
    sample_solution:
`bool Shoe_is_tied(const Shoe *shoe) {
  return shoe->is_tied;
}`
  }
}

export const Question_Shoe_Tie : QuestionSpecification<"code_editor"> = {
  question_id: "shoe_tie",
  points: 3,
  mk_description:
`
Write the \`Shoe_tie()\` function that ties a shoe. Note the example of using this function given in the **reference material**.
`,
  response: {
    kind: "code_editor",
    code_language: "cpp",
    codemirror_mime_type: "text/x-c++src",
    header: "",
    starter: "",
    footer: "",
    sample_solution:
`void Shoe_tie(Shoe *shoe) {
  shoe->is_tied = true;
}`
  }
}

export const Section_C_ADTs_Shoe : SectionSpecification = {
  section_id: "c_adts_shoe",
  title: "C-Style ADTs",
  mk_description: "In this question, you'll write functions for a **C-Style ADT** that represents a shoe. The \`Shoe\` struct is given in the **reference material**, as well as an example of the use of the ADT and its functions.",
  mk_reference: 
`
**\`Shoe\` Struct**
\`\`\`cpp
struct Shoe {
  int size;
  bool is_tied;
};
\`\`\`

**Example**
\`\`\`cpp
Shoe s;
Shoe_init(&s, 7);
// The shoe is now untied and size 7

cout << Shoe_is_tied(&s) << endl; // prints 0 (i.e. false)

Shoe_tie(&s);
cout << Shoe_is_tied(&s) << endl; // prints 1 (i.e. true)
\`\`\`
`,
  questions: [
    Question_Shoe_Init,
    Question_Shoe_Is_Tied,
    Question_Shoe_Tie,
  ]
}