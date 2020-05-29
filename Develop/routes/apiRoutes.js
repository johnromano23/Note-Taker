// Require db.json
const notes = require("../db/db.json");

// Display, post and delete notes
module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    res.json(notes);
  });
  app.post("/api/notes", (req, res) => {
    notes.push(req.body);
    res.json(notes);
  });
  app.delete("/api/notes/:id", (req, res) => {
    let noteId = req.params.id;
    let removeIndex;

    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === noteId) {
        removeIndex = i;
      }
    }

    notes.splice(removeIndex, 1);

    res.json(notes);
  });
};
