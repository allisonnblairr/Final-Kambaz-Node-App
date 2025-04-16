import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function findGivenAnswersForQuestion(questionId) {
    return model.find({ question: questionId });
}
export function createGivenAnswer(givenAnswer) {
    const newGivenAnswer = { ...givenAnswer, _id: uuidv4() };
    return model.create(newGivenAnswer);
}
export function deleteGivenAnswer(givenAnswerId) {
    return model.deleteOne({ _id: givenAnswerId });
}
export function updateGivenAnswer(givenAnswerId, givenAnswerUpdates) {
    return model.updateOne({ _id: givenAnswerId }, givenAnswerUpdates);
}