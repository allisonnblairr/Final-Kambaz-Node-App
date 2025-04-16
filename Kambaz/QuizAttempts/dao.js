import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function findQuizAttemptsForQuiz(quizId) {
    return model.find({ quizId: quizId });
}
export function createQuizAttempt(quizAttempt) {
    const newQuizAttempt = { ...quizAttempt, _id: uuidv4() };
    return model.create(newQuizAttempt);
}
export function deleteQuizAttempt(quizAttemptId) {
    return model.deleteOne({ _id: quizAttemptId });
}
export function updateQuizAttempt(quizAttemptId, quizAttemptUpdates) {
    return model.updateOne({ _id: quizAttemptId }, quizAttemptUpdates);
}