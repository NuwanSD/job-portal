const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const jobSeekerRoutes = require("./routes/jobSeekerRoutes");
const recruiterRoutes = require("./routes/recruiterRoutes");
const jobRoutes = require("./routes/jobRoutes");
const postedJobRoutes = require("./routes/postedJobRoutes");
const appliedJobRoutes = require("./routes/appliedJobRoutes");

const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Route
app.get("/", (req, res) => {
  res.send("<h1>Job Portal</h1>");
});

app.use(jobSeekerRoutes);
app.use(recruiterRoutes);
app.use(jobRoutes);
app.use(postedJobRoutes);
app.use(appliedJobRoutes);

//Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
