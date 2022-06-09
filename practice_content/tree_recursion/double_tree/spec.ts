import { SectionSpecification } from "examma-ray";

export const Practice_Section_Tree_Recursion_Double_Tree: SectionSpecification = {
  section_id: "practice_tree_recursion_double_tree",
  title: "Trees and Recursion",
  mk_description: "A `DoubleTree` is similar to a binary search tree, but holds two elements instead of one inside of each node and is able to store duplicate values.\n\nThe nodes in a `DoubleTree` follow the following representation invariants:\n* `datumCount >= 0` and `datumCount <= 2\n`\n* If `datumCount == 1`, then `datum1` contains a valid datum\n* `If datumCount == 2`, then `datum1` and `datum2` contain valid datums and `datum1 <= datum2\n`\n* All datums stored in the left subtree < `datum1\n`\n* All datums stored in the right subtree >= `datum2`\n* A node can only have children if both `datum1` and `datum2` contain valid datums\n\nThe code for `DoubleTree` can be found in the **reference material**.",
  mk_reference: "```\ntemplate <typename T>\nclass DoubleTree\n{\npublic:\n    DoubleTree() : root(nullptr) {}\n\n    // EFFECTS: inserts datum into the tree\n    void insert(T datum);\n\n    // EFFECTS: returns the number of times datum is present\n    //   in the tree using a linear recursive algorithm\n    int count(T datum) const;\n\nprivate:\n    struct Node\n    {\n    public:\n        Node() : datumCount(0), left(nullptr), right(nullptr) {\n\n        // EFFECTS: inserts datum into the subtree rooted at this node\n        void insert(T datum);\n\n        // EFFECTS: returns the number of times datum is present in the \n        //   subtree rooted at this node using a linear recursive algorithm\n        int count(T datum) const;\n\n    private:\n        int datumCount;\n        T datum1;\n        T datum2;\n\n        Node *left;\n        Node *right;\n    };\n    Node *root;\n};\n```\n",
  questions: [

    {
      question_id: "practice_tree_recursion_double_tree_node_count",
      points: 10,
      mk_description: "Implement the `DoubleTree::Node::count()` function below, following its RME and respecting the relevant representation invariants.\nThis function must be linear recursive.",
      response: {
        kind: "code_editor",
        code_language: "cpp",
        codemirror_mime_type: "text/x-c++src",
        header: "template<typename T>\nint DoubleTree<T>::Node::count(T datum) const {",
        starter: "",
        footer: "}",
        sample_solution:
`if (datumCount == 0) { return 0; }
if (datumCount == 1) {
  return datum1 == datum ? 1 : 0;
}
if (datum < datum1) {
  return left->count(datum);
}
int count = 0;
if (datum2 <= datum) {
  count += right->count(data);
}
if (datum1 == datum) { ++count; }
if (datum2 == datum) { ++count; }
return count;`
      }
    },

    {
      question_id: "practice_tree_recursion_double_tree_tree_count",
      points: 2,
      mk_description: "Implement the `DoubleTree::count()` function below, following its RME and respecting the relevant representation invariants.",
      response: {
        kind: "code_editor",
        code_language: "cpp",
        codemirror_mime_type: "text/x-c++src",
        header: "template<typename T>\n\nint DoubleTree<T>::count(T datum) const",
        starter: "",
        footer: "}",
        sample_solution:
`if (!root) {
  return 0;
}
return root->count(datum);`
      }
    }
  ]
}



