import { QuestionSpecification, RANDOM_QUESTION, RANDOM_SKIN, SectionSpecification } from "examma-ray";

export const Practice_Question_Big_Three_V1_Assignment_Op : QuestionSpecification = {
  question_id: "practice_big_three_v1_assignment_op",
  tags: [],
  points: 9,
  mk_description:
`
Implement the **assignment operator** as it would be defined inside the \`{{class_name}}\` class by selecting from the lines of code given below. Click all lines that should be included. You are not able to change the relative ordering of the lines. You may use the buttons to toggle between viewing all choices or just the ones you have selected to preview your chosen code. When finished, the **selected lines should form a working function** that performs a **deep copy** where appropriate and **avoids undefined behavior or memory leaks**. Some lines contain **mistakes** or are **unnecessary** for the function - these lines should not be selected.
`,
  response: {
    kind: "select_lines",
    code_language: "cpp",
    choices: [
      {
        kind: "item",
        text: "{{class_name}} *operator=(const {{class_name}} &rhs) {",
        forced: false
      },
      {
        kind: "item",
        text: "{{class_name}} &operator=(const {{class_name}} &rhs) {",
        forced: false
      },
      {
        kind: "item",
        text: "  if (&this == rhs) { return *this; }",
        forced: false
      },
      {
        kind: "item",
        text: "  if (this == &rhs) { return *this; }",
        forced: false
      },
      {
        kind: "item",
        text: "  delete {{mem_array}};",
        forced: false
      },
      {
        kind: "item",
        text: "  delete[] {{mem_array}};",
        forced: false
      },
      {
        kind: "item",
        text: "  delete {{mem_vector}};",
        forced: false
      },
      {
        kind: "item",
        text: "  for(size_t i=0; i < {{mem_vector}}.size(); ++i) {\n    delete {{mem_vector}}[i];\n  }  ",
        forced: false
      },
      {
        kind: "item",
        text: "  while(!{{mem_vector}}.empty()) {\n    {{mem_vector}}.pop_back();\n  }",
        forced: false
      },
      {
        kind: "item",
        text: "  {{mem_array}} = rhs.{{mem_array}};",
        forced: false
      },
      {
        kind: "item",
        text: "  {{mem_array}} = new {{array_elt_class_name}}[{{array_capacity}}];",
        forced: false
      },
      {
        kind: "item",
        text: "  for(int i = 0; i < {{array_capacity}}; ++i) {\n    {{mem_array}}[i] = rhs.{{mem_array}}[i];\n  }",
        forced: false
      },
      {
        kind: "item",
        text: "  for (int i = 0; i < {{array_capacity}}; ++i) {\n    {{mem_array}}[i] = new {{array_elt_class_name}}(rhs.{{mem_array}}[i]);\n  }",
        forced: false
      },
      {
        kind: "item",
        text: "  {{mem_vector}} = rhs.{{mem_vector}};",
        forced: false
      },
      {
        kind: "item",
        text: "  {{mem_vector}} = new vector<{{dynamic_class_name}}>(rhs.{{mem_vector}});",
        forced: false
      },
      {
        kind: "item",
        text: "  for(size_t i=0; i < rhs.{{mem_vector}}.size(); ++i) {\n    {{mem_vector}}.push_back(new {{dynamic_class_name}}(*rhs.{{mem_vector}}[i]));\n  }",
        forced: false
      },
      {
        kind: "item",
        text: "  return *this;",
        forced: false
      },
      {
        kind: "item",
        text: "  return rhs;",
        forced: false
      }
    ],
    footer: "}",
    sample_solution: [1,3,7,8,11,15,16],
  }
}






