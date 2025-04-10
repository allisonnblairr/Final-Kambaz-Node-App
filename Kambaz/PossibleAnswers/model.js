import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("PossibleAnswerModel", schema);
export default model;