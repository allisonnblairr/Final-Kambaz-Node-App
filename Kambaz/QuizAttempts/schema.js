import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    userId: { type: String, ref: "UserModel" },
    quizId: { type: String, ref: "QuizModel" },
    score: Number,
    dateTaken: String,
    answers: { type: [], ref: "GivenAnswerModel" },
  },
  { collection: "quizattempts" }
);
export default schema;