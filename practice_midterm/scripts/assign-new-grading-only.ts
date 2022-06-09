import { ExamUtils } from "examma-ray/dist/ExamUtils";
import { CodeWritingGrader } from "examma-ray/dist/graders/CodeWritingGrader";
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
      "n": "num-chunks"
    },
    default: {
      // "no_reports": false
    }
  });
  
  let num_chunks: number = argv["num-chunks"];
  
  if (!Number.isInteger(num_chunks)) {
    console.log("Invalid arguments");
    return;
  }
  
  EXAM_GRADER.loadAllSubmissions();

  EXAM_GRADER.allQuestions.forEach(q => {
    let question_id = q.question_id;
    let assignedQuestions = EXAM_GRADER.getAllAssignedQuestionsById(question_id);
    
    if (!assignedQuestions) {
      console.log(`No submissions found for question id: ${question_id}`);
      return;
    }

    if (!(EXAM_GRADER.getGrader(q) instanceof CodeWritingGrader)) {
      return;
    }

    let prevAssns = ExamUtils.readGradingAssignments(exam_id, question_id);

    let existingSubs = prevAssns.flatMap(assn => assn.groups.flatMap(g => g.submissions));
    let existingSubsMap : {[index: string]: GradingSubmission} = {};
    existingSubs.forEach(exSub => existingSubsMap[exSub.student.uniqname] = exSub);
    
    let newSubs = assignedQuestions.filter(aq => !existingSubsMap[aq.student.uniqname]);

    if (newSubs.length === 0) {
      return;
    }
    let newAssn = ExamUtils.createGradingAssignments(newSubs, 1);
    
    let newAssns = ExamUtils.rechunkGradingAssignments([...newAssn], num_chunks);

    ExamUtils.writeGradingAssignments(newAssns);

  });
  
}

main();
