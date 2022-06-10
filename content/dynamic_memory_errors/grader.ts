import { FITBRegexGrader, FITBRegexGraderSpecification } from "examma-ray/dist/graders/FITBRegexGrader";

export const S5_Dynamic_Memory_Graders = {
  "sp20_5_v1" : <FITBRegexGraderSpecification>{
    grader_kind: "manual_regex_fill_in_the_blank",
    rubric: [
      {
        title: "Identify Error",
        blankIndex: 1,
        description: "",
        points: 2,
        patterns: [
          {
            pattern: /.*dead.*object.*/i,
            explanation: "Correct!",
            points: 2
          }
        ]
      },
      {
        title: "Explanation",
        blankIndex: 2,
        description: "",
        points: 2,
        patterns: [
          {
            pattern: /.*/,
            explanation: "Correct!",
            points: 2
          }
        ]
      }
    ]
  },

  "sp20_5_v2" : <FITBRegexGraderSpecification>{
    grader_kind: "manual_regex_fill_in_the_blank",
    rubric: [
      {
        title: "Identify Error",
        blankIndex: 1,
        description: "",
        points: 2,
        patterns: [
          { pattern: /.*incorrect.*delete.*/i, explanation: "Correct!", points: 2 },
          { pattern: /.*double.*delete.*/i, explanation: "Correct!", points: 2 },
          { pattern: /.*double.*free.*/i, explanation: "Correct!", points: 2 }
        ]
      },
      {
        title: "Explanation",
        blankIndex: 2,
        description: "",
        points: 2,
        patterns: [
          {
            pattern: /.*/,
            explanation: "Correct!",
            points: 2
          }
        ]
      }
    ]
  },

  "sp20_5_v3" : <FITBRegexGraderSpecification>{
    grader_kind: "manual_regex_fill_in_the_blank",
    rubric: [
      {
        title: "Identify Error",
        blankIndex: 1,
        description: "",
        points: 2,
        patterns: [
          {
            pattern: /.*incorrect.*delete.*/i,
            explanation: "Correct!",
            points: 2
          }
        ]
      },
      {
        title: "Explanation",
        blankIndex: 2,
        description: "",
        points: 2,
        patterns: [
          {
            pattern: /.*/,
            explanation: "Correct!",
            points: 2
          }
        ]
      }
    ]
  },

  "sp20_5_v4" : <FITBRegexGraderSpecification>{
    grader_kind: "manual_regex_fill_in_the_blank",
    rubric: [
      {
        title: "Identify Error",
        blankIndex: 1,
        description: "",
        points: 2,
        patterns: [
          {
            pattern: /.*memory.*leak.*/i,
            explanation: "Correct!",
            points: 2
          }
        ]
      },
      {
        title: "Explanation",
        blankIndex: 2,
        description: "",
        points: 2,
        patterns: [
          {
            pattern: /.*/,
            explanation: "Correct!",
            points: 2
          }
        ]
      }
    ]
  },

  "sp20_5_v5" : <FITBRegexGraderSpecification>{
    grader_kind: "manual_regex_fill_in_the_blank",
    rubric: [
      {
        title: "Identify Error",
        blankIndex: 1,
        description: "",
        points: 2,
        patterns: [
          {
            pattern: /.*dead.*object.*/i,
            explanation: "Correct!",
            points: 2
          }
        ]
      },
      {
        title: "Explanation",
        blankIndex: 2,
        description: "",
        points: 2,
        patterns: [
          {
            pattern: /.*/,
            explanation: "Correct!",
            points: 2
          }
        ]
      }
    ]
  },

  "sp20_5_v6" : <FITBRegexGraderSpecification>{
    grader_kind: "manual_regex_fill_in_the_blank",
    rubric: [
      {
        title: "Identify Error",
        blankIndex: 1,
        description: "",
        points: 2,
        patterns: [
          {
            pattern: /.*memory.*leak.*/i,
            explanation: "Correct!",
            points: 2
          }
        ]
      },
      {
        title: "Explanation",
        blankIndex: 2,
        description: "",
        points: 2,
        patterns: [
          {
            pattern: /.*/,
            explanation: "Correct!",
            points: 2
          }
        ]
      }
    ]
  }
}
