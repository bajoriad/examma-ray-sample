import { QuestionSpecification, SectionSpecification } from "examma-ray";
import { CodeWritingGrader } from "examma-ray/dist/graders/CodeWritingGrader";
import { Rubric_CString_Trim } from "./rubric";

export const Question_CString_Trim: QuestionSpecification = {
  question_id: "cstring_trim_cstr",
  points: 6,
  mk_description:
`
Implement the \`trim_cstr\` function, which removes space or tab characters that occur at the end of a C-style string, according to its RME.

Several examples of the function's behavior are provided in the **reference material**.

- You may NOT use the \`string\` class from the standard library
- You may NOT call any functions from the standard library (e.g \`strlen\`, etc.)
`,
  response: {
    kind: "code_editor",
    codemirror_mime_type: "text/x-c++src",
    code_language: "cpp",
    header:
`// REQUIRES: str points to a valid cstring
// MODIFIES: The cstring pointed to by str
// EFFECTS:  Removes any space or tab characters that occur at the
//           end of the string str. (You can check against the character
//           literals ' ' and '\\t' to detect spaces and tabs.)
void trim_cstr(char *str) {`,
    starter: "",
    footer: "",
    sample_solution:
`// To check for trailing ' ' and '\\t' characters, we go to the end
// of the cstring (by finding the null char) and work backwards.
// move str until reaching the null terminator
while(*str) { ++str; }

--str; // move back one

// skip over any spaces or tabs by continuing to move backward
while(*str == ' ' || *str == '\\t') { --str; }

// str now points to the last non-space, non-tab character
// Put the null character after this position, shortening the string
*(str+1) = '\\0';
`,
    default_grader: { grader_kind: "manual_code_writing" }
  }
};

export const Question_Trim_Lines: QuestionSpecification = {
  question_id: "cstring_trim_lines",
  points: 5,
  mk_description:
`
Implement the \`trim_lines\` function below according to its RME.

- Your implementation may use the \`string\` datatype.
- Your implementation may use the \`getline()\` function from the standard library (<a href="https://www.cplusplus.com/reference/string/string/getline/" target="_blank">online documentation</a>).
- Your implementation may NOT use stream functions \`.ignore()\`, \`.fail()\`, \`.good()\`, \`.bad()\`, or \`.eof()\`.

**IMPORTANT**: You may assume a function \`trim()\` exists with the same effect as \`trim_cstr()\` that you implemented in the previous part, except that it operates on C++ \`string\`s rather than C-style strings. The declaration of \`trim()\` is:

\`\`\`cpp
// REQUIRES: str points to a valid cstring
// MODIFIES: str
// EFFECTS:  Removes any space or tab characters that occur at the
//           end of the string str.
void trim(string &str);
\`\`\`

You should use this function (and not the c-string one) in your implementation of \`trim_lines()\`.
`,
  response: {
    kind: "code_editor",
    codemirror_mime_type: "text/x-c++src",
    code_language: "cpp",
    header:
`// REQUIRES: both streams are open and in a non-failure state
// EFFECTS:  Copies from the 'in' stream to the 'out' stream,
// working line-by-line. Any trailing whitespace is removed from
// the end of each line before it is written to 'out'.
void trim_lines(istream &in, ostream &out) {`,
    starter: "",
    footer: "}",
    sample_solution:
`string line;
while(getline(in, line)) {
  out << trim(line) << endl;
}`
  }
};



export const Question_Trim_Lines_Driver: QuestionSpecification = {
  question_id: "cstring_trim_lines_driver",
  points: 6,
  mk_description:
`
Implement a \`main\` function that reads an input file, runs it through \`trim_lines\`, and stores the output in a new file. The names of the files are given as command line arguments. For example, if the program is compiled to \`trim.exe\`, running

\`./trim.exe records.log records_trimmed.log\`

will copy the contents of \`records.log\` to \`records_trimmed.log\` with all trailing whitespace removed.

- Your implementation MUST call the \`trim_lines\` function.
- **Error check 1**: If the number of command line arguments is incorrect, \`main\` MUST return 1.
- **Error check 2**: If either the input or output files cannot be opened, \`main\` MUST return 1.
- You DO NOT need to check for any other errors beyond error 1 and 2 specified above.

For your convenience, we have repeated the function signature for \`trim_lines\` here:

\`\`\`cpp
void trim_lines(istream &in, ostream &out);
\`\`\`
`,
  response: {
    kind: "fill_in_the_blank",
    content:
`
\`\`\`cpp
int main(int argc, char *argv[]) {
  // Verify the number of command line arguments is correct
  [[BOX________________________________________________________
  

    
  
  ]]

  // Open the input file. (Name your input stream variable "fin")
  // Additionally, check whether the file was opened successfully.
  [[BOX________________________________________________________
  
  


  ]]

  // Open the output file. (Name your output stream variable "fout")
  // Additionally, check whether the file was opened successfully.
  [[BOX________________________________________________________
  


  
  ]]

  // Make an appropriate call to trim_lines.
  __________________________BLANK_______________________________

   fin.close();
   fout.close();
}
\`\`\`
`,
    sample_solution: [
`if (argc != 3) {
  return 1;
}`,
`ifstream fin(argv[1]);
if (!fin.is_open()) {
  return 1;
}`,
`ofstream fout(argv[2]);
if (!fout.is_open() {
  return 1;
}`,
`trim_lines(fin, fout);`
    ]
  }
};



export const Section_Strings_Streams_IO_Trim: SectionSpecification = {
  section_id: "cstring_trim",
  title: "Strings, Streams, and I/O",
  mk_description: "",
  mk_reference:
`#### \`trim_cstr\` Examples

\`\`\`cpp
char str1[] = "test string   ";
trim_cstr(str1);
// str1 now contains "test string"

char str2[] = "     another \\t     test\\t \\t   ";
trim_cstr(str2);
// str2 now contains "     another \\t     test"
\`\`\`
`,
  questions: [
    Question_CString_Trim,
    Question_Trim_Lines,
    Question_Trim_Lines_Driver
  ]
}