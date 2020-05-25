// links the route to the JSON data
const router = require("express").Router();
const notes = require("../db/notes.js");

// get notes
router.get("/notes", (req, res) => {
  notes
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// adds items to api
router.post("/notes", (req, res) => {
  notes
    .addNotes(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// delete items when the user presses the icon
router.delete("/notes/:id", function (req, res) {
  notes
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
