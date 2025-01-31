const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const userRoutes = require("./routes/user");
const appliedJobRoutes = require("./routes/appliedJob");
const jobSeekerRoutes = require("./routes/jobSeeker");
const postedJobRoutes = require("./routes/postedJob");
const jobRoutes = require("./routes/jobRoutes");
const recruiterRoutes = require("./routes/recruiter");

const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Route
app.get("/", (req, res) => {
  res.send("<h1>Job Portal</h1>");
});

app.use(userRoutes);
app.use(appliedJobRoutes);
app.use(jobSeekerRoutes);
app.use(postedJobRoutes);
app.use(jobRoutes);
app.use(recruiterRoutes);

//Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
