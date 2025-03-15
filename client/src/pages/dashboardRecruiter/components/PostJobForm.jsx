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
import useModalStore from "../../../store/modal";
import { savePostedJob } from "../../../helper/postedJob";
import { saveJobRequirement } from "../../../helper/jobRequirement";
import { saveJobBenefit } from "../../../helper/jobBenefit";
import { saveAllocatedTag } from "../../../helper/tagAllocate";
import usePostedJobStore from "../../../store/store";

//Temporary disable form validation part
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

export default function PostJobForm({ user_id, jobs, tags }) {
  const { isModalOpen, toggleModal } = useModalStore();
  const { posted_job, posted_job_id, storePostedJob, storePostedJobId } =
    usePostedJobStore();

  const form = useForm({
    //resolver: zodResolver(formSchema),
    defaultValues: posted_job
      ? {
          posted_job_id: posted_job.posted_job_id,
          user_id: posted_job.user_id,
          job_id: posted_job.job_id,
          salary: posted_job.salary,
          posted_date: posted_job.posted_date,
          expire_date: posted_job.expire_date,
          job_type: posted_job.job_type,
          job_location: posted_job.job_location,
          description: posted_job.description,
          job_level: posted_job.job_level,
          experience: posted_job.experience,
          status: posted_job.status,
          tags: posted_job.tags.map((tag) => tag.tag_id),
          job_requirement_1: posted_job.requirements[0].description,
          job_requirement_2: posted_job.requirements[1].description,
          job_requirement_3: posted_job.requirements[2].description,
          job_requirement_4: posted_job.requirements[3].description,
          job_benefits_1: posted_job.benefits[0].description,
          job_benefits_tag_1: posted_job.benefits[0].benefit_tag,
          job_benefits_2: posted_job.benefits[1].description,
          job_benefits_tag_2: posted_job.benefits[1].benefit_tag,
          job_benefits_3: posted_job.benefits[2].description,
          job_benefits_tag_3: posted_job.benefits[2].benefit_tag,
          job_benefits_4: posted_job.benefits[3].description,
          job_benefits_tag_4: posted_job.benefits[3].benefit_tag,
        }
      : undefined,
  });

  async function onSubmit(values) {
    try {
      if (!posted_job) {
        console.log("Values to be posted new job: ", values);

        const posted_job_id = uuidv4();

        const posted_date = new Date().toISOString().split("T")[0];

        //adding common attributes
        const formattedValues = {
          ...values,
          posted_job_id,
          user_id,
          posted_date,
        };

        //console.log(formattedValues);

        //Seperate Core details
        const {
          job_benefits_1,
          job_benefits_2,
          job_benefits_3,
          job_benefits_4,
          job_benefits_tag_1,
          job_benefits_tag_2,
          job_benefits_tag_3,
          job_benefits_tag_4,
          job_requirement_1,
          job_requirement_2,
          job_requirement_3,
          job_requirement_4,
          tags,
          ...rest
        } = formattedValues;

        const coreResponse = await savePostedJob(rest);
        console.log("core", coreResponse);

        //Posted Job requirements
        const formattedRequirement = [];

        formattedRequirement.push({
          posted_job_id: posted_job_id,
          description: job_requirement_1,
        });
        formattedRequirement.push({
          posted_job_id: posted_job_id,
          description: job_requirement_2,
        });
        formattedRequirement.push({
          posted_job_id: posted_job_id,
          description: job_requirement_3,
        });
        formattedRequirement.push({
          posted_job_id: posted_job_id,
          description: job_requirement_4,
        });

        const reqResponse = await saveJobRequirement(formattedRequirement);
        console.log(reqResponse);

        //Seperate Job Requirements
        const formattedBenefits = [];

        formattedBenefits.push({
          posted_job_id: posted_job_id,
          description: job_benefits_1,
          benefit_tag: job_benefits_tag_1,
        });
        formattedBenefits.push({
          posted_job_id: posted_job_id,
          description: job_benefits_2,
          benefit_tag: job_benefits_tag_2,
        });
        formattedBenefits.push({
          posted_job_id: posted_job_id,
          description: job_benefits_3,
          benefit_tag: job_benefits_tag_3,
        });
        formattedBenefits.push({
          posted_job_id: posted_job_id,
          description: job_benefits_4,
          benefit_tag: job_benefits_tag_4,
        });

        const beneResponse = await saveJobBenefit(formattedBenefits);
        console.log(beneResponse);

        //Posted Job tags
        const formattedTags = tags.map((id) => {
          return {
            tag_id: id,
            posted_job_id,
          };
        });

        const tagResponse = await saveAllocatedTag(formattedTags);
        console.log(tagResponse);
      } else {
        console.log("Values to be update: ", values);

        //Seperate Core details
        const {
          job_benefits_1,
          job_benefits_2,
          job_benefits_3,
          job_benefits_4,
          job_benefits_tag_1,
          job_benefits_tag_2,
          job_benefits_tag_3,
          job_benefits_tag_4,
          job_requirement_1,
          job_requirement_2,
          job_requirement_3,
          job_requirement_4,
          tags,
          ...rest
        } = values;

        //const coreResponse = await savePostedJob(rest);
        console.log("core", rest);

        //Posted Job requirements
        const formattedRequirement = [];

        formattedRequirement.push({
          posted_job_id: posted_job_id,
          description: job_requirement_1,
        });
        formattedRequirement.push({
          posted_job_id: posted_job_id,
          description: job_requirement_2,
        });
        formattedRequirement.push({
          posted_job_id: posted_job_id,
          description: job_requirement_3,
        });
        formattedRequirement.push({
          posted_job_id: posted_job_id,
          description: job_requirement_4,
        });

        //const reqResponse = await saveJobRequirement(formattedRequirement);
        console.log("requirements: ", formattedRequirement);

        //Seperate Job Requirements
        const formattedBenefits = [];

        formattedBenefits.push({
          posted_job_id: posted_job_id,
          description: job_benefits_1,
          benefit_tag: job_benefits_tag_1,
        });
        formattedBenefits.push({
          posted_job_id: posted_job_id,
          description: job_benefits_2,
          benefit_tag: job_benefits_tag_2,
        });
        formattedBenefits.push({
          posted_job_id: posted_job_id,
          description: job_benefits_3,
          benefit_tag: job_benefits_tag_3,
        });
        formattedBenefits.push({
          posted_job_id: posted_job_id,
          description: job_benefits_4,
          benefit_tag: job_benefits_tag_4,
        });

        //const beneResponse = await saveJobBenefit(formattedBenefits);
        console.log("Benefits: ", formattedBenefits);

        //Posted Job tags
        const formattedTags = tags.map((id) => {
          return {
            tag_id: id,
            posted_job_id,
          };
        });

        //const tagResponse = await saveAllocatedTag(formattedTags);
        console.log("tagResponse: ", formattedTags);
      }

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
        storePostedJob(null);
        toggleModal(!isModalOpen);
      }}
    >
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DialogTitle>
          {posted_job ? "Update A Posted Job" : "Post A New Job"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText gutterBottom>
            Click submit button when you are done
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

          {/*Job Requirements*/}
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
                    label="Add description"
                    variant="outlined"
                    margin="dense"
                    error={!!form.formState.errors.job_requirement_1}
                    helperText={
                      form.formState.errors.job_requirement_1?.message
                    }
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
                    label="Add description"
                    variant="outlined"
                    margin="dense"
                    error={!!form.formState.errors.job_requirement_2}
                    helperText={
                      form.formState.errors.job_requirement_2?.message
                    }
                  />
                )}
              />
              <Controller
                name="job_requirement_3"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={{ width: "100%" }}
                    label="Add description"
                    variant="outlined"
                    margin="dense"
                    error={!!form.formState.errors.job_requirement_3}
                    helperText={
                      form.formState.errors.job_requirement_3?.message
                    }
                  />
                )}
              />
              <Controller
                name="job_requirement_4"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={{ width: "100%" }}
                    label="Add description"
                    variant="outlined"
                    margin="dense"
                    error={!!form.formState.errors.job_requirement_4}
                    helperText={
                      form.formState.errors.job_requirement_4?.message
                    }
                  />
                )}
              />
            </Box>
          </Box>

          <Divider />

          {/*Job Benefits*/}
          <Box sx={{ py: 2 }}>
            <Typography variant="h6" gutterBottom>
              Job Benefits
            </Typography>
            <Box>
              <Box display={"flex"} gap={1}>
                <Controller
                  name="job_benefits_1"
                  control={form.control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      sx={{ width: "100%" }}
                      label="Add description"
                      variant="outlined"
                      margin="dense"
                      error={!!form.formState.errors.job_benefits_1}
                      helperText={form.formState.errors.job_benefits_1?.message}
                    />
                  )}
                />
                <Controller
                  name="job_benefits_tag_1"
                  control={form.control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      sx={{ width: "30%" }}
                      label="Define tag"
                      variant="outlined"
                      margin="dense"
                      error={!!form.formState.errors.job_benefits_tag_1}
                      helperText={
                        form.formState.errors.job_benefits_tag_1?.message
                      }
                    />
                  )}
                />
              </Box>
              <Box display={"flex"} gap={1}>
                <Controller
                  name="job_benefits_2"
                  control={form.control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      sx={{ width: "100%" }}
                      label="Add description"
                      variant="outlined"
                      margin="dense"
                      error={!!form.formState.errors.job_benefits_2}
                      helperText={form.formState.errors.job_benefits_2?.message}
                    />
                  )}
                />
                <Controller
                  name="job_benefits_tag_2"
                  control={form.control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      sx={{ width: "30%" }}
                      label="Define tag"
                      variant="outlined"
                      margin="dense"
                      error={!!form.formState.errors.job_benefits_tag_2}
                      helperText={
                        form.formState.errors.job_benefits_tag_2?.message
                      }
                    />
                  )}
                />
              </Box>
              <Box display={"flex"} gap={1}>
                <Controller
                  name="job_benefits_3"
                  control={form.control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      sx={{ width: "100%" }}
                      label="Add description"
                      variant="outlined"
                      margin="dense"
                      error={!!form.formState.errors.job_benefits_3}
                      helperText={form.formState.errors.job_benefits_3?.message}
                    />
                  )}
                />
                <Controller
                  name="job_benefits_tag_3"
                  control={form.control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      sx={{ width: "30%" }}
                      label="Define tag"
                      variant="outlined"
                      margin="dense"
                      error={!!form.formState.errors.job_benefits_tag_3}
                      helperText={
                        form.formState.errors.job_benefits_tag_3?.message
                      }
                    />
                  )}
                />
              </Box>
              <Box display={"flex"} gap={1}>
                <Controller
                  name="job_benefits_4"
                  control={form.control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      sx={{ width: "100%" }}
                      label="Add description"
                      variant="outlined"
                      margin="dense"
                      error={!!form.formState.errors.job_benefits_4}
                      helperText={form.formState.errors.job_benefits_4?.message}
                    />
                  )}
                />
                <Controller
                  name="job_benefits_tag_4"
                  control={form.control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      sx={{ width: "30%" }}
                      label="Define tag"
                      variant="outlined"
                      margin="dense"
                      error={!!form.formState.errors.job_benefits_tag_4}
                      helperText={
                        form.formState.errors.job_benefits_tag_4?.message
                      }
                    />
                  )}
                />
              </Box>
            </Box>
          </Box>

          <Divider />

          {/*Job Tag Allocate*/}
          <Box sx={{ py: 2 }}>
            <Typography variant="h6" gutterBottom>
              Job Tags
            </Typography>

            <Controller
              name="tags"
              control={form.control}
              defaultValue={[]}
              render={({ field }) => (
                <Autocomplete
                  multiple
                  id="tags-filled"
                  options={tags}
                  getOptionLabel={(option) => option.tag} // Display tag names in the dropdown
                  isOptionEqualToValue={(option, value) =>
                    option.tag_id === value.tag_id
                  } // Match tags properly
                  value={tags.filter((tag) => field.value.includes(tag.tag_id))} // )Convert tag_id to full objects for display
                  onChange={(event, newValue) => {
                    const selectedTagIds = newValue.map((tag) => tag.tag_id); // Map selected tags to their tag_id
                    field.onChange(selectedTagIds); // Pass tag_id array to the form
                  }}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => {
                      const { key, ...tagProps } = getTagProps({ index });
                      return (
                        <Chip
                          variant="outlined"
                          label={option.tag} // Display the tag name in the Chip
                          key={key}
                          {...tagProps}
                        />
                      );
                    })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Tags"
                      placeholder="Select tags"
                    />
                  )}
                />
              )}
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Box sx={{ display: "flex", gap: 1, justifyContent: "right" }}>
            <Button
              variant="outlined"
              onClick={() => {
                storePostedJob(null);
                toggleModal(!isModalOpen);
              }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              {posted_job ? "Update" : "Submit"}
            </Button>
          </Box>
        </DialogActions>
      </form>
    </Dialog>
  );
}
