import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  useTheme,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Autocomplete,
  Chip,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { z } from "zod";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { top100Films } from "./Data";

const postedJobSchema = z.object({
  posted_job_id: z.string().max(),
  user_id: z.string().max(),
  job_id: z.number().int(),
  salary: z.number().int(),
  posted_date: z.instanceof(Date),
  expire_date: z.instanceof(Date),
  job_type: z.string(),
  job_location: z.string(),
  description: z.string(),
  job_level: z.string(),
  experience: z.string(),
  status: z.boolean(),
});

const jobTagSchema = z.object({
  tag_id: z.number().int(),
  tag: z.string().max(100),
});

const tagAllocateSchema = z.object({
  tag_id: z.number().int(),
  posted_job_id: z.string().max(100),
});

const jobRequirementSchema = z.object({
  requirement_id: z.number().int(),
  posted_job_id: z.string().max(100),
  description: z.string().max(255).optional(),
});

const jobBenefitSchema = z.object({
  benefit_id: z.number().int(),
  posted_job_id: z.string().max(100),
  description: z.string().max(255).optional(),
  benefit_tag: z.string().max(100).optional(),
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const jobTitles = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Cloud Solutions Architect",
  "Data Scientist",
  "Machine Learning Engineer",
  "Cybersecurity Analyst",
  "IT Project Manager",
];

const PostJob = () => {
  //take the user_id when goes the the dynamic tab
  const params = useParams();

  const form = useForm({
    resolver: zodResolver(postedJobSchema),
    defaultValues: {
      posted_job_id: "",
      user_id: "",
      job_id: "",
      salary: "",
      posted_date: null,
      expire_date: null,
      job_location: "",
      description: "",
      job_level: "",
      experience: "",
      status: "",
    },
  });

  const onSubmit = (values) => {
    const posted_job_id = uuidv4(); //generate unique id for each posted job
    const user_id = params.id; //current user id from dynamic router

    const formattedValues = { ...values, posted_job_id, user_id };

    console.log(formattedValues);

    form.reset();
  };

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h6" gutterBottom>
        Post a Job
      </Typography>

      <Box component="form" onSubmit={form.handleSubmit(onSubmit)}>
        {/*Job title reference to job_id*/}
        <Box>
          <FormControl sx={{ width: 300 }}>
            <InputLabel id="job-title-label">Job Title</InputLabel>
            <Controller
              name="job_title"
              control={form.control}
              render={({ field }) => (
                <Select
                  labelId="job-title-label"
                  id="job-title"
                  {...field}
                  input={<OutlinedInput label="Job Title" />}
                  MenuProps={MenuProps}
                >
                  {jobTitles.map((job) => (
                    <MenuItem key={job} value={job}>
                      {job}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Box>

        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            gap: 2,
            my: 1,
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="expire_date"
              control={form.control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label="Expire On"
                  sx={{ width: 300 }}
                  slotProps={{
                    textField: {
                      error: !!form.formState.errors.expire_date,
                      helperText: form.formState.errors.expire_date?.message,
                    },
                  }}
                  value={field.value ? dayjs(field.value) : null} // Ensure value is a Dayjs object
                  onChange={(date) => field.onChange(date?.toDate())} // Convert Dayjs to native Date
                />
              )}
            />
          </LocalizationProvider>

          <FormControl sx={{ width: 300 }}>
            <InputLabel id="job-level-label">Job Level</InputLabel>
            <Controller
              name="job_level"
              control={form.control}
              render={({ field }) => (
                <Select
                  labelId="job-level-label"
                  id="job_level"
                  {...field}
                  input={<OutlinedInput label="Job Level" />}
                  MenuProps={MenuProps}
                >
                  <MenuItem value="Entry Level">Entry Level</MenuItem>
                  <MenuItem value="Basic Level">Basic Level</MenuItem>
                  <MenuItem value="Advanced Level">Advanced Level</MenuItem>
                </Select>
              )}
            />
          </FormControl>

          <Controller
            name="salary"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ width: 300 }}
                label="Salary"
                type="number"
                variant="outlined"
                error={!!form.formState.errors.salary}
                helperText={form.formState.errors.salary?.message}
              />
            )}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            my: 1,
          }}
        >
          <Controller
            name="job_location"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ width: 300 }}
                label="Job Location"
                variant="outlined"
                error={!!form.formState.errors.job_location}
                helperText={form.formState.errors.job_location?.message}
              />
            )}
          />

          <FormControl sx={{ width: 300 }}>
            <InputLabel id="jexperience-label">Experience</InputLabel>
            <Controller
              name="experience"
              control={form.control}
              render={({ field }) => (
                <Select
                  labelId="experience-label"
                  id="experience"
                  {...field}
                  input={<OutlinedInput label="Experience" />}
                  MenuProps={MenuProps}
                >
                  <MenuItem value="year_1">1 YEAR</MenuItem>
                  <MenuItem value="year_2">2 YEAR</MenuItem>
                  <MenuItem value="year_3">3 YEAR</MenuItem>
                </Select>
              )}
            />
          </FormControl>

          <FormControl sx={{ width: 300 }}>
            <InputLabel id="job_type-label">Job Type</InputLabel>
            <Controller
              name="job_type"
              control={form.control}
              render={({ field }) => (
                <Select
                  labelId="job_type-label"
                  id="job_type"
                  {...field}
                  input={<OutlinedInput label="Job Type" />}
                  MenuProps={MenuProps}
                >
                  <MenuItem value="Internship">Internship</MenuItem>
                  <MenuItem value="Full Time">Full Time</MenuItem>
                  <MenuItem value="Part Time">Part Time</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </Box>

        <Box>
          <Controller
            name="job_location"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                multiline
                rows={10}
                sx={{ width: "100%" }}
                label="Job Location"
                variant="outlined"
                error={!!form.formState.errors.job_location}
                helperText={form.formState.errors.job_location?.message}
              />
            )}
          />
        </Box>

        <Box sx={{ my: 1 }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Job Type</FormLabel>
            <Controller
              name="jobType"
              control={form.control}
              defaultValue=""
              render={({ field }) => (
                <RadioGroup {...field}>
                  <Box>
                    <FormControlLabel
                      value="Active"
                      control={<Radio />}
                      label="Active"
                    />
                    <FormControlLabel
                      value="Expire"
                      control={<Radio />}
                      label="Expire"
                    />
                    <FormControlLabel
                      value="Disable"
                      control={<Radio />}
                      label="Disable"
                    />
                  </Box>
                </RadioGroup>
              )}
            />
          </FormControl>
        </Box>

        <Box sx={{ py: 2 }}>
          <Typography variant="h6" gutterBottom>
            Job Requirements
          </Typography>
          <Box>
            <Controller
              name="job_requirement_1"
              control={form.control}
              render={({ field }) => (
                <TextField
                  {...field}
                  sx={{ width: "100%" }}
                  label="Add requirement breifly"
                  variant="outlined"
                  margin="dense"
                  error={!!form.formState.errors.job_requirement_1}
                  helperText={form.formState.errors.job_requirement_1?.message}
                />
              )}
            />
            <Controller
              name="job_requirement_2"
              control={form.control}
              render={({ field }) => (
                <TextField
                  {...field}
                  sx={{ width: "100%" }}
                  label="Add requirement breifly"
                  variant="outlined"
                  margin="dense"
                  error={!!form.formState.errors.job_requirement_2}
                  helperText={form.formState.errors.job_location_2?.message}
                />
              )}
            />
          </Box>
        </Box>

        <Box sx={{ py: 2 }}>
          <Typography variant="h6" gutterBottom>
            Job Benefits
          </Typography>
          <Box>
            <Controller
              name="job_benefits_1"
              control={form.control}
              render={({ field }) => (
                <TextField
                  {...field}
                  sx={{ width: "100%" }}
                  label="Add benefits breifly"
                  variant="outlined"
                  margin="dense"
                  error={!!form.formState.errors.job_benefits_1}
                  helperText={form.formState.errors.job_benefits_1?.message}
                />
              )}
            />
            <Controller
              name="job_beneits_2"
              control={form.control}
              render={({ field }) => (
                <TextField
                  {...field}
                  sx={{ width: "100%" }}
                  label="Add benefits breifly"
                  variant="outlined"
                  margin="dense"
                  error={!!form.formState.errors.job_beneits_2}
                  helperText={form.formState.errors.job_beneits_2?.message}
                />
              )}
            />
          </Box>
        </Box>

        <Box sx={{ py: 2 }}>
          <Typography variant="h6" gutterBottom>
            Job Tags
          </Typography>

          <Autocomplete
            multiple
            id="tags-filled"
            options={top100Films.map((option) => option.title)}
            defaultValue={[top100Films[13].title]}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => {
                const { key, ...tagProps } = getTagProps({ index });
                return (
                  <Chip
                    variant="outlined"
                    label={option}
                    key={key}
                    {...tagProps}
                  />
                );
              })
            }
            renderInput={(params) => (
              <TextField {...params} label="tags" placeholder="Favorites" />
            )}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 1, textTransform: "none" }}
        >
          Post Job
        </Button>
      </Box>
    </Box>
  );
};

export default PostJob;
