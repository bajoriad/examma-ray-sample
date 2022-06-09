import { QuestionSpecification, RANDOM_QUESTION, SectionSpecification } from "examma-ray";

const OperatorOverloadQuestions : QuestionSpecification[] = [
  {
    question_id: "practice_containers_min_queue_operator_decrement",
    tags: [],
    points: 5,
    mk_description: "Implement an overloaded `--` operator (prefix decrement) for `MinQueue`. The operator should be implemented as a **non-member** function and should remove the minimum element (you may call `popMin()` in your implementation). The operator should evaluate back into the `MinQueue` object, so that multiple `--` operations may be chained.\n\nFor example:\n\n```cpp\nint main() {\n  MinQueue<int> q;\n  q.push(6);\n  q.push(2);\n  q.push(5);\n  q.push(10);\n  cout << q.min(); // prints 2\n\n  --q; // removes 2\n  cout << q.min(); // prints 5\n\n  ----q; // removes 5 and 6\n  cout << q.min(); // prints 10\n}\n\n```\nImplement the `--` operator overload as a **non-member** function in the box below. Note the template header already provided for you, and that you should use `MinQueue<T>` (rather than just `MinQueue`) in your code. Use the code editor below to write your solution, but **do not** modify the given template header.",
    response: {
      kind: "code_editor",
      code_language: "cpp",
      codemirror_mime_type: "text/x-c++src",
      starter: "template <typename T>\n",
      sample_solution:
`template <typename T>
MinQueue<T> & operator--(MinQueue<T> &q) {
  q.popMin();
  return q;
}
`
    }
  },
  {
    question_id: "practice_containers_min_queue_operator_plus_equals",
    tags: [],
    points: 5,
    mk_description: "Implement an overloaded `+=` operator for `MinQueue`. The operator should be implemented as a **non-member** function and should add the right-hand side operand as a new element to the `MinQueue` on the left-hand side (you may call `push()` in your implementation). The operator should evaluate back into the `MinQueue` object, so that multiple `+=` operations may be chained.\n\nFor example:\n\n```cpp\nint main() {\n  MinQueue<int> q;\n\n  q += 6;\n  // q contains 6\n\n  (q += 2) += 5;\n  // q contains 6, 2, and 5\n}\n\n```\nImplement the `+=` operator overload as a **non-member** function in the box below. Note the template header already provided for you, and that you should use `MinQueue<T>` (rather than just `MinQueue`) in your code. Use the code editor below to write your solution, but **do not** modify the given template header.",
    response: {
      kind: "code_editor",
      code_language: "cpp",
      codemirror_mime_type: "text/x-c++src",
      starter: "template <typename T>\n",
      sample_solution:
`template <typename T>
MinQueue<T> & operator+=(MinQueue<T> &q, const T &t) {
  q.push(t);
  return q;
}`
    }
  },
  {
    question_id: "practice_containers_min_queue_operator_insertion",
    tags: [],
    points: 5,
    mk_description: "Implement an overloaded `<<` operator for `MinQueue`. The operator should be implemented as a **non-member** function and should add the right-hand side operand as a new element to the `MinQueue` on the left-hand side (you may call `push()` in your implementation). The operator should evaluate back into the `MinQueue` object, so that multiple `<<` operations may be chained.\n\nFor example:\n\n```cpp\nint main() {\n  MinQueue<int> q;\n\n  q << 6;\n  // q contains 6\n\n  q << 2 << 5;\n  // q contains 6, 2, and 5\n}\n\n```\nImplement the `<<` operator overload as a **non-member** function in the box below. Note the template header already provided for you, and that you should use `MinQueue<T>` (rather than just `MinQueue`) in your code. Use the code editor below to write your solution, but **do not** modify the given template header.",
    response: {
      kind: "code_editor",
      code_language: "cpp",
      codemirror_mime_type: "text/x-c++src",
      starter: "template <typename T>\n",
      sample_solution:
`template <typename T>
MinQueue<T> & operator<<(MinQueue<T> &q, const T &t) {
  q.push(t);
  return q;
}`
    }
  },
  {
    question_id: "practice_containers_min_queue_operator_equality",
    tags: [],
    points: 5,
    mk_description: "Implement an overloaded `==` operator for `MinQueue`. The operator should be implemented as a **non-member** function and compare two `MinQueue` objects, one on the right-hand side and one on the left-hand side. It should return true if the **minimum elements from the two `MinQueue` objects are the same**, regardless of what other elements they contain (you may call `min()` in your implementation), and false otherwise.\n\nFor example:\n\n```cpp\nint main() {\n  MinQueue<int> q1;\n  q1.push(6);\n  q1.push(2);\n  q1.push(5);\n\n  MinQueue<int> q2;\n  q1.push(8);\n  q1.push(4);\n  q1.push(2);\n\n  cout << (q1 == q2); // true\n\n  q1.popMin(); // removes 2 from q1\n  cout << (q1 == q2); // now it's false\n}\n\n```\nImplement the `==` operator overload as a **non-member** function in the box below. Note the template header already provided for you, and that you should use `MinQueue<T>` (rather than just `MinQueue`) in your code. Use the code editor below to write your solution, but **do not** modify the given template header.",
    response: {
      kind: "code_editor",
      code_language: "cpp",
      codemirror_mime_type: "text/x-c++src",
      starter: "template <typename T>\n",
      sample_solution:
`template <typename T>
bool operator==(const MinQueue<T> &t1,
                const MinQueue<T> &t2) {
  return t1.min() == t2.min();
}`
    }
  }
];