export const Practice_Question_Big_Three_V1_Destructor: QuestionSpecification = {
  question_id: "practice_big_three_v1_destructor",
  points: 4,
  mk_description: "Implement the destructor for the `{{class_name}}` class. The destructor should ensure any dynamic resources owned by the `{{class_name}}` are cleaned up.",
  response: {
    kind: "code_editor",
    codemirror_mime_type: "text/x-c++src",
    code_language: "cpp",
    header: "~{{class_name}}() {",
    starter: "",
    footer: "}",
    sample_solution:
`for(size_t i = 0; i < sculptures.size(); ++i) {
  delete sculptures[i];
}`
  }
};

export const Practice_Questions_Big_Three_V1_Add: QuestionSpecification[] = [
  {
    question_id: "practice_big_three_v1_add_v1",
    points: 4,
    mk_description:
`
We want to add a new public member function to the \`{{class_name}}\` class that {{add_func_desc}}. A potential implementation of \`{{add_func_name}}\` is given below. **It compiles successfully**. Select the appropriate option to indicate which runtime error (if any) might result from using the function. There is only **one** correct answer.

\`\`\`cpp
// REQUIRES: There is at least one {{dynamic_class_noun}} in the vector.
// EFFECTS: Removes the last {{dynamic_class_noun}} in the vector and
//          returns the {{dynamic_class_mem_double_noun}} of that {{dynamic_class_noun}}.
double {{add_func_name}}() {
  {{dynamic_class_name}} *ptr = {{mem_vector}}[{{mem_vector}}.size() - 1];
  {{mem_vector}}.pop_back();
  return ptr->get_{{dynamic_class_mem_double}}();
}
\`\`\`
`,
    response: {
      kind: "multiple_choice",
      choices: [
        "no error",
        "memory leak",
        "double free",
        "use of uninitialized value",
        "dereference null pointer",
        "delete non-heap object",
        "use of dead object",
        "out of bounds array access",
      ],
      multiple: false,
      sample_solution: [1]
    }
  },
  {
    question_id: "practice_big_three_v1_add_v2",
    points: 4,
    mk_description: 
`
We want to add a new public member function to the \`{{class_name}}\` class that {{add_func_desc}}. A potential implementation of \`{{add_func_name}}\` is given below. **It compiles successfully**. Select the appropriate option to indicate which runtime error (if any) might result from using the function. There is only **one** correct answer.

\`\`\`cpp
// REQUIRES: There is at least one {{dynamic_class_noun}} in the vector.
// EFFECTS: Removes the last {{dynamic_class_noun}} in the vector and
//          returns the {{dynamic_class_mem_double_noun}} of that {{dynamic_class_noun}}.
double {{add_func_name}}() {
  {{dynamic_class_name}} *ptr = {{mem_vector}}[{{mem_vector}}.size() - 1];
  delete {{mem_vector}}[{{mem_vector}}.size() - 1];
  {{mem_vector}}.pop_back();
  return ptr->get_{{dynamic_class_mem_double}}();
}
\`\`\`
`,
    response: {
      kind: "multiple_choice",
      choices: [
        "no error",
        "memory leak",
        "double free",
        "use of uninitialized value",
        "dereference null pointer",
        "delete non-heap object",
        "use of dead object",
        "out of bounds array access",
      ],
      multiple: false,
      sample_solution: [6]
    }
  },
  {
    question_id: "practice_big_three_v1_add_v3",
    points: 4,
    mk_description: 
`
We want to add a new public member function to the \`{{class_name}}\` class that {{add_func_desc}}. A potential implementation of \`{{add_func_name}}\` is given below. **It compiles successfully**. Select the appropriate option to indicate which runtime error (if any) might result from using the function. There is only **one** correct answer.

\`\`\`cpp
// REQUIRES: There is at least one {{dynamic_class_noun}} in the vector.
// EFFECTS: Removes the last {{dynamic_class_noun}} in the vector and
//          returns the {{dynamic_class_mem_double_noun}} of that {{dynamic_class_noun}}.
double {{add_func_name}}() {
  {{dynamic_class_name}} *ptr = {{mem_vector}}[{{mem_vector}}.size() - 1];
  {{mem_vector}}.pop_back();
  double {{dynamic_class_mem_double}} = ptr->get_{{dynamic_class_mem_double}}();
  delete ptr;
  return {{dynamic_class_mem_double}};
}
\`\`\`
`,
    response: {
      kind: "multiple_choice",
      choices: [
        "no error",
        "memory leak",
        "double free",
        "use of uninitialized value",
        "dereference null pointer",
        "delete non-heap object",
        "use of dead object",
        "out of bounds array access",
      ],
      multiple: false,
      sample_solution: [0]
    }
  },
];



