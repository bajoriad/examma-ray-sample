import { RANDOM_QUESTION, SectionSpecification } from "examma-ray";

export const Practice_Section_Tree_Recursion_Traversal_Code_Reading : SectionSpecification = {
  section_id: "practice_tree_recursion_traversal_code_reading",
  title: "Tree Traversal",
  mk_description: "",
  mk_reference:
`Use this tree to answer the question:

\`\`\`text
     9      
    / \\    
   6   13   
  / \\    \\
 4   7    20
  \\        
   5        
\`\`\`

Each node in this tree is represented by objects of the following Node class:

\`\`\`cpp
struct Node {
  int datum;
  Node *left;
  Node *right;
};
\`\`\``,
  questions: [RANDOM_QUESTION(2, [
    {
      question_id: "practice_tree_recursion_traversal_code_reading_1",
      tags: [],
      points: 3,
      mk_description: "Given the following print function, what is the output produced when print is called on the root node of the tree shown in the **reference material**?\n\n```cpp\nvoid print(Node *n) {\n    if (!n) { return; }\n    cout << n->datum << \" \";\n    print(n->left);\n    print(n->right);\n}\n```",
      response: {
        kind: "fill_in_the_blank",
        content: "[[BOX___________________________________________\n\n\n\n\n]]",
        sample_solution: ["9 6 4 5 7 13 20"]
      }
    },
    {
      question_id: "practice_tree_recursion_traversal_code_reading_2",
      tags: [],
      points: 3,
      mk_description: "Given the following print function, what is the output produced when print is called on the root node of the tree shown in the **reference material**?\n\n```cpp\nvoid print(Node *n) {\n    if (!n) { return; }\n    print(n->left);\n    cout << n->datum << \" \";\n    print(n->right);\n}\n```",
      response: {
        kind: "fill_in_the_blank",
        content: "[[BOX______________________________________________________\n\n\n\n\n]]",
        sample_solution: ["4 5 6 7 9 13 20"]
      }
    },
    {
      question_id: "practice_tree_recursion_traversal_code_reading_3",
      tags: [],
      points: 3,
      mk_description: "Given the following print function, what is the output produced when print is called on the root node of the tree shown in the **reference material**?\n\n```cpp\nvoid print(Node *n) {\n    if (!n) { return; }\n    print(n->left);\n    print(n->right);\n    cout << n->datum << \" \";\n}\n```",
      response: {
        kind: "fill_in_the_blank",
        content: "[[BOX___________________________________________\n\n\n\n\n]]",
        sample_solution: ["5 4 7 6 20 13 9"]
      }
    },
  ])]
}



