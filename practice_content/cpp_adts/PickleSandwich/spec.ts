import { QuestionSpecification, SectionSpecification } from "examma-ray";

export const Question_Pickle_Sandwich_Missing_Const : QuestionSpecification = {
  question_id: "practice_pickle_sandwich_missing_const",
  points: 3,
  mk_description: "The `PickleSandwich::print_description()` function is itself correctly implemented, but due to one or more const-correctness mistakes elsewhere in the code, it does not compile successfully. What change(s) need to be made throughout the rest of the code in the reference material so that `print_description` compiles successfully?",
  response: {
    kind: "fill_in_the_blank",
    content:
`[[BOX______________________________________________________________



]]
`,
    sample_solution: [`The Pickle::describe() and Bread::is_toasted() functions need to be declared as const member functions. Otherwise, the compile won't allow them to be called from PickleSandwich::print_description() (which is a const member function).`]
  }
};

export const Question_Pickle_Sandwich_Ctor : QuestionSpecification = {
  question_id: "practice_pickle_sandwich_ctor",
  points: 4,
  mk_description: "Implement the `Bread` constructor according to its RME as it would appear defined **outside** of the `Bread` class definition. For this question, you must also use `assert` to verify any relevant representation invariants are successfully established. You may assume the `<cassert>` library is included.",
  response: {
    kind: "code_editor",
    codemirror_mime_type: "text/x-c++src",
    code_language: "cpp",
    header:
`// EFFECTS: Initializes a slice of bread with the
//          given kind and which is initially not toasted`,
    starter: "",
    footer: "",
    sample_solution:
`Bread::Bread(const string &kind_in)
 : kind(kind_in), toasted(false) {
  assert(kind == "white" || kind == "wheat");
}`
  }
};

export const Question_Pickle_Sandwich_Ctors : QuestionSpecification = {
  question_id: "practice_pickle_sandwich_ctors",
  points: 4,
  mk_description:
`
We would like to add a constructor to the \`PickleSandwich\` class. Consider each potential constructor implementation below. If the constructor would result in a **compile error**, write "error". Otherwise, write "no error".

**Please note** that on a live exam, you may be asked to write a brief justification of your answer **in your own words**. Thus, you may use a compiler (if you find it useful and time-efficient to do so) to check your work, but a copy/paste of a compiler error message would not be a sufficient answer.
`,
  response: {
    kind: "fill_in_the_blank",
    content:
`
\`\`\`text
PickleSandwich(const string &bread_kind, const string &condiment)
 : bread(bread_kind) {
   condiments.push_back(condiment);
}
__________BLANK__________
\`\`\`

\`\`\`text
PickleSandwich()
 : pickle(true, true, true) { } 
__________BLANK__________
\`\`\`
`,
    sample_solution: ["no error", "error"],
  }
};



export const Question_Pickle_Sandwich_Mains : QuestionSpecification = {
  question_id: "practice_pickle_sandwich_mains",
  points: 4,
  mk_description:
`
**For this question**, assume the \`PickleSandwich\` class has a default constructor that successfully initializes a sandwich (the details of the sandwich ingredients are not important for this question).

Consider each of the following code snippets, which use the classes defined in the **reference material**. If the code contains a **compile error**, write \"error\". Otherwise, write \"no error\".

**Please note** that on a live exam, you may be asked to write a brief justification of your answer **in your own words**. Thus, you may use a compiler (if you find it useful and time-efficient to do so) to check your work, but a copy/paste of a compiler error message would not be a sufficient answer.`,
  response: {
    kind: "fill_in_the_blank",
    content:
`
\`\`\`cpp
void toast_bread(const Bread &b) {
  if (!b.is_toasted()) {
    b.toast();
  }
}
__________BLANK__________
\`\`\`

\`\`\`cpp
int main() {
  PickleSandwich s;
  s.print_description();
  if (s.pickle.is_sour) {
    cout << "with a sour pickle!" << endl;
  }
}
__________BLANK__________
\`\`\`
`,
    sample_solution: ["error", "error"]
  }
};

export const Section_ADTs_Pickle_Sandwich : SectionSpecification = {
  section_id: "practice_adts_playlist",
  title: "ADTs in C++",
  mk_description:
`In this question, you'll work with a set of ADTs for representing a pickle sandwich. We're not sure that's actually a thing, but I think it works in your favor that it's a relatively simple sandwich :D.

We recommend you briefly skim the classes in the **reference material** and then answer the questions below.`,
  mk_reference:
`
\`\`\`cpp
class Pickle {
private:
  bool is_sweet;
  bool is_sour;
  bool is_spicy;

public:
  Pickle(bool is_sweet_in, bool is_sour_in, bool is_spicy_in)
   : is_sweet(is_sweet_in), is_sour(is_sour_in), is_spicy(is_spicy_in) { }

  Pickle()
   : Pickle(false, false, false) { }

   // EFFECTS: Returns a description of the pickle
   const string & describe() {
    // Implementation not shown
   }
};

class Bread {
private:
  string kind; // INVARIANT: must be "white" or "wheat"
  bool toasted;

public:

  // EFFECTS: Initializes a slice of bread with the
  //          given kind and which is initially not toasted
  // YOU IMPLEMENT THIS
  Bread(const string &kind_in);

  void toast() {
    is_toasted = true;
  }

  // EFFECTS: Returns whether or not the bread is toasted
  bool is_toasted() {
    return toasted;
  }

  // EFFECTS: Returns the kind of bread
  const string &get_kind() const {
    return kind;
  }

};

class PickleSandwich {
private:
  Bread bread;
  Pickle pickle;
  vector<string> condiments;

public:

  // Constructors not shown...see questions...

  void print_description() const {
    cout << "Bread: " << bread.get_kind() << endl;
    if(bread.is_toasted()) {
      cout << "Toasted" << endl;
    }
    cout << pickle.describe() << endl;
    cout << "Condiments:" << endl;
    for(size_t i = 0; i < condiments.size(); ++i) {
      cout << "  " << condiments[i] << endl;
    }
  }

};
\`\`\`
`,
  questions: [
    Question_Pickle_Sandwich_Missing_Const,
    Question_Pickle_Sandwich_Ctor,
    Question_Pickle_Sandwich_Ctors,
    Question_Pickle_Sandwich_Mains
  ]
}