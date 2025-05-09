import * as quizzesDao from "./dao.js";
import * as questionsDao from "../Questions/dao.js"
import * as quizAttemptsDao from "../QuizAttempts/dao.js"

export default function QuizRoutes(app) {
  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const {quizId} = req.params;
    const status = await quizzesDao.deleteQuiz(quizId);
    res.send(status);
  });
  app.put("/api/quizzes/:quizId", async (req, res) => {
    const {quizId} = req.params;
    const quizUpdates = req.body;
    const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });
  app.get("/api/quizzes/:quizId/questions", async (req, res) => {
    const {quizId} = req.params;
    const questions = await questionsDao.findQuestionsForQuiz(quizId);
    res.json(questions);
  });
  app.post("/api/quizzes/:quizId/questions", async (req, res) => {
    const {quizId} = req.params;
    const question = {
      ...req.body,
      quizId: quizId,
    };
    const newQuestion = await questionsDao.createQuestion(question);
    res.send(newQuestion);
  });
  app.post("/api/quizzes/:quizId/quizattempts", async (req, res) => {
    const {quizId} = req.params;
    const quizAttempt = {
      ...req.body,
      quizId: quizId,
    };
    const newQuizAttempt = await quizAttemptsDao.createQuizAttempt(quizAttempt);
    res.send(newQuizAttempt);
  });
}
