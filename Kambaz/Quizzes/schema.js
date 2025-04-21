import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    instructions: String,
    published: Boolean,
    availableFrom: Date,
    due: Date,
    availableUntil: Date,
    points: Number,
    quizType: {
        type: String,
        enum: ["GRADED_QUIZ", "PRACTICE_QUIZ", "GRADED_SURVEY", "UNGRADED_SURVEY"],
    },
    assignmentGroup: {
        type: String,
        enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
    },
    shuffleAnswers: Boolean,
    hasTimeLimit: Boolean,
    timeLimitLength: String,
    hasMultipleAttempts: Boolean,
    numAttempts: Number,
    showCorrectAnswers: Boolean,
    whenToShowCorrectAnswers: String,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockQuestionsAfterAnswering: Boolean,
    questions: [{type: String, ref: "QuestionModel"}],
    attempts: [{type: String, ref: "QuizAttemptModel"}],
    course: { type: String, ref: "CourseModel" },
  },
  { collection: "quizzes", timestamps: true }
);
export default schema;