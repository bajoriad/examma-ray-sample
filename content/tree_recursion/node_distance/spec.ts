import { QuestionSpecification, SectionSpecification, RANDOM_SKIN } from "examma-ray";

export const Question_Tree_Recursion_Node_Depth : QuestionSpecification = {
  question_id: "recursion_tree_node_depth",
  tags: [],
  points: 10,

  mk_description:
`Implement the \`node_depth()\` function, which returns the number of steps from the root to get to the node containing a given value. See the **reference material** for additional information and examples.

- Your implementation should work correctly for any tree.
- Your code **must** use recursion (and **may not** use any loops).
- Your implementation must be **linear recursive**, but does not necessarily need to be tail recursive.
`,

  response: {
    kind: "code_editor",
    codemirror_mime_type: "text/x-c++src",
    code_language: "cpp",
    header:
`// REQUIRES: n points to a valid binary search tree of nodes
// EFFECTS: Returns the number of steps to get to a node containing 'item' from the
//          root of the given tree. If the root node contains item, returns 0.
//          If no such node exists, returns -1.
int node_depth(const Node *n, const int & item) {`,
    footer: "}",
    starter: "",
    sample_solution:
`if (!n) {
  // empty tree or item is not found in the tree
  return -1;
}
if (item == n->datum) {
  return 0;
}
if (item < n->datum) {
  return 1 + node_depth(n->left, item);
}
else {
  return 1 + node_depth(n->right, item);
}
`
  }
};

export const Question_Tree_Recursion_Node_Distance : QuestionSpecification = {
  question_id: "recursion_tree_node_distance",
  tags: [],
  points: 8,

  mk_description:
`Now, consider the \`node_distance()\` function, which returns the distance between two nodes. The first node's datum == item1, while the second node's datum == item2. The distance is the shortest path between two nodes, or the sum of the depths of the two nodes from their most common root. See the **reference material** for examples.

Implement \`node_distance()\` by filling in the blanks below.

Note that the \`node_depth()\` function you implemented in the previous section may be of use to you. You may assume it works correctly according to its RME.

`,

  response: {
    kind: "fill_in_the_blank",
    content: `\`\`\`cpp
// REQUIRES: n points to a valid binary search tree of nodes
// EFFECTS: Returns the distance, or length of the shortest path, between the
//          nodes containing the two given items in the tree rooted at 'n'.
//          If one or both items are not present in the tree, returns -1.
int node_distance(const Node * n, const int & item1, const int & item2) {

  int depth1 = node_depth(n, item1);
  int depth2 = node_depth(n, item2);
  
  if (___________________________________BLANK___________________________________) {
    return -1;
  }
  else if (item1 < n->datum && item2 < n->datum) {
    return ___________________________________BLANK___________________________________;
  }
  else if (item1 > n->datum && item2 > n->datum) {
    return ___________________________________BLANK___________________________________;
  }
  else {
    return ___________________________________BLANK___________________________________;
  }

}
\`\`\`
`,
    sample_solution: [
      "depth1 == -1 || depth2 == -1",
      "node_distance(n->left, item1, item2)",
      "node_distance(n->right, item1, item2)",
      "node_depth(n, item1) + node_ depth(n, item2)",
    ]
  }
};

export const Section_Tree_Recursion_Node_Distance: SectionSpecification = {
  section_id: "recursion_tree_node_distance",
  title: "Recursion on Trees",
  mk_description:
`In this section, you will work with a structure of nodes representing a **binary search tree** of integers, which does not contain duplicate elements. Recall that the sorting invariant for a BST is that the entire left subtree is less than the root and the entire right subtree is greater than the root, recursively for all subtrees. See the **reference material** for details.

Let's define the **depth of a node** as the number of steps taken (i.e. "go left" or "go right") from the root to reach the node. The **distance between two nodes** is the depth of the two nodes added together from their most common root (which ends up being the shortest number of steps you'd need to take up and then down to reach one from the other). See the **reference material** for examples.`,
  mk_reference: `
##### Nodes and Tree Structure
\`\`\`cpp
struct Node {
  int datum;
  Node *left;
  Node *right;
};
// a null pointer represents
// an empty tree

// INVARIANT: a tree may NOT contain duplicates

// INVARIANT: Binary Search Tree
// All values in left subtrees are < the root
// All values in right subtrees are > the root
\`\`\`

##### Examples

- For both **depth** and **distance**, if any items involved are not contained in the tree, \`-1\` is returned. (This also applies in the case of an empty tree, which does not contain any nodes.)

----------
**Depth Example**  
In the tree below, the node 8 has a depth of 0. The nodes 5 and 9 each have a depth of 1, stepping once left or right respectively. The node 7 has a depth of 2, stepping left then right.
\`\`\`text
     8    
    / \\  
   5   9  
    \\    
     7
\`\`\`

----------
**Distance Example 1**  
In the tree below, the nodes 6 and 11 share a common root at node 9. The depth of node 6 from 9 is 2 and the depth of the node 11 is 1. The distance between the two nodes is 2 + 1 = 3.
The nodes 3 and 7 share a common root at node 5. The distance between the two nodes is 1 + 2 = 3.
\`\`\`text
     5        
    / \\      
   3   9      
      / \\    
     7   11
    /
   6
\`\`\`

----------
**Distance Example 2**  
In the tree below, the nodes 1 and 3 share a common root at node 3. The distance between the two nodes is 0 + 1 = 1.
\`\`\`text
     3        
    / \\      
   1   7      
\`\`\``,
  questions: [
    Question_Tree_Recursion_Node_Depth,
    Question_Tree_Recursion_Node_Distance
  ],
  skin: RANDOM_SKIN([
    {
      skin_id: "longest_rooted_chain",
      replacements: {
        "fn_name": "longest_chain",
        "rooted_fn_name": "longest_rooted_chain",
        "depth_word": "depth",
        "chain_word_plural": "chains",
        "chain_word_plural_cap": "Chains",
        "rooted_word": "rooted",
        "param_root": "root"
      }
    }
  ])
}