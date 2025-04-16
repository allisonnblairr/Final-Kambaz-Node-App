import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    userId: { type: String, ref: "UserModel" },
    quizId: { type: String, ref: "QuizModel" },
    score: Number,
    dateTaken: Date,
    answers: [{ type: String, ref: "GivenAnswerModel" }],
  },
  { collection: "quizattempts", timestamps: true }
);
export default schema;