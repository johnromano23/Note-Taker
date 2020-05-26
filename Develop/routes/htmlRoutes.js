const path = require("path");

// URL request to homepage
module.exports = function (app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });

  // URL request to notes page
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/notes.html"));
  });
};
