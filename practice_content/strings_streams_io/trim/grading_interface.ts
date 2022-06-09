import { configureGradingApp } from "examma-ray/dist/grading_interface/code-grader";
import { Program, SourceFile } from "lobster-vis/dist/js/core/Program";
import { containsConstruct, findConstructs, findFirstConstruct } from "lobster-vis/dist/js/analysis/analysis";
import { EndOfMainStateCheckpoint, StaticAnalysisCheckpoint } from "lobster-vis/dist/js/analysis/checkpoints";
import { Predicates } from "lobster-vis/dist/js/core/predicates";
import { Simulation } from "lobster-vis/dist/js/core/Simulation";
import { Exercise } from "lobster-vis/dist/js/core/Project";
import { areSemanticallyEquivalent } from "lobster-vis/dist/js/core/constructs";
import { Question_CString_Trim } from "./spec";
import { Rubric_CString_Trim } from "./rubric";

$(() => {
  configureGradingApp({
      question: Question_CString_Trim,
      rubric: Rubric_CString_Trim,
      groupingFunctionName: "trim_cstr",
      testHarness : `
#include <iostream>
#include <string>
using namespace std;

void trim_cstr(char * str) {
{{submission}}
}

void check_cstrs(const char *a, const char *b) {
  string sa(a);
  string sb(b);
  assert(sa == sb);
}

int main() {
  char str1[13] = "test string ";
  trim_cstr(str1);
  check_cstrs(str1, "test string");
  
  char str2[40] = " another \t test\t \t ";
  trim_cstr(str2);
  check_cstrs(str2, " another \t test");
}
`,
    checkpoints: [
      new EndOfMainStateCheckpoint("Passes Test Cases", (sim: Simulation) => {
        return !sim.hasAnyEventOccurred
      }, "", 5000)
    ],
    autograder: (ex: Exercise) => {
      return {
        wasBlankSubmission: false,
        itemResults: {
          "all_correct": {status: ex.checkpointCompletions[0] ? "on" : "unknown"}
        },
        verified: false
      };
    }
  })
});