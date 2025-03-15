import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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
  Divider,
} from "@mui/material";
import { useForm, Controller, Form } from "react-hook-form";
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
import { v4 as uuidv4 } from "uuid";
import { top100Films } from "./Data";
import useModalStore from "../../../store/modal";

const formSchema = z.object({
  job_id: z.number(),
  salary: z.string(),
  job_type: z.string(),
  job_location: z.string(),
  description: z.string(),
  job_level: z.string(),
  experience: z.string(),
  status: z.string(),
  expire_date: z.string(),
  // requirements: z.array(z.object({ posted_job_id: z.string().optional() })),
  // benefits: z.array(z.object({ posted_job_id: z.string().optional() })),
  // tags: z.array(z.object({ posted_job_id: z.string().optional() })),
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

export default function PostJobForm({ user_id, jobs }) {
  const { isModalOpen, toggleModal } = useModalStore();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      posted_job_id: "",
      user_id: "",
      job_id: "",
      salary: "",
      posted_date: "",
      expire_date: "",
      job_type: "",
      job_location: "",
      description: "",
      job_level: "",
      experience: "",
      status: "",
    },
  });

  async function onSubmit(values) {
    try {
      const posted_job_id = uuidv4();

      const posted_date = new Date().toISOString().split("T")[0];

      const formattedValues = {
        ...values,

        posted_job_id,
        user_id,
        posted_date,
      };

      console.log(formattedValues);

      form.reset();
      toggleModal(!isModalOpen);
    } catch (error) {
      console.log(error?.message);
    }
  }

  return (
    <Dialog
      open={isModalOpen}
      onClose={() => {
        toggleModal(!isModalOpen);
      }}
    >
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DialogTitle>Post A New Job</DialogTitle>
        <DialogContent>
          <DialogContentText gutterBottom>
            Fill in the below detiails to post a new job
          </DialogContentText>

          <Box sx={{ py: 2 }}>
            <Typography variant="h6" gutterBottom>
              Core Details
            </Typography>

            <Box>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="job-id-label">Job Title</InputLabel>
                <Controller
                  name="job_id"
                  control={form.control}
                  render={({ field }) => (
                    <Select
                      labelId="job-id-label"
                      id="job-id"
                      {...field}
                      input={<OutlinedInput label="Job Title" />}
                      MenuProps={MenuProps}
                    >
                      {jobs.map((job) => (
                        <MenuItem key={job.job_id} value={job.job_id}>
                          {job.title}
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
                          helperText:
                            form.formState.errors.expire_date?.message,
                        },
                      }}
                      value={field.value ? dayjs(field.value) : null} // Ensure value is a Dayjs object
                      onChange={(date) =>
                        field.onChange(
                          date?.toDate().toISOString().split("T")[0]
                        )
                      } // Convert Dayjs to native Date
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
            </Box>

            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                gap: 2,
                my: 1,
              }}
            >
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
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                my: 1,
              }}
            >
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
                name="description"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    multiline
                    rows={10}
                    sx={{ width: "100%" }}
                    label="Job Description"
                    variant="outlined"
                    error={!!form.formState.errors.description}
                    helperText={form.formState.errors.description?.message}
                  />
                )}
              />
            </Box>

            <Box sx={{ my: 1 }}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Job Status</FormLabel>
                <Controller
                  name="status"
                  control={form.control}
                  defaultValue=""
                  render={({ field }) => (
                    <RadioGroup {...field}>
                      <Box>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Active"
                        />
                        <FormControlLabel
                          value="0"
                          control={<Radio />}
                          label="Disable"
                        />
                      </Box>
                    </RadioGroup>
                  )}
                />
              </FormControl>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1, justifyContent: "right" }}>
            <Button
              variant="outlined"
              onClick={() => toggleModal(!isModalOpen)}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </DialogContent>
      </form>
    </Dialog>
  );
}
