import { ExamUtils } from "examma-ray/dist/ExamUtils";
import { GradingSubmission } from "examma-ray/dist/grading_interface/common";
import minimist from "minimist";
import { EXAM } from "../exam-spec";
import { EXAM_GRADER } from "../grader-spec";

// // Load and verify answers
// grader.loadAllSubmissions();

// let assns = grader.prepareManualGrading();

function main() {
  let exam_id = EXAM.exam_id;

  let argv = minimist(process.argv.slice(2), {
    alias: {
      "q": "question-id",
      "n": "num-chunks"
    },
    default: {
      // "no_reports": false
    }
  });
  
  let question_id: string = argv["question-id"];
  let num_chunks: number = argv["num-chunks"];
  
  if (!question_id || !Number.isInteger(num_chunks)) {
    console.log("Invalid arguments");
    return;
  }
  
  EXAM_GRADER.loadAllSubmissions();
  let assignedQuestions = EXAM_GRADER.getAllAssignedQuestionsById(question_id);
  
  if (!assignedQuestions) {
    console.log(`No submissions found for question id: ${question_id}`);
    return;
  }

  let prevAssns = ExamUtils.readGradingAssignments(exam_id, question_id);

  let existingSubs = prevAssns.flatMap(assn => assn.groups.flatMap(g => g.submissions));
  let existingSubsMap : {[index: string]: GradingSubmission} = {};
  existingSubs.forEach(exSub => existingSubsMap[exSub.student.uniqname] = exSub);
  
  let newSubs = assignedQuestions.filter(aq => !existingSubsMap[aq.student.uniqname]);
  let newAssn = newSubs.length > 0 ? ExamUtils.createGradingAssignments(newSubs, 1) : [];
  
  let newAssns = ExamUtils.rechunkGradingAssignments([...prevAssns, ...newAssn], num_chunks);

  ExamUtils.clearGradingAssignments(exam_id, question_id);
  ExamUtils.writeGradingAssignments(newAssns);
  
}

main();
