export default function QueryParameters(app) {
    app.get("/lab5/calculator", (req, res) => {
      const { a, b, operation } = req.query;
      let result = 0;
      switch (operation) {
        case "add":
          result = parseInt(a) + parseInt(b);
          break;
        case "subtract":
          result = parseInt(a) - parseInt(b);
          break;
        case "multiply":
          result = parseInt(a) * parseInt(b);
          break;
        case "divide":
          if (parseInt(b) === 0) {
              return res.send("Error: Cannot divide by 0.");
          }
          result = parseInt(a) / parseInt(b);
          break;
        default:
          result = "Invalid operation";
      }
      res.send(result.toString());
    });
  }
  