// Start with dependencies
const express = require("express");

// Variable for Express
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Server command to begin listening
app.listen(PORT, function () {
  console.log("Server is listening on: http://localhost" + PORT);
});
