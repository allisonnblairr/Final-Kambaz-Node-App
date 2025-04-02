import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: { type: String, ref: "CourseModel" },
    from: String,
    due: String,
    pts: Number,
    description: String,
    until: String,
  },
  { collection: "assignments" }
);
export default schema;