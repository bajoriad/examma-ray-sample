import { QuestionSpecification, SectionSpecification } from "examma-ray";
import { SimpleMCGrader } from "examma-ray/dist/graders/SimpleMCGrader";
import { renderFITBDropBank } from "examma-ray/dist/response/fitb-drop";
import { readFileSync } from "fs";
import { resolve } from "path";

const COMPILE_DESC = `Does the given code compile? Select the most appropriate choice from the given options.`

const QUESTIONS_COMPILE : QuestionSpecification<"multiple_choice">[] = [

{
  code:
`Instrument inst;
inst.play();`,
  correct_answer_choice: 0,
},

{
  code:
`Horn horn;
horn.play();`,
  correct_answer_choice: 1,
},

{
  code:
`Trumpet trumpet;
trumpet.play();`,
  correct_answer_choice: 1,
},

{
  code:
`Drumset drums;
Instrument *inst_ptr = &drums;
inst_ptr->play();`,
  correct_answer_choice: 1,
},

{
  code:
`Drumset drums;
Instrument *inst_ptr = &drums;
cout << inst_ptr->num_drums() << endl;`,
  correct_answer_choice: 0,
},

{
  code:
`Trumpet trumpet;
Instrument *inst_ptr = &trumpet;
inst_ptr->play();`,
  correct_answer_choice: 1,
},

{
  code:
`Trumpet trumpet;
Instrument *inst_ptr = &trumpet;
Horn *trumpet_ptr = inst_ptr;
inst_ptr->play();
trumpet_ptr->play();`,
  correct_answer_choice: 0,
},
  
  ].map((question_info, i) => ({
    question_id: `practice_polymorphism_instruments_compile_${i}`,
    points: 1,
    mk_description:`${COMPILE_DESC}\n\n\`\`\`cpp\n${question_info.code}\n\`\`\``,
    response: {
      kind: "multiple_choice",
      multiple: false,
      choices: [
        "Compile Error",
        "No Compile Errors"
      ],
      sample_solution: [question_info.correct_answer_choice],
      default_grader: {
        grader_kind: "simple_multiple_choice",
        correct_index: question_info.correct_answer_choice
      },
    }
  }));
  


export const Question_Polymorphism_Instruments_Runtime : QuestionSpecification = {
  question_id: "practice_polymorphism_instruments_runtime",
  points: 8,
  mk_description: `The code below compiles successfully and runs without errors or undefined behavior. For each portion of the code, write the output produced in the box right below the code. If there is no output for that portion, write "none".`,
  response: {
    kind: "fill_in_the_blank",
    content:
`
\`\`\`cpp
int main() {
  Trumpet trumpet;
  [[BOX________________________________________________
  
  ]]

  Instrument *inst_ptr = &trumpet;
  Horn *horn_ptr = &trumpet;
  Trumpet *trumpet_ptr = &trumpet;
  [[BOX________________________________________________
  
  ]]

  inst_ptr->play();
  cout << inst_ptr->is_loud() << endl;
  [[BOX________________________________________________
  
  ]]

  horn_ptr->play();
  cout << horn_ptr->is_loud() << endl;
  [[BOX________________________________________________
  
  ]]

  trumpet_ptr->play();
  cout << trumpet_ptr->is_loud();
  [[BOX________________________________________________
  
  ]]

  Horn horn;
  Instrument *inst_ptr2 = &horn;
  Horn *horn_ptr2 = &horn;
  [[BOX________________________________________________
  
  ]]
  
  inst_ptr2->play();
  horn_ptr2->play();
  [[BOX________________________________________________
  
  ]]
}
\`\`\``,
    sample_solution: [
`Instrument ctor
Horn ctor
Trumpet ctor`,

`none`,

`bah dah dah!
false (or 0)`,

`bah dah dah!
true (or 1)`,

`bah dah dah!
true (or 1)`,

`Instrument ctor
Horn ctor`,

`wah wah!
wah wah!`,
    ]
  }
};