export const Practice_Section_Containers_Sorted_Min_Queue : SectionSpecification = {
  section_id: "practice_containers_sorted_min_queue",
  title: "Container ADTs",
  mk_description: "Consider the class definition below (and in the reference material) for a container ADT called a `MinQueue`, which stores elements and allows you to find/remove the element with the lowest value. Such a data structure can be useful for a variety of applications where items should be processed in order according to priority, rather than the order that they are originally inserted.",
  mk_reference: "```cpp\n// You may assume type T supports ==, !=, <, <=, >, and >=\ntemplate <typename T>\nclass MinQueue { \npublic:\n  MinQueue() : size(0) { } // default ctor\n\n  // REQUIRES: the MinQueue is not empty\n  // EFFECTS: Returns the minimum item, but\n  // does not remove it from the MinQueue\n  const T & min() const;\n\n  // REQUIRES: the MinQueue is not empty\n  // EFFECTS: Removes the minimum item from the MinQueue\n  void popMin();\n\n  // REQUIRES: the MinQueue is not full\n  // EFFECTS: Adds 'item' to the MinQueue\n  void push(const T &item);\n\nprivate:\n  // For simplicity, we assume a fixed capacity\n  // and that the user of a MinQueue never exceeds\n  // this. This isn't a dynamic memory question :).\n  int data[10];\n\n  // number of valid items in the data array\n  int size;\n};\n\n```\nHere's an example of using a `MinQueue`:\n\n```cpp\nint main() {\n  MinQueue<int> q;\n  q.push(6);\n  q.push(2);\n  q.push(5);\n\n  cout << q.min(); // prints 2\n\n  q.popMin(); // removes 2\n  cout << q.min(); // prints 5\n}\n```",
  questions: [
    {
      question_id: "practice_containers_sorted_min_queue_complexities",
      points: 6,
      mk_description: "Assume that we define the representation invariants for `MinQueue`'s data representation such that the first `size` elements of the `data` array contain the valid items in the `MinQueue`, and these elements are **sorted in descending order** (i.e. lower elements to the back). What is the time complexity for the most efficient algorithm to implement each of the following functions?",
      response: {
        kind: "fill_in_the_blank",
        content: "________BLANK________ &nbsp;&nbsp; `min()`\n\n________BLANK________ &nbsp;&nbsp; `popMin()`\n\n________BLANK________ &nbsp;&nbsp; `push()`",
        sample_solution: [
          "constant or O(1)",
          "constant or O(1)",
          "linear or O(n)",
        ]
      }
    },
    {
      question_id: "practice_containers_sorted_min_queue_popMin",
      points: 6,
      mk_description: "Write an implementation of the `push()` function. Your implementation must put the new element in the proper location to ensure that the sorting invariant is maintained. Use the code editor below to write your solution, but **do not** modify the function signature.",
      response: {
        kind: "code_editor",
        codemirror_mime_type: "text/x-c++src",
        code_language: "cpp",
        starter: "// REQUIRES: the MinQueue is not full\n// EFFECTS: Adds 'item' to the MinQueue\nvoid push(const T &item) {\n\n\n}",
        sample_solution:
`// REQUIRES: the MinQueue is not full
// EFFECTS: Adds 'item' to the MinQueue
void push(const T &item) {
  assert(size < 10);
  int i = size;
  while (i > 0 && data[i - 1] < item) {
    data[i] = data[i - 1];
    --i;
  }
  data[i] = item; // Insert to the correct position
  ++size;
}`,
      }
    },
    RANDOM_QUESTION(1, OperatorOverloadQuestions)
  ]
}