export const Practice_Section_Big_Three_V1 : SectionSpecification = {
  section_id: "practice_big_three_v1",
  title: "The Big Three",
  mk_description: "{{intro}}",
  mk_reference:
`
\`\`\`cpp
class {{array_elt_class_name}} {
public:
  // Default construct a {{default_constructed_array_elt_noun}}
  {{array_elt_class_name}}();

  // Custom constructor for a specific {{array_elt_noun}}
  {{array_elt_class_name}}(const string &{{array_elt_class_mem_string}}, double {{array_elt_class_mem_double}});

  // Assume the Big Three for {{array_elt_class_name}} are properly implemented
};

class {{dynamic_class_name}} {
public:
  // Custom constructor for a specific {{dynamic_class_noun}}
  {{dynamic_class_name}}(const string &{{dynamic_class_mem_string}}, double {{dynamic_class_mem_double}});

  // Assume the Big Three for {{dynamic_class_name}} are properly implemented

  // Returns the {{dynamic_class_mem_double_noun}} of this {{dynamic_class_noun}}
  double get_{{dynamic_class_mem_double}}() const;
};

class {{class_name}} {
public:
  // Default ctor. Note all the {{array_elt_plural_noun}} will be default
  // constructed as part of the {{mem_array}} array.
  {{class_name}}() { }

private:
  // An array of the {{array_elt_plural_noun}}. A {{class_noun}} always
  // has {{array_capacity}} valid {{array_elt_plural_noun}} (i.e. none of
  // the elements are memory junk, though some might be default-constructed
  // {{default_constructed_array_elt_plural_noun}}).
  {{array_elt_class_name}} {{mem_array}}[{{array_capacity}}];

  // A vector of pointers to dynamically allocated {{dynamic_class_noun_plural}}
  vector<{{dynamic_class_name}}*> {{mem_vector}};

};

\`\`\`
`,
  questions: [
    RANDOM_QUESTION(1,Practice_Questions_Big_Three_V1_Add),
    Practice_Question_Big_Three_V1_Destructor,
    Practice_Question_Big_Three_V1_Assignment_Op,
  ],
  skin: RANDOM_SKIN([
    {
      skin_id: "gallery",
      replacements: {
        "intro":
`
Consider the following ADTs used to represent a \`Gallery\` in a museum containing paintings and sculptures. See the **reference material** for the class definition and more details in the comments.
`,
        "class_name": "Gallery",
        "class_noun": "gallery",
        "array_elt_class_name": "Painting",
        "array_elt_class_mem_string": "artist",
        "array_elt_class_mem_double": "Painting",
        "dynamic_class_name": "Sculpture",
        "dynamic_class_noun": "sculpture",
        "dynamic_class_noun_plural": "sculptures",
        "mem_array": "paintings",
        "array_capacity": "5",
        "array_elt_noun": "painting",
        "array_elt_plural_noun": "paintings",
        "mem_vector": "sculptures",
        "default_constructed_array_elt_noun": "blank canvas",
        "default_constructed_array_elt_plural_noun": "blank canvases",
        "add_func_name": "remove_sculpture",
        "add_func_desc": "removes a sculpture",
        "dynamic_class_mem_string": "name",
        "dynamic_class_mem_string_noun": "name",
        "dynamic_class_mem_double": "value",
        "dynamic_class_mem_double_noun": "value",
      }
    }
  ])
};
