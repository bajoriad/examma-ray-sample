import { CUSTOMIZE, Exam, RANDOM_QUESTION } from "examma-ray";
import { ExamGenerator } from "examma-ray/dist/ExamGenerator";
import { readFileSync } from "fs";
import { Practice_Section_Big_Three_V1 } from "../practice_content/big_three/spec";
import { Practice_Section_Containers_Sorted_Min_Queue } from "../practice_content/containers/min_queue/spec";
import { Practice_Questions_Dynamic_Memory_Errors_FITB, Practice_Section_Dynamic_Memory_Errors_FITB } from "../practice_content/dynamic_memory_errors/spec";
import { Practice_Section_Iterators_And_Functors_Replacer } from "../practice_content/iterators_and_functors/replacer/spec";
import { Template_Section_Doubly_Linked_List } from "../practice_content/linked_lists/common";
import { Practice_Question_List_Matches } from "../practice_content/linked_lists/count_matches/spec";
import { Practice_Question_Linked_List_Move_Range_To_Back } from "../practice_content/linked_lists/move_range_to_back/spec";
import { Practice_Section_Recursion_List_Index_Of } from "../practice_content/list_recursion/list_index_of/spec";
import { Practice_Section_Tree_Recursion_Double_Tree } from "../practice_content/tree_recursion/double_tree/spec";
import { Practice_Section_Tree_Recursion_Traversal_Code_Reading } from "../practice_content/tree_recursion/traversal_code_reading/spec";


export const EXAM = Exam.create({
  exam_id: "eecs280_practice_final",
  title: "EECS 280 Practice Final Exam",
  mk_intructions: readFileSync("instructions.md", "utf8"),
  mk_questions_message: readFileSync("questions.md", "utf8"),
  sections: [
    Practice_Section_Containers_Sorted_Min_Queue,
    CUSTOMIZE(
      Practice_Section_Dynamic_Memory_Errors_FITB,
      {
        questions: [
          RANDOM_QUESTION(3,
            Practice_Questions_Dynamic_Memory_Errors_FITB.map(q => CUSTOMIZE(q, {points: 2.5}))
          )
        ]
      }
    ),
    Practice_Section_Big_Three_V1,
    CUSTOMIZE(
      Template_Section_Doubly_Linked_List,
      {
        section_id: "practice_linked_lists_matches_move_range",
        questions: [
          Practice_Question_List_Matches,
          Practice_Question_Linked_List_Move_Range_To_Back
        ]
      }
    ),
    Practice_Section_Iterators_And_Functors_Replacer,
    Practice_Section_Recursion_List_Index_Of,
    Practice_Section_Tree_Recursion_Traversal_Code_Reading,
    Practice_Section_Tree_Recursion_Double_Tree
  ],
});

export const EXAM_GENERATOR_INDIVIDUAL = new ExamGenerator(EXAM, {
  uuid_strategy: "uuidv5",
  uuidv5_namespace: readFileSync("secret", "utf-8"),
  frontend_js_path: "js/",
  consistent_randomization: true // WARNING: ONLY USE FOR PRACTICE EXAMS - this turns off individual randomization
});

export const EXAM_GENERATOR_PREVIEW = new ExamGenerator(EXAM, {
  uuid_strategy: "plain",
  allow_duplicates: true,
  choose_all: true,
  skins: "all"
});