export const Practice_Section_Containers_Unsorted_Min_Queue : SectionSpecification = {
  section_id: "practice_containers_unsorted_min_queue",
  title: "Container ADTs",
  mk_description: "Consider the class definition in the reference material for a container ADT called a `MinQueue`, which stores elements and allows you to find/remove the element with the lowest value. Such a data structure can be useful for a variety of applications where items should be processed in order according to priority, rather than the order that they are originally inserted.",
  mk_reference: "```cpp\n// You may assume type T supports ==, !=, <, <=, >, and >=\ntemplate <typename T>\nclass MinQueue { \npublic:\n  MinQueue() : size(0) { } // default ctor\n\n  // REQUIRES: the MinQueue is not empty\n  // EFFECTS: Returns the minimum item, but\n  // does not remove it from the MinQueue\n  const T & min() const;\n\n  // REQUIRES: the MinQueue is not empty\n  // EFFECTS: Removes the minimum item from the MinQueue\n  void popMin();\n\n  // REQUIRES: the MinQueue is not full\n  // EFFECTS: Adds 'item' to the MinQueue\n  void push(const T &item);\n\nprivate:\n  // For simplicity, we assume a fixed capacity\n  // and that the user of a MinQueue never exceeds\n  // this. This isn't a dynamic memory question :).\n  int data[10];\n\n  // number of valid items in the data array\n  int size;\n};\n\n```\nHere's an example of using a `MinQueue`:\n\n```cpp\nint main() {\n  MinQueue<int> q;\n  q.push(6);\n  q.push(2);\n  q.push(5);\n\n  cout << q.min(); // prints 2\n\n  q.popMin(); // removes 2\n  cout << q.min(); // prints 5\n}\n```",
  questions: [
    {
      question_id: "practice_containers_unsorted_min_queue_complexities",
      points: 3,
      mk_description: "Assume that we define the representation invariants for `MinQueue`'s data representation such that the first `size` elements of the `data` array contain the valid items in the `MinQueue`, and these elements are **not sorted**. What is the time complexity for the most efficient algorithm to implement each of the following functions?",
      response: {
        kind: "fill_in_the_blank",
        content: "________BLANK________ &nbsp;&nbsp; `min()`\n\n________BLANK________ &nbsp;&nbsp; `popMin()`\n\n________BLANK________ &nbsp;&nbsp; `push()`"
      }
    },
    {
      question_id: "practice_containers_unsorted_min_queue_popMin",
      points: 6,
      mk_description: "Write an implementation of the `popMin()` function. (You may call `min()` as a helper function if you find it useful, although it is not required to complete the problem.) Use the code editor below to write your solution, but **do not** modify the function signature.",
      response: {
        kind: "code_editor",
        code_language: "cpp",
        codemirror_mime_type: "text/x-c++src",
        starter: "// REQUIRES: the MinQueue is not empty\n// EFFECTS: Removes the minimum item from the MinQueue\nvoid popMin() {\n\n\n}"
      }
    },
    RANDOM_QUESTION(1, OperatorOverloadQuestions)
  ]
}
