// Start with dependencies.
const express = require("express");

// Variable for Express
const app = express();
// Define a port to listen for incoming requests.
const PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start server so that it can begin listening to client requests + console log.
app.listen(PORT, function () {
  console.log("Server is listening on: http://localhost" + PORT);
});
