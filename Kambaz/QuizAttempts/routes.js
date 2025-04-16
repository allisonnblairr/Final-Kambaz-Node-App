import * as quizAttemptsDao from "./dao.js";
export default function ModuleRoutes(app) {
  app.delete("/api/quizattempts/:quizAttemptId", async (req, res) => {
   const { quizAttemptId } = req.params;
   const status = await quizAttemptsDao.deleteQuizAttempt(quizAttemptId);
   res.send(status);
  });
  app.put("/api/quizattempts/:quizAttemptId", async (req, res) => {
    const { quizAttemptId } = req.params;
    const quizAttemptUpdates = req.body;
    const status = await quizAttemptsDao.updateQuizAttempt(quizAttemptId, quizAttemptUpdates);
    res.send(status);
  });
}