export const Question_Polymorphism_Drag_Drop_Instruments : QuestionSpecification<"fitb_drop"> = {
  question_id: "polymorphism_drag_drop_instruments",
  points: 6,
  mk_description:
`You want to add a new member function \`tune()\` that tunes an instrument. Some instruments require tuning, and the behavior will be different for each (although the actual details of tuning instruments are greatly simplified or omitted for the code in this question). On the other hand, some instruments do not require tuning at all (again, a simplification for this question).

Please see the sample output in the **reference material** to get an idea of what different instruments should do when the \`tune()\` function is called on them through a pointer.

**Drag and drop** blocks of code from the given bank in the **reference material**, so that the code works as indicated in sample output and follows best practices of inheritance and polymorphism.

- You should not use any block more than once.
- You may rearrange and order the blocks however you like.
- You may drop multiple blocks in a single location (e.g. to add multiple member function definitions)
- It's possible a drop location should be empty. If so, you may just leave it empty.
- To remove a block, drag and drop it outside the code area.
`,
  response: {
    kind: "fitb_drop",
    content:
`
\`\`\`cpp
class Instrument {
public:
  Instrument() { cout << "Instrument ctor" << endl; }

  virtual void play() = 0;
  bool is_loud() { return false; } 

  // Add additional code to the Instrument class here as appropriate
[[________________________________________DROP________________________________________



]]
};


class Horn : public Instrument {
public:
  Horn() { cout << "Horn ctor" << endl; }

  virtual void play() { cout << "wah wah!" << endl; }
  bool is_loud() { return true; }

  // Add additional code to the Horn class here as appropriate
[[________________________________________DROP________________________________________





]]
};


class Trumpet : public Horn {
public:
  Trumpet() { cout << "Trumpet ctor" << endl; }

  virtual void play() { cout << "bah dah dah!" << endl; }

  // Add additional code to the Trumpet class here as appropriate
[[________________________________________DROP________________________________________





]]
};


class Drumset : public Instrument {
public:
  Drumset() { cout << "Drumset ctor" << endl; }

  virtual void play() { cout << "badum tsss!" << endl; }
  bool is_loud() { return true; }
  int num_drums() { /* Implementation not shown */ }

  // Add additional code to the Drumset class here as appropriate
[[________________________________________DROP________________________________________





]]
};

\`\`\``,
    droppables: [
      {
        id: "tune_1",
        content:
`\`\`\`cpp
void tune() {
  cout << "This instrument does not require tuning." << endl;
}
\`\`\``,
      },
      {
        id: "tune_2",
        content:
`\`\`\`cpp
virtual void tune() = 0 {
  cout << "This instrument does not require tuning." << endl;
}
\`\`\``,
      },
      {
        id: "tune_3",
        content:
`\`\`\`cpp
virtual void tune() = 0;
\`\`\``,
      },
      {
        id: "tune_4",
        content:
`\`\`\`cpp
virtual void tune() {
  cout << "This instrument does not require tuning." << endl;
}
\`\`\``,
      },
      {
        id: "tune_5",
        content:
`\`\`\`cpp
virtual void tune() const {
  cout << "This instrument does not require tuning." << endl;
}
\`\`\``,
      },
      {
        id: "tune_6",
        content:
`\`\`\`cpp
void tune() override {
  cout << "Adjusting valves." << endl;
  // Code that changes some private member variables of
  // the Horn class to implement the tuning functionality
}
\`\`\``,
      },
      {
        id: "tune_7",
        content:
`\`\`\`cpp
void tune() override {
  Instrument::tune();
  cout << "Adjusting valves." << endl;
  // Code that changes some private member variables of
  // the Horn class to implement the tuning functionality
}
\`\`\``,
      },
      {
        id: "tune_8",
        content:
`\`\`\`cpp
void tune() const override {
  cout << "Adjusting valves." << endl;
  // Code that changes some private member variables of
  // the Horn class to implement the tuning functionality
}
\`\`\``,
      },
      {
        id: "tune_9",
        content:
`\`\`\`cpp
void tune() override {
  cout << "This instrument does not require tuning." << endl;
}
\`\`\``,
      },
    ],
    sample_solution: [
      [
        { id: "tune_4" }
      ],
      [
        { id: "tune_6" }
      ],
      [
        // BLANK
      ],
      [
        // BLANK
      ]
    ],
  }
};




export const Section_Polymorphism_Instruments : SectionSpecification = {
  section_id: "practice_polymorphism_instruments",
  title: "Inheritance and Polymorphism",
  mk_description:
`For this section, refer to the **reference material** for a hierarchy of classes representing musical instruments.

**Note**: This question is directly adapted from an old exam given on paper, where students did not have access to a computer. Plugging the code into a compiler and/or running the code makes this problem trivial. Although you are welcome to use those resources anywhere you find them helpful on the real exam, you should not necessarily expect them to be able to answer the problem for you (i.e. we design questions for online exams with this in mind).

For the best practice experience, try to work through this question on your own.`,
  mk_reference:
`
\`\`\`cpp
class Instrument {
public:
  Instrument() { cout << "Instrument ctor" << endl; }

  virtual void play() = 0;
  bool is_loud() { return false; } 
};


class Horn : public Instrument {
public:
  Horn() { cout << "Horn ctor" << endl; }

  virtual void play() { cout << "wah wah!" << endl; }
  bool is_loud() { return true; }
};


class Trumpet : public Horn {
public:
  Trumpet() { cout << "Trumpet ctor" << endl; }

  virtual void play() { cout << "bah dah dah!" << endl; }
};


class Drumset : public Instrument {
public:
  Drumset() { cout << "Drumset ctor" << endl; }

  virtual void play() { cout << "badum tsss!" << endl; }
  bool is_loud() { return true; }
  int num_drums() { /* Implementation not shown */ }
};
\`\`\`
`,
  questions: [
    ...QUESTIONS_COMPILE,
    Question_Polymorphism_Instruments_Runtime,
  ]
}




export const Section_Polymorphism_Instruments_Drag_Drop : SectionSpecification = {
  section_id: "practice_polymorphism_instruments_drag_drop",
  title: "Polymorphism and Design",
  mk_description:
`In this section, you'll add additional code to the hierarchy of instrument classes from the previous section.`,
  mk_reference:
`
**Examples**

\`\`\`cpp

// Another class for the example:
class Triangle : public Instrument {
public:
  Triangle() { cout << "Triangle ctor" << endl; }

  virtual void play() { cout << "ting ting ting!" << endl; }
  bool is_loud() { return true; }
};

// Instrument instrument; // not allowed, Instrument is abstract
Horn horn;
Trumpet trumpet;
Drumset drumset;
Triangle triangle;

Instrument *ptr;

ptr = &horn;
ptr->tune(); // prints "Adjusting valves."

ptr = &trumpet;
ptr->tune(); // prints "Adjusting valves."

ptr = &drumset;
ptr->tune(); // prints "This instrument does not require tuning."

ptr = &triangle;
ptr->tune(); // prints "This instrument does not require tuning."
\`\`\`

**Code Bank**
${renderFITBDropBank(
  Question_Polymorphism_Drag_Drop_Instruments.response.droppables,
  Question_Polymorphism_Drag_Drop_Instruments.question_id
)}
`,
  questions: [
    Question_Polymorphism_Drag_Drop_Instruments
  ]
}