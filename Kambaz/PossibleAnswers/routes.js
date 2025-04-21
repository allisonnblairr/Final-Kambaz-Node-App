import * as possibleAnswerDao from "./dao.js";
export default function PossibleAnswerRoutes(app) {
  app.delete("/api/possibleanswers/:possibleAnswerId", async (req, res) => {
   const { possibleAnswerId } = req.params;
   const status = await possibleAnswerDao.deletePossibleAnswer(possibleAnswerId);
   res.send(status);
  });
  app.put("/api/possibleanswers/:possibleAnswerId", async (req, res) => {
    const { possibleAnswerId } = req.params;
    const possibleAnswerUpdates = req.body;
    const status = await possibleAnswerDao.updatePossibleAnswer(possibleAnswerId, possibleAnswerUpdates);
    res.send(status);
  });
}