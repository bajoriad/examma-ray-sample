import { configureGradingApp } from "examma-ray/dist/grading_interface/code-grader";
import { Program, SourceFile } from "lobster-vis/dist/js/core/Program";
import { containsConstruct, findConstructs, findFirstConstruct } from "lobster-vis/dist/js/analysis/analysis";
import { EndOfMainStateCheckpoint, StaticAnalysisCheckpoint } from "lobster-vis/dist/js/analysis/checkpoints";
import { Predicates } from "lobster-vis/dist/js/core/predicates";
import { Simulation } from "lobster-vis/dist/js/core/Simulation";
import { Exercise } from "lobster-vis/dist/js/core/Project";
import { areSemanticallyEquivalent } from "lobster-vis/dist/js/core/constructs";
import { Question_Shoe_Init } from "./spec";
import { Rubric_Shoe_Init } from "./rubric";

$(() => {
  configureGradingApp({
      question: Question_Shoe_Init,
      rubric: Rubric_Shoe_Init,
      groupingFunctionName: "Shoe_init",
      testHarness : `
#include <iostream>
#include <string>
using namespace std;

struct Shoe {
  int size;
  bool is_tied;
};

{{submission}}

int main() {
  assert(false);
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