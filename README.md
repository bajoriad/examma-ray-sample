# examma-ray-sample

This repository contains sample exam content and specifications using [examma-ray](https://github.com/jamesjuett/examma-ray) based on publicly release practice exams for EECS 280 at the University of Michigan.

## Getting Started

Ensure you have `node` (and `npm`) installed:

```console
sudo apt update
sudo apt install nodejs
```

OR

```console
brew install nodejs
```

If you already have node, make sure you have Node 11 or greater:

```console
node --version
```

Clone this repository. From the base directory of the repo, install dependencies using `npm`:

```console
npm install
```

I **highly** recommend using VS Code given its typescript support.

## Keeping Dependencies Up-To-Date

To update all dependencies, including `examma-ray`, you can run:

```console
npm install
```

That will bring everything up-to-date with the versions listed in `package.json`.

If you want to specifically update your version of `examma-ray` (beyond what is currently in `package.json`), run the following from the **base directory of this repo**.

```console
npm install examma-ray@latest
```

If you encounter a merge conflict in `package.json` and/or `package-lock.json`, first resolve the conflict in `package.json` (if any) in favor of the newer version. Then, run `npm install`. You should find that the conflicts in `package-lock.json` are now also resolved.

## Creating New Questions/Sections

Add content in the `content/` folder. Subfolders organize questions by topic. Generally, a section and its questions are defined in a `spec.ts` file and a grader can be defined in a `grader.ts` file. Questions that are manually graded may also have `rubric.ts` and `grading_interface.ts` files.

These questions/sections can then be included in exam specifications.

When you create new content, make sure it is also included in one of the "topic exams" defined in `topics/gen-topic.ts`. This will allow for easy browsing through all the different questions we've created by topic.

For a high-level overview of specification, check out the examma-ray documentation on [exam specification](https://jamesjuett.github.io/examma-ray/modules/core_exam_specification.html), particularly the portions regarding sections and questions.

### Question Response Specifications

The `response` specification for a question controls what "kinds" of question it is (e.g. code-writing, multiple choice, etc.).

### Section Reference Material

Reference material is defined at the section level, and all questions within that section share the same reference material. (If you want a "question with reference material", you can just make a section that is basically a "wrapper" around only that question.)

### Randomization

Randomization can happen at several levels:
- An exam chooses a random subsequence of sections
- A section chooses a random subsequence of questions
- A question chooses a random skin

## Creating a New Exam

For example, to create an exam `w19midterm`, run

```console
npx examma-ray-init w19midterm
```

This will create a new directory `w19midterm` with a bunch of files. See the examma-ray documentation on [creating a new exam](https://jamesjuett.github.io/examma-ray/#creating-a-new-exam) for details about the files that are created.

Make sure to edit the `w19midterm/exam-spec.ts` file and change the `exam_id` property to be something reasonable like `"w19midterm"`. Change the `title` as well to whatever you'd like it to be.

## Configuring An Exam

Each exam has a top-level folder, e.g. `w19midterm`.

The exam configuration is defined in `exam-spec.ts` creates the exam, based on an `ExamSpecification`, which includes exam-level properties like ID and title as well as the list of sections contained on the exam. See the examma-ray documentation on [Exam Specification](https://jamesjuett.github.io/examma-ray/modules/core_exam_specification.html) for more details.

Two `ExamGenerator`s are also specified in `exam-spec.ts`. One generates individual (randomized) exams and the other generates an overall exam preview with all versions of the questions. These are imported by the exam generation script at `scripts/gen.ts`. You likely won't need to change the exam generator definitions. (More details in the examma-ray documentation for [Exam Generators](https://jamesjuett.github.io/examma-ray/modules/ExamGenerator.html).)

Some other notable files:
- `instructions.md` specifies markdown-formatted instructions for the top of the exam
- `questions.md` specifies a markdown-formatted message that appears at the bottom left, used for telling students how they can ask questions during the exam
- `roster.csv` contains uniqnames and names of students taking the exam
- `secret` contains the namespace that will be used for generating v5 UUIDs on this exam. Don't use any of the secrets from this sample repo for real exams.

## Generating a Preview Exam with All Questions

Make sure your terminal is in the top-level folder for your current exam, e.g. `w19midterm`.

To create a single preview exam that has all version of all questions:

```console
npx ts-node scripts/gen.ts --all-questions
```

See details in the documentation for [Generating a Preview Exam](https://jamesjuett.github.io/examma-ray/#generating-a-preview-exam-with-all-possible-questions).

## Generating Exams for Each Student

Make sure your terminal is in the top-level folder for your current exam, e.g. `w19midterm`.

To create individual (randomized) exams for each student:

```console
npx ts-node scripts/gen.ts
```

See details in the documentation for [Generating Individual Exams](https://jamesjuett.github.io/examma-ray/#generating-individual-exams).


## Running Overall Grading

Make sure your terminal is in the top-level folder for your current exam, e.g. `w19midterm`.

To grade the exam:

```console
npx ts-node scripts/grade.ts
```

This will run all autograders, generate analysis pages for individual questions, and generate an overview page for the exam. All these are found in `{{exam_folder}}/out/{{exam_id}}/graded/`.

If you'd like to additionally generate individual grading reports (the graded reports that are returned to students).

```console
npx ts-node scripts/grade.ts --reports
```

The graded reports for each individual exam live in `{{exam_folder}}/out/{{exam_id}}/graded/exams/`.