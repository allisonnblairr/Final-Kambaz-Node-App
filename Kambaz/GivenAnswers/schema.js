import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    answerContent: String,
    questionId: { type: String, ref: "QuestionModel" },
  },
  { collection: "givenanswers", timestamps: true }
);
export default schema;