import { CodeWritingRubricItem } from "examma-ray/dist/graders/CodeWritingGrader";
import { DEFAULT_ALL_CORRECT_DESC, DEFAULT_MINOR_ERROR } from "../../../content/common";

export const Rubric_Shoe_Init: CodeWritingRubricItem[] = [
{
    id: "all_correct",
    title: "All Correct",
    points: 9,
    description: DEFAULT_ALL_CORRECT_DESC
  },
  {
    id: "check_spaces_tabs",
    title: "Identifies Characters to Trim",
    points: 3,
    description: "blah blah blah checks against spaces and tabs properly etc."
  },
  {
    id: "minor_error",
    title: "Minor Other Error",
    points: -1,
    description: DEFAULT_MINOR_ERROR
  }
]