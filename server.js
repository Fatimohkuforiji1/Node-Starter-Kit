const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("This is my first serve response");
});

app.get("/test", (request, response) => {
  response.send("How may I help?");
});
app.get("/Hey", (request, response) => {
  response.json({ "car": "red" });
});
app.listen(3001, () => {
  console.log("Server is listening on port 3000. Ready to accept request!");
});
