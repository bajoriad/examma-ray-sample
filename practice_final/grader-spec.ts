import { ExamCurve } from "examma-ray/dist/core/ExamCurve";
import { GraderSpecificationMap, ExceptionMap, ExamGrader } from "examma-ray/dist/ExamGrader";
import { readFileSync } from "fs";
import { EXAM } from "./exam-spec";

export const GRADERS : GraderSpecificationMap[] = [
  // Specify graders here by question ID if the question
  // doesn't have a default grader or if you want to
  // override it
];

export const EXCEPTIONS : ExceptionMap = {
  // Specify exceptions here, which will be applied after
  // regular grading to replace the points earned on a question
};

export const EXAM_GRADER = new ExamGrader(EXAM, {
  uuid_strategy: "uuidv5",
  uuidv5_namespace: readFileSync("secret", "utf-8"),
  frontend_js_path: "js/",
}, GRADERS, EXCEPTIONS);


export const CURVE : ExamCurve | undefined = undefined; //new IndividualizedNormalCurve(EXAM_GRADER.stats, 84, 9);