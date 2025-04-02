import * as dao from "./dao.js";

export default function EnrollmentsRoutes(app) {
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    dao.enrollUserInCourse(userId, courseId);
    res.sendStatus(200);
  });
  app.delete("/api/enrollments/unenroll/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    dao.unenrollUserFromCourse(userId, courseId);
    res.sendStatus(200);
  });
  app.get("/api/enrollments", (req, res) => {
      const enrollments = dao.getEnrollments();
      res.send(enrollments);
  });
}

