import * as givenAnswerDao from "./dao.js";
export default function ModuleRoutes(app) {
  app.delete("/api/givenanswers/:givenAnswerId", async (req, res) => {
   const { givenAnswerId } = req.params;
   const status = await givenAnswerDao.deleteGivenAnswer(givenAnswerId);
   res.send(status);
  });
  app.put("/api/givenanswers/:givenAnswerId", async (req, res) => {
    const { givenAnswerId } = req.params;
    const givenAnswerUpdates = req.body;
    const status = await givenAnswerDao.updateGivenAnswer(givenAnswerId, givenAnswerUpdates);
    res.send(status);
  });
}