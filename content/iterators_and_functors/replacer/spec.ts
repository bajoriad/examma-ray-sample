import { QuestionSpecification, SectionSpecification } from "examma-ray";

export const Practice_Questions_Iterators_And_Functors_Replacer: QuestionSpecification = {
  question_id: "practice_iterators_and_functors_replacer_fitb",
  tags: [],
  points: 8,
  mk_description: "Complete the implementation of `Replacer` below by filling in the boxes.\n\nIf you believe a blank/box should be **empty**, write `BLANK`.",
  response: {
    kind: "fill_in_the_blank",
    content:
`
\`\`\`cpp
template <typename T>; // Note: T must support ==
class Replacer {
private:
  const T target;
  const T replacement;

public:
  Replacer(_________________________________BLANK_________________________________)
   : _________________________________BLANK_________________________________ { }
  
  // Function call operator
  _______BLANK_______ operator()(_______________BLANK_______________ item) const {
    [[BOX___________________________________________________________
    
    
    ]]
  }
};
\`\`\`
`,
    sample_solution: [
      "const T &target_in, const T &replacement_in",
      "target(target_in), replacement(replacement_in)",
      "T",
      "T &",
      "if (item == target) {\n  item = replacement;\n}"
    ]
  }
};


export const Practice_Questions_Iterators_And_Functors_Replacer_Map: QuestionSpecification = {
  "question_id": "practice_iterators_and_functors_replacer_map",
  "tags": [],
  "points": 8,
  "mk_description":
`
Write a function \`map\` (not to be confused with the map data structure) that applies a given functor to a sequence of elements and write the results (of the called functor on each element) into another container through an output iterator. For example:

\`\`\`cpp
vector<int> input = { 1, 2, 3, 4, 5 };
vector<int> output = { 0, 0, 0, 0, 0 }; // placeholder for results
Negator neg; // A functor that returns -1 times its input

map(input.begin(), input.end(), neg, output.begin());
// output now contains { -1, -2, -3, -4, -5 }
\`\`\` 

 Implement the \`map\` function below.
`,
  "response": {
    kind: "code_editor",
    codemirror_mime_type: "text/x-c++src",
    code_language: "cpp",
    starter: "",
    header:
`// REQUIRES: the sequence specified by 'out' has room for the results
template <typename InIter, typename Functor, typename OutIter>
void map(InIter begin, InIter end, Functor fn, OutIter out) {`,
    footer: "}",
    sample_solution:
`while(begin != end) {
  *out = fn(*begin);
  ++begin;
  ++out;
 } 
`
  }
};


export const Practice_Questions_Iterators_And_Functors_Replacer_Main: QuestionSpecification = {
  "question_id": "practice_iterators_and_functors_replacer_main",
  "tags": [],
  "points": 8,
  "mk_description":
`
Finally, use the Replacer functor and map function to write the replaceWord function, which replaces all instances of a target word in a given vector. For example:
\`\`\`cpp
vector<string> v = {\"i\", \"wrote\", \"this\", \"sentence\", \"yes\", \"i\", \"did\"};
replaceAll(v, \"i\", \"I\");
// v now contains {\"I\", \"wrote\", \"this\", \"sentence\", \"yes\", \"I\", \"did\"}
\`\`\`

Complete the implementation of \`replaceAll\` below.
 - **IMPORTANT**: You may **NOT** directly use a loop in your implementation.
`,
  "response": {
    kind: "code_editor",
    codemirror_mime_type: "text/x-c++src",
    code_language: "cpp",
    starter: "",
    header:
`// EFFECTS: Replaces all instances of the word 'target' in the 'words'
//          vector with the string 'replacement'.
void replaceAll(vector<string> &words, const string &target, const string &replacement) {`,
    footer: "}",
    sample_solution:
`Replacer rep(target, replacement);
map(words.begin(), words.end(), rep, words.begin());`
  }
};


export const Practice_Section_Iterators_And_Functors_Replacer: SectionSpecification = {
  section_id: "practice_iterators_and_functors_section_replacer",
  "title": "Iterators and Functors",
  "mk_description":
`
Consider a functor called \`Replacer\`. It is constructed with two items, a *target* and a *replacement*. When called on another item, it returns the original unless it is \`==\` to the target, in which case it returns the replacement instead. For example (this example is also shown in the reference material):

\`\`\`cpp
// target=\"fish\", replacement=\"crab\"
Replacer<string> rep(\"fish\", \"crab\");

cout << rep(\"lobster\") << endl; // prints \"lobster\"
cout << rep(\"fish\") << endl; // prints \"crab\"
\`\`\`

Note that the type of item to consider is flexible:

\`\`\`cpp
// target=0, replacement=1
Replacer<int> rep(0, 1);

cout << rep(2) << endl; // prints 2
cout << rep(0) << endl; // prints 1
\`\`\`
`,
  "mk_reference":
`
#### Replacer Examples

Here's an example that uses a \`Replacer\` for strings to replace "fish" with "crab".

\`\`\`cpp
// target=\"fish\", replacement=\"crab\"
Replacer<string> rep(\"fish\", \"crab\");

cout << rep(\"lobster\") << endl; // prints \"lobster\"
cout << rep(\"fish\") << endl; // prints \"crab\"
\`\`\`

Note that the type of item to consider is flexible. The example below operates on integers and replaces 0 with 1.

\`\`\`cpp
// target=0, replacement=1
Replacer<int> rep(0, 1);

cout << rep(2) << endl; // prints 2
cout << rep(0) << endl; // prints 1
\`\`\`
`,
  "questions": [
    Practice_Questions_Iterators_And_Functors_Replacer,
    Practice_Questions_Iterators_And_Functors_Replacer_Map,
    Practice_Questions_Iterators_And_Functors_Replacer_Main,
  ]
}