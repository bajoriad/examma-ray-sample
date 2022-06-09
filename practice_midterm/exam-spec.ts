import { Exam } from "examma-ray";
import { ExamGenerator } from "examma-ray/dist/ExamGenerator";
import { readFileSync } from "fs";
import { Section_ADTs_Pickle_Sandwich } from "../practice_content/cpp_adts/PickleSandwich/spec";
import { Section_Testing } from "../practice_content/testing/largest_odd/spec";
import { Section_Apple_Banana_Code_Tracing } from "../practice_content/pointers_and_arrays/apple_banana_tracing/spec";
import { Section_Arrays_Ascending_Sort } from "../practice_content/pointers_and_arrays/ascending_sort/spec";
import { Section_Strings_Streams_IO_Trim } from "../practice_content/strings_streams_io/trim/spec";
import { Section_Polymorphism_Instruments, Section_Polymorphism_Instruments_Drag_Drop } from "../practice_content/polymorphism/instruments/spec";
import { Section_C_ADTs_Shoe } from "../practice_content/c_adts/shoe/spec";
import { Section_Thanks } from "../practice_content/misc/thanks";

export const EXAM = Exam.create({
  exam_id: "eecs280_practice_midterm",
  title: "EECS 280 Practice Midterm Exam",
  mk_intructions: readFileSync("instructions.md", "utf8"),
  mk_questions_message: readFileSync("questions.md", "utf8"),
  sections: [
    Section_Testing,
    Section_Apple_Banana_Code_Tracing,
    Section_Arrays_Ascending_Sort,
    Section_Strings_Streams_IO_Trim,
    Section_C_ADTs_Shoe,
    Section_ADTs_Pickle_Sandwich,
    Section_Polymorphism_Instruments,
    Section_Polymorphism_Instruments_Drag_Drop,
    Section_Thanks
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