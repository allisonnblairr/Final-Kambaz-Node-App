import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    questionType: String,
    quizId: { type: String, ref: "QuizModel" },
    title: String,
    content: String,
    points: Number,
    answers: [{ type: String, ref: "PossibleAnswerModel" }]
  },
  { collection: "questions", timestamps: true }
);
export default schema;