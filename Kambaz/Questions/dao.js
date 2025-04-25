import model from "./model.js";
import {v4 as uuidv4} from "uuid";

export function findQuestionsForQuiz(quizId) {
    return model.find({quizId: quizId}).populate("answers");
}

export function createQuestion(question) {
    const newQuestion = {...question, _id: uuidv4()};
    return model.create(newQuestion);
}

export function deleteQuestion(questionId) {
    return model.deleteOne({_id: questionId});
}

export function updateQuestion(questionId, questionUpdates) {
    return model.updateOne({_id: questionId}, questionUpdates);
}

export const findQuestionById = async (questionId) => {
    return await model.findById(questionId)
        .populate('answers')
        .exec();
};