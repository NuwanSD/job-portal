const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const jobSeekerRoutes = require("./routes/jobSeekerRoutes");
const recruiterRoutes = require("./routes/recruiterRoutes");
const jobRoutes = require("./routes/jobRoutes");
const postedJobRoutes = require("./routes/postedJobRoutes");

const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(jobSeekerRoutes);
app.use(recruiterRoutes);
app.use(jobRoutes);
app.use(postedJobRoutes);

//Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
