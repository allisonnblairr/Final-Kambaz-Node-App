import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    questionType: {
      type: String,
      enum: ["MULTIPLE_CHOICE", "TRUE_FALSE", "FILL_BLANK"],
      default: "MULTIPLE_CHOICE",
      required: true,
    },
    quizId: { type: String, ref: "QuizModel" },
    title: String,
    content: String,
    points: Number,
    answers: [{ type: String, ref: "PossibleAnswerModel" }]
  },
  { collection: "questions", timestamps: true }
);
export default schema;