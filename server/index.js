const express = require("express");
const bodyParser = require("body-parser");
//const path = require("path");

const jobSeekerRoutes = require("./routes/jobSeekerRoutes");
const recruiterRoutes = require("./routes/recruiterRoutes");

const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

//Route
app.get("/", (req, res) => {
  res.send("Job Portal with MVC");
});

app.use(jobSeekerRoutes);
app.use(recruiterRoutes);

//Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
