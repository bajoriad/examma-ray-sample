import { SectionSpecification, RANDOM_QUESTION, QuestionSpecification } from "examma-ray"

export const Practice_Questions_Dynamic_Memory_Errors_FITB : QuestionSpecification<"fill_in_the_blank">[] = [
  {
    question_id: "dynamic_memory_errors_fitb_v1",
    points: 2,
    mk_description: "```cpp\nint main() {\n  int *a = new int(7);\n  int &b = *a;\n  delete a;\n  cout << b << endl;\n}\n\n```",
    response: {
      kind: "fill_in_the_blank",
      content: "Type of error (or no error):\n\n________________BLANK________________\n\n Output or explanation:\n\n[[BOX\n\n\n\n]]\n\n",
      sample_solution: [
        "use of dead object",
        "The reference b refers to the object that was previously deleted through the pointer a.",
      ]
    }
  },
  {
    question_id: "dynamic_memory_errors_fitb_v2",
    points: 2,
    mk_description: "```cpp\nint main() {\n  int *a;\n  int *b = new int(1);\n  a = b;\n  b = a;\n  cout << *a << \" \" << *b << endl;\n  delete a;\n  delete b;\n}\n\n```",
    response: {
      kind: "fill_in_the_blank",
      content: "Type of error (or no error):\n\n________________BLANK________________\n\n Output or explanation:\n\n[[BOX\n\n\n\n]]\n\n",
      sample_solution: [
        "incorrect delete",
        "Both a and b end up pointing to the same object, so deleting through both results in a double delete.",
      ]
    }
  },
  {
    question_id: "dynamic_memory_errors_fitb_v3",
    points: 2,
    mk_description: "```cpp\nint main() {\n  int *a = new int(6);\n  cout << *a << endl;\n  delete a;\n  a = new int[7];\n  *a = 3;\n  cout << *a << endl;\n  delete a;\n}\n\n```",
    response: {
      kind: "fill_in_the_blank",
      content: "Type of error (or no error):\n\n________________BLANK________________\n\n Output or explanation:\n\n[[BOX\n\n\n\n]]\n\n",
      sample_solution: [
        "incorrect delete",
        "The pointer a ends up pointing to a dynamically allocated array, which is incorrectly deleted with delete (rather than delete[])",
      ]
    }
  },
  {
    question_id: "dynamic_memory_errors_fitb_v4",
    points: 2,
    mk_description: "```cpp\nint main() {\n  int *a = new int(54);\n  *a = *new int(10);\n  cout << *a << endl;\n  delete a;\n}\n\n```",
    response: {
      kind: "fill_in_the_blank",
      content: "Type of error (or no error):\n\n________________BLANK________________\n\n Output or explanation:\n\n[[BOX\n\n\n\n]]\n\n",
      sample_solution: [
        "memory leak",
        "The second line allocates an int with value 10 on the heap, but the address to this int is not kept.",
      ]
    }
  },
  {
    question_id: "dynamic_memory_errors_fitb_v5",
    points: 2,
    mk_description: "```cpp\nint main() {\n  int *a = new int(32);\n  int *b = new int(64);\n  delete a;\n  *a = *b;\n  cout << *a << endl;\n  delete b;\n}\n\n```",
    response: {
      kind: "fill_in_the_blank",
      content: "Type of error (or no error):\n\n________________BLANK________________\n\n Output or explanation:\n\n[[BOX\n\n\n\n]]\n\n",
      sample_solution: [
        "use of dead object",
        "After the object a points to is deleted, it is not safe to assign to that dead object with *a = *b;",
      ]
    }
  },
  {
    question_id: "dynamic_memory_errors_fitb_v6",
    points: 2,
    mk_description: "```cpp\nint main() {\n  int *ptr = new int(18);\n  int **ptr_ptr = new int *(ptr);\n  cout << **ptr_ptr << endl;\n  delete ptr;\n}\n\n```",
    response: {
      kind: "fill_in_the_blank",
      content: "Type of error (or no error):\n\n________________BLANK________________\n\n Output or explanation:\n\n[[BOX\n\n\n\n]]\n\n",
      sample_solution: [
        "memory leak",
        "The object pointed to by ptr_ptr is not cleaned up with delete.",
      ]
    }
  }
];

export const Practice_Section_Dynamic_Memory_Errors_FITB: SectionSpecification = {
  "section_id": "dynamic_memory_errors_fitb",
  "title": "Dynamic Memory Errors",
  "mk_description": "Several `main()` functions are given below. **All compile successfully**. For each, determine if a runtime error might occur during their execution.\n\nPlease see the **reference material** to the right for additional information about answering each question.",
  "mk_reference": "**Reminder**: All code in this problem compiles successfully, but may encounter errors at runtime.\n\n**For each question**: In the first box, choose the best answer from one of the following (feel free to copy and paste so you don't have to retype):\n\n - no error\n - memory leak\n - incorrect delete\n - use of uninitialized value\n - dereferencing a null pointer\n - use of dead object\n\nIf there is no error, write the output of the program in the second box.  Otherwise if there is an error, write a brief explanation of the error in the second box.",
  "questions": [
    RANDOM_QUESTION(3, Practice_Questions_Dynamic_Memory_Errors_FITB)
  ]
};




























