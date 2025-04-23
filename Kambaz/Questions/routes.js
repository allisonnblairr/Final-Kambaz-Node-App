import * as questionsDao from "./dao.js";
import * as possibleAnswersDao from "../PossibleAnswers/dao.js"
import * as givenAnswersDao from "../GivenAnswers/dao.js"

export default function QuestionRoutes(app) {
  app.delete("/api/questions/:questionId", async (req, res) => {
    const {questionId} = req.params;
    const status = await questionsDao.deleteQuestion(questionId);
    res.send(status);
  });
  app.put("/api/questions/:questionId", async (req, res) => {
    const {questionId} = req.params;
    const questionUpdates = req.body;
    const status = await questionsDao.updateQuestion(questionId, questionUpdates);
    res.send(status);
  });
  app.get("/api/questions/:questionId/possibleanswers", async (req, res) => {
    const {questionId} = req.params;
    const possibleAnswers = await possibleAnswersDao.findPossibleAnswersForQuestion(questionId);
    res.json(possibleAnswers);
  });
  app.get("/api/questions/:questionId/possibleanswers/:paId", async (req, res) => {
    const {questionId, paId} = req.params;
    const possibleAnswer = await possibleAnswersDao.findPossibleAnswerForQuestionById(questionId, paId);
    res.json(possibleAnswer);
  });
  app.post("/api/questions/:questionId/possibleanswers", async (req, res) => {
    const {questionId} = req.params;
    const possibleAnswer = {
      ...req.body,
      questionId: questionId,
    };
    const newPossibleAnswer = await possibleAnswersDao.createPossibleAnswer(possibleAnswer);
    res.send(newPossibleAnswer);
  });
  app.get("/api/questions/:questionId/givenanswers", async (req, res) => {
    const {questionId} = req.params;
    const giveAnswers = await givenAnswersDao.findGivenAnswersForQuestion(questionId);
    res.json(giveAnswers);
  });
  app.post("/api/questions/:questionId/givenanswers", async (req, res) => {
    const {questionId} = req.params;
    const givenAnswer = {
      ...req.body,
      questionId: questionId,
    };
    const newGivenAnswer = await givenAnswersDao.createGivenAnswer(givenAnswer);
    res.send(newGivenAnswer);
  });
}