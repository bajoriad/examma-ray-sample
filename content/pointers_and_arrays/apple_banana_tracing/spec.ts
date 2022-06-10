import { QuestionSpecification, SectionSpecification } from "examma-ray";
import { FITBSpecification } from "examma-ray/dist/response/fitb";

const COMMON_RESPONSE : FITBSpecification = {
  kind: "fill_in_the_blank",
  content:
`
_______________BLANK_______________

[[_______________________________________BOX_______________________________________


]]
`
};



const QUESTIONS : QuestionSpecification<"fill_in_the_blank">[] = [

{
  code: `int x = 2; int y = 3;
apple(x, &y);
cout << x << " " << y << endl;`,
 sample_solution: [
   "2 3",
   "Both a and b are passed by value (b is passed by pointer, which is a kind of pass by value). So neither of the modifications to a and b have any effect. The apple function returns the address of a local variable, which could lead to problems, but the program never uses the return, so there's no undefined behavior."
 ]
},

{
  code: `int x = 2; int y = 3;
banana(x, &y);
cout << x << " " << y << endl;`,
 sample_solution: [
   "3 4",
   "The banana function modifies its reference parameter c and the object pointed to by d in the same way - it adds 1 to each. So both x and y increase by 1."
 ]
},

{
  code: `int x = 2; int y = 3;
int *z = apple(x, &y);
cout << *z << endl;`,
 sample_solution: [
   "undefined",
   "The apple function returns the address of a local variable, and this is assigned into z and dereferenced, which causes undefined behavior (since the local variable's lifetime has ended after its containing function returned). "
 ]
},

{
  code: `int x = 2; int y = 3;
int *z = banana(x, &y);
cout << *z << endl;`,
 sample_solution: [
   "3",
   "The banana function returns the address of c, but c is a reference parameter which really refers back to x from the main function. So, banana returns the address of x, which is stored into z. At the same time, the banana function increased the value of x by 1 through the reference parameter c. So, printing *z yields 3."
 ]
},

{
  code: `int arr[2] = {2, 3};
if ( arr == banana(*arr, arr) ) {
  cout << "equal ";
}
cout << arr[0] << " " << arr[1] << endl;`,
 sample_solution: [
   "equal 4 3",
   "First, arr[0] is increased in value by 1 two times. This is because the way the parameters are passed end up with c referring to *arr, which is equivalent to arr[0], and with d pointing to the same element (since arr yields a pointer to the first array element). Then, the address of c is retruned, which is the address of arr[0]."
 ]
},

{
  code: `int arr[2] = {2, 3};
if ( arr == banana(arr, *arr) ) {
  cout << "equal ";
}
cout << arr[0] << " " << arr[1] << endl;`,
 sample_solution: [
   "compile error",
   "The banana function expects arguments of type int and int * (in that order), but the arguments given to the function are int [2] (array of 2 ints) and int. The type mismatch is a compile error."
 ]
}

].map((spec, i) => ({
  question_id: `practice_apple_banana_code_tracing_${i}`,
  points: 2,
  mk_description:`\`\`\`cpp\n${spec.code}\n\`\`\``,
  response: Object.assign({}, COMMON_RESPONSE, {
    sample_solution: spec.sample_solution
  })
}));


export const Section_Apple_Banana_Code_Tracing: SectionSpecification = {
  section_id: "practice_apple_banana_code_tracing",
  title: "Code Tracing",
  mk_description:
`
Please see the **reference material** for definitions of two functions, \`apple\` and \`banana\`.

Then, consider each code snippet below, determine its behavior, and explain your answer. Follow the specific directions in the **reference material**.
`,
  mk_reference:
`
\`\`\`cpp
int * apple(int a, int *b) {
  a += 1;
  b += 1;
  return &a;
}

int * banana(int &c, int *d) {
  c += 1;
  *d += 1;
  return &c;
}
\`\`\`

Determine the behavior of each code snippet below and write an answer in the small box: If the code does not compile, write "**compile error**". If it compiles but results in undefined behavior at runtime, write "**undefined**". If it compiles and runs without error, **write the output** or "**no output**" if it prints nothing.

Additionally, write an explanation **in your own words** of why this happens in the large box.

**Tip**: You my find it helpful to draw out a picture of memory to assist with tracing the code!

(**Please note** that due to randomization, it is possible you may happen to get several questions with the same answer. Do your best to consider each program below individually.)
`,
  questions: QUESTIONS
}