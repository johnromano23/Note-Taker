// create path
const path = require("path");

module.exports = function (app) {
  app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, +"/../public/index.html"));
  });

  app.get("/notes", (_req, res) => {
    res.sendFile(path.join(__dirname + "/../public/notes.html"));
  });
};
