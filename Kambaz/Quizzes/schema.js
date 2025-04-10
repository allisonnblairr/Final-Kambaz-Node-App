import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    instructions: String,
    isPublished: Boolean,
    availableFrom: String,
    due: String,
    until: String,
    pts: Number,
    quizType: String,
    assignmentGroup: String,
    shouldShuffle: Boolean,
    timeLimit: String,
    numberOfAttempts: Number,
    showCorrect: Boolean,
    whenShowCorrect: String,
    accessCode: String,
    oneQuestionAtTime: Boolean,
    webCamRequired: Boolean,
    lockQuestions: Boolean,
    questions: {type: [], ref: "QuestionModel"},
    attempts: {type: [], ref: "QuizAttemptModel"},
    course: { type: String, ref: "CourseModel" },
  },
  { collection: "quizzes" }
);
export default schema;