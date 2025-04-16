import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function findPossibleAnswersForQuestion(questionId) {
    return model.find({ question: questionId });
}
export function createPossibleAnswer(possibleAnswer) {
    const newPossibleAnswer = { ...possibleAnswer, _id: uuidv4() };
    return model.create(newPossibleAnswer);
}
export function deletePossibleAnswer(possibleAnswerId) {
    return model.deleteOne({ _id: possibleAnswerId });
}
export function updatePossibleAnswer(possibleAnswerId, possibleAnswerUpdates) {
    return model.updateOne({ _id: possibleAnswerId }, possibleAnswerUpdates);
}