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
        default: "GRADED_QUIZ"
    },
    assignmentGroup: {
        type: String,
        enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
        default: "QUIZZES"
    },
    shuffleAnswers: {type: Boolean, default: true},
    hasTimeLimit: {type: Boolean, default: true},
    timeLimitLength: {type: Number, default: 20},
    hasMultipleAttempts: {type: Boolean, default: false},
    numAttempts: {type: Number, default: 1},
    showCorrectAnswers: {type: Boolean, default: false},
    whenToShowCorrectAnswers: String,
    accessCode: String,
    oneQuestionAtATime: {type: Boolean, default: true},
    webcamRequired: {type: Boolean, default: false},
    lockQuestionsAfterAnswering: {type: Boolean, default: false},
    questions: [{type: String, ref: "QuestionModel"}],
    attempts: [{type: String, ref: "QuizAttemptModel"}],
    course: { type: String, ref: "CourseModel" },
  },
  { collection: "quizzes", timestamps: true }
);
export default schema;