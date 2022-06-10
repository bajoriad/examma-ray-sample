import { SectionSpecification } from "examma-ray";
import { FreebieGrader } from "examma-ray/dist/graders/FreebieGrader";




export const Section_Thanks: SectionSpecification = {
  section_id: "practice_thanks",
  "title": "Good luck!",
  "mk_description": "",
  "questions": [
    {
      question_id: "practice_thanks",
      points: 1,
      mk_description:
`
Good luck on the real exam! There was 1 point left on this practice exam, so here's a free point.
`,
      response: {
        kind: "multiple_choice",
        choices: [
          "Yes, I would like the free point.",
          "No, I would not like the free point."
        ],
        multiple: false,
        sample_solution: [0],
        default_grader: {
          grader_kind: "freebie",
          points: 1,
          allow_blanks: true
        }
      }
    },
  ]
};


