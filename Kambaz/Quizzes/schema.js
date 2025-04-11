import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    instructions: String,
    isPublished: Boolean,
    availableFrom: Date,
    due: Date,
    until: Date,
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
    shouldShuffle: {type: Boolean, default: true} ,
    timeLimit: {type: Number, default: 20},
    multipleAttempts: {type: Boolean, default: false},
    numberOfAttempts: {type: Number, default: 1},
    showCorrect: Boolean,
    whenShowCorrect: String,
    accessCode: String,
    oneQuestionAtTime: {type: Boolean, default: true},
    webCamRequired: {type: Boolean, default: false},
    lockQuestions: {type: Boolean, default: false},
    questions: [{type: String, ref: "QuestionModel"}],
    attempts: [{type: String, ref: "QuizAttemptModel"}],
    course: { type: String, ref: "CourseModel" },
  },
  { collection: "quizzes", timestamps: true }
);
export default schema;