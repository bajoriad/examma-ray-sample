import { QuestionSpecification, SectionSpecification } from "examma-ray";
import { readFileSync } from "fs";
import { resolve } from "path";

export const Question_Swap_Min_Front : QuestionSpecification = {
  question_id: "practice_swap_min_front",
  points: 8,
  mk_description:
`
Implement the \`swap_min_front()\` function according to the RME. In your implementation, you **MUST** use two helper functions: \`swap\` and \`find_min\`.
\`\`\`cpp
// EFFECTS: Swaps the values of objects pointed to by a and b.
void swap(int *a, int *b);

// REQUIRES: arr points to an array (or subarray) with size n
// EFFECTS:  Returns a pointer to the minimum value in arr.
//           If there is a tie for the min, finds the leftmost one.
int * find_min(int *arr, int n);
\`\`\`

Implement \`swap_min_front()\` below:
`,
  response: {
    kind: "code_editor",
    codemirror_mime_type: "text/x-c++src",
    code_language: "cpp",
    header:
`// REQUIRES: arr points to an array with size n
//           n >= 0
// EFFECTS:  Moves the minimum value to the leftmost position by
//           swapping it with the current leftmost element. If
//           there is a tie for the min, moves the leftmost one.
void swap_min_front(int *arr, int n) {`,
    starter: "",
    footer: "}",
    sample_solution:
`swap(arr, find_min(arr, n));
// arr yields a pointer to the first element
// find_min yields a pointer to the min element
// pass those pointers to swap to swap the elements`
  }
};

export const Question_Ascending_Sort: QuestionSpecification = {
  question_id: "practice_ascending_sort",
  points: 8,
  mk_description:
`
Repeated applications of the \`swap_min_front\` function can be used to sort an array. The trick is to start by calling it on the whole array, then call it on only successively smaller subarrays. For example, if the array had length 5, you could sort it by calling \`swap_min_front\` on the whole array, then on only elements 1-4, then elements 2-4, etc. Take some time to understand this algorithm before writing code for this question.

Implement the \`ascending_sort()\` function using this algorithm. Your implementation MUST use \`swap_min_front\`. You are NOT allowed to call any other functions.
`,
  response: {
    kind: "code_editor",
    codemirror_mime_type: "text/x-c++src",
    code_language: "cpp",
    header:
`// REQUIRES: arr points to an array
//           with size n
// EFFECTS:  sorts arr
void ascending_sort(int *arr, int n) {`,
    starter: "",
    footer: "}",
    sample_solution:
`// idea: n reprsents the size of the "unsorted portion"
// that we still need to sort. put one element into
// place on each iteration of the loop.
while(n > 1) { // n > 1 since we don't need to swap the last with itself
  swap_min_front(arr, n);
  ++arr; // allowed to move this since it's just a pointer
  --n;
}`
  }
};

export const Section_Arrays_Ascending_Sort : SectionSpecification = {
  section_id: "practice_arrays_ascending_sort",
  title: "Arrays Code Writing",
  mk_description: "",
  mk_reference:
`
Interfaces of functions in this problem:
\`\`\`cpp
// EFFECTS: Swaps the values of objects pointed to by a and b.
void swap(int *a, int *b);

// REQUIRES: arr points to an array (or subarray) with size n
// EFFECTS:  Returns a pointer to the minimum value in arr.
//           If there is a tie for the min, finds the leftmost one.
int * find_min(int *arr, int n);

// REQUIRES: arr points to an array with size n
//           n >= 0
// EFFECTS:  Moves the minimum value to the leftmost position by
//           swapping it with the current leftmost element. If
//           there is a tie for the min, moves the leftmost one.
void swap_min_front(int *arr, int n);

// REQUIRES: arr points to an array
//           with size n
// EFFECTS:  sorts arr
void ascending_sort(int *arr, int n);
\`\`\`
`,
  questions: [
    Question_Swap_Min_Front,
    Question_Ascending_Sort
  ]
}