// create path dependency
const path = require("path");

// Route that sends user to the index page.
module.exports = function (app) {
  app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, +"/../public/index.html"));
  });

  // Route that sends user to the notes page.
  app.get("/notes", (_req, res) => {
    res.sendFile(path.join(__dirname + "/../public/notes.html"));
  });
};
