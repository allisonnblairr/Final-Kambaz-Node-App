import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    questionType: String,
    quizId: { type: String, ref: "QuizModel" },
    title: String,
    content: String,
    points: Number,
    answers: { type: [], ref: "PossibleAnswerModel" },
  },
  { collection: "questions" }
);
export default schema;