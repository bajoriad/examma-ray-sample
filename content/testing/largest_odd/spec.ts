import { QuestionSpecification, RANDOM_QUESTION, RANDOM_SKIN, SectionSpecification } from "examma-ray";
import { SummationMCGrader } from "examma-ray/dist/graders/SummationMCGrader";


const QUESTIONS : QuestionSpecification<"multiple_choice">[] = [
  {
      question_id: "practice_test_case_1",
      points: 3,
      mk_description: "\n\n**Test case**. Select all bugs that this test case catches.\n```cpp\nvector<int> v = {7, 2, 4, 9, 1};\nassert(largestOdd(v) == 9);\n\n```",
      response: {
        kind: "multiple_choice",
        choices: ["Bug 1", "Bug 2", "Bug 3", "No bugs caught"],
        multiple: true,
        sample_solution: [1]
      }
  },
  {
      question_id: "practice_test_case_2",
      points: 3,
      mk_description: "\n\n**Test case**. Select all bugs that this test case catches.\n```cpp\nvector<int> v = {9, 3, 2, 5};\nassert(largestOdd(v) == 9);\n\n```",
      response: {
        kind: "multiple_choice",
        choices: ["Bug 1", "Bug 2", "Bug 3", "No bugs caught"],
        multiple: true,
        sample_solution: [1,2]
      }
  },
  {
      question_id: "practice_test_case_3",
      points: 3,
      mk_description: "\n\n**Test case**. Select all bugs that this test case catches.\n```cpp\nvector<int> v = {10, 2, 4, 9, 7, 3};\nassert(largestOdd(v) == 9);\n\n```",
      response: {
        kind: "multiple_choice",
        choices: ["Bug 1", "Bug 2", "Bug 3", "No bugs caught"],
        multiple: true,
        sample_solution: [0, 1]
      }
  },
  {
      question_id: "practice_test_case_4",
      points: 3,
      mk_description: "\n\n**Test case**. Select all bugs that this test case catches.\n```cpp\nvector<int> v = {5, 7};\nassert(largestOdd(v) == 7);\n\n```",
      response: {
        kind: "multiple_choice",
        choices: ["Bug 1", "Bug 2", "Bug 3", "No bugs caught"],
        multiple: true,
        sample_solution: [3]
      }
  },
  {
      question_id: "practice_test_case_5",
      points: 3,
      mk_description: "\n\n**Test case**. Select all bugs that this test case catches.\n```cpp\nvector<int> v = {1};\nassert(largestOdd(v) == 1);\n\n```",
      response: {
        kind: "multiple_choice",
        choices: ["Bug 1", "Bug 2", "Bug 3", "No bugs caught"],
        multiple: true,
        sample_solution: [2]
      }
  },
  
];

export const Section_Testing : SectionSpecification = {
  section_id: "practice_testing",
  title: "Testing",
  mk_description:
`
Consider the function \`{{fn_name}}\`, which returns {{return_desc}}. {{implementation_desc}} Here is the RME and interface for \`{{fn_name}}\`:

\`\`\`cpp
// REQUIRES: vec contains at least one odd element
// EFFECTS:  Returns the largest odd element in vec
int {{fn_name}}(const vector<int> &vec);

\`\`\`
 Here are some examples of using \`{{fn_name}}\`:
\`\`\`cpp
vector<int> v1 = {2, 6, 2, 9, 7};
{{fn_name}}(v1); // returns 9

vector<int> v1 = {8, 1, 3};
{{fn_name}}(v1); // returns 3

vector<int> v2 = {5};
{{fn_name}}(v2); // returns 5

\`\`\`

The **reference material** contains three **buggy implementations** of the function \`{{fn_name}}\`. Each implementation has **exactly one** bug in it, and a comment indicates what the bug is.

For each of the test cases below, indicate which of the bugs it would catch. A test case is considered to catch the bug if its assertion fails when run against that buggy implementation. Indicate your answer by selecting each bug that applies. If no bugs are caught, select "No bugs caught" (and nothing else).

(**Please note** that due to randomization, it is possible you may happen to get several questions with the same answer. Do your best to consider each program below individually.)
`,
  mk_reference:
`
Three **buggy implementations** of the function \`{{fn_name}}\`. Each implementation has **exactly one** bug in it, and a comment indicates what the bug is.

**Buggy Implementation 1**
\`\`\`cpp
int {{fn_name}}(const vector<int> &vec) {
  int largest = vec[0]; // bug1 - what if vec[0] isn't odd?
  for(size_t i = 1; i < vec.size(); ++i) {
    if (vec[i] % 2 != 0 && vec[i] > largest) {
      largest = vec[i];
    }
  }
  return largest;
}
\`\`\`

**Buggy Implementation 2**
\`\`\`cpp
int {{fn_name}}(const vector<int> &vec) {
  int largest = vec[0];
  size_t i = 1;
  while(largest % 2 == 0) {
    // skip over evens to find the first odd
    largest = vec[i];
    ++i;
  }
  while(i < vec.size()) {
    if (vec[i] % 2 != 0) { // bug 2 - missing check that vec[i] is larger
      largest = vec[i];
    }
    ++i;
  }
  return largest;
}

\`\`\`
**Buggy Implementation 3**
\`\`\`cpp
int {{fn_name}}(const vector<int> &vec) {
  int largest = vec[1]; // bug 3 - should start at index 0
  size_t i = 1;
  while(largest % 2 == 0) {
    // skip over evens to find the first odd
    largest = vec[i];
    ++i;
  }
  while(i < vec.size()) {
    if (vec[i] % 2 != 0 && vec[i] > largest) {
      largest = vec[i];
    }
    ++i;
  }
  return largest;
}
\`\`\`
`,
  questions: [
    RANDOM_QUESTION(3, QUESTIONS)
  ],
  skin: RANDOM_SKIN([
    {
      skin_id: "largest_odd",
      replacements: {
        "fn_name": "largest_odd",
        "return_desc": "the largest odd element from a given vector",
        "implementation_desc": "Even elements are ignored."
      }
    }
  ])
}