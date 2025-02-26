const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

//Import all routes
const userRoutes = require("./routes/user");
const appliedJobRoutes = require("./routes/appliedJob");
const jobSeekerRoutes = require("./routes/jobSeeker");
const postedJobRoutes = require("./routes/postedJob");
const jobRoutes = require("./routes/jobRoutes");
const recruiterRoutes = require("./routes/recruiter");
const jobBenefitRoutes = require("./routes/jobBenefit");
const companyBenefitRoutes = require("./routes/companyBenefit");
const requirementRotues = require("./routes/jobRequirement");
const jobTagRoutes = require("./routes/jobTag");
const tagAllocateRoutes = require("./routes/tagAllocate");

const app = express();

//Middleware
//app.use(cors());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//Usage of all routes
app.get("/", (req, res) => {
  res.send("<h1>Job Portal</h1>");
});

app.use(userRoutes);
app.use(appliedJobRoutes);
app.use(jobSeekerRoutes);
app.use(postedJobRoutes);
app.use(jobRoutes);
app.use(recruiterRoutes);
app.use(jobBenefitRoutes);
app.use(companyBenefitRoutes);
app.use(requirementRotues);
app.use(jobTagRoutes);
app.use(tagAllocateRoutes);

//Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
