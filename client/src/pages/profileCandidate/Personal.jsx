import React, { useEffect } from "react";
import {
  Typography,
  Divider,
  Box,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import userDetailtsFetch from "../../hook/userDetails.hook";
import { saveJobSeeker, updateJobSeeker } from "../../helper/jobSeeker";
import { useAuthStore } from "../../store/authStore";
import User from "../../assets/user.png";

const formSchema = z.object({
  description: z.string().min(1),
  looking_for: z.string().min(1),
  website: z.string().min(1),
  birthday: z.string().min(1),
  gender: z.string().min(1),
  education: z.string().min(1),
  experience: z.string().min(1),
  status: z.string().min(1),
  nationality: z.string().min(1),
});

const Personal = () => {
  const [{ isLoading, apiData, serverError }] = userDetailtsFetch();

  const { auth } = useAuthStore();

  const user_id = auth.userId;

  const form = useForm({
    resolver: zodResolver(formSchema),
    // defaultValues: apiData
    //   ? {
    //       user_id: apiData.user_id,
    //       description: apiData.description,
    //       looking_for: apiData.looking_for,
    //       website: apiData.website,
    //       birthday: apiData.birthday,
    //       gender: apiData.gender,
    //       education: apiData.education,
    //       experience: apiData.experience,
    //       status: apiData.status,
    //       nationality: apiData.nationality,
    //       photo_url: apiData.photo_url,
    //     }
    //   : undefined,
  });

  useEffect(() => {
    if (apiData) {
      form.reset({
        user_id: apiData.user_id || "",
        description: apiData.description || "",
        looking_for: apiData.looking_for || "",
        website: apiData.website || "",
        birthday: apiData.birthday || "",
        gender: apiData.gender || "",
        education: apiData.education || "",
        experience: apiData.experience || "",
        status: apiData.status || "",
        nationality: apiData.nationality || "",
        photo_url: apiData.photo_url || User,
      });
    }
  }, [apiData, form]);

  const onSubmit = async (values) => {
    try {
      if (apiData) {
        const formatted = {
          ...values,
          user_id,
          photo_url: User,
        };

        const data = formatted;

        const update = await updateJobSeeker({ user_id, data });
        console.log(update);
      } else {
        const formatted = {
          ...values,
          user_id,
          photo_url: User,
        };
        const create = await saveJobSeeker(formatted);
        console.log(create);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Typography sx={{ fontWeight: "bold" }} gutterBottom>
          DESCRIPTION
        </Typography>
        <Controller
          name="description"
          control={form.control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="dense"
              label="Description"
              size="small"
              multiline
              //InputLabelProps={{ shrink: true }}
              value={field.value || ""}
              error={!!form.formState.errors.description}
              helperText={form.formState.errors.description?.message}
              sx={{ width: "100%" }}
            />
          )}
        />
        <Typography sx={{ fontWeight: "bold", mt: 4 }} gutterBottom>
          LOOKING FOR
        </Typography>

        <Controller
          name="looking_for"
          control={form.control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="dense"
              label="Looking For"
              size="small"
              multiline
              rows={5}
              value={field.value || ""}
              error={!!form.formState.errors.looking_for}
              helperText={form.formState.errors.looking_for?.message}
              sx={{ width: "100%" }}
            />
          )}
        />

        <Box sx={{ my: 4 }}>
          <Typography variant="h6" gutterBottom>
            Website
          </Typography>
          <Controller
            name="website"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Website"
                size="small"
                value={field.value || ""}
                error={!!form.formState.errors.website}
                helperText={form.formState.errors.website?.message}
                sx={{ width: "100%" }}
              />
            )}
          />

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Birthday
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  name="birthday"
                  control={form.control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      size="small"
                      label="Birthday"
                      sx={{ width: "100%" }}
                      slotProps={{
                        textField: {
                          error: !!form.formState.errors.birthday,
                          helperText: form.formState.errors.birthday?.message,
                        },
                      }}
                      value={field.value ? dayjs(field.value) : null} // Ensure value is a Dayjs object
                      onChange={(date) =>
                        field.onChange(
                          date?.toDate().toISOString().split("T")[0]
                        )
                      }
                    />
                  )}
                />
              </LocalizationProvider>
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Gender
              </Typography>
              <Controller
                name="gender"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    margin="dense"
                    label="Gender"
                    size="small"
                    value={field.value || ""}
                    error={!!form.formState.errors.gender}
                    helperText={form.formState.errors.gender?.message}
                    sx={{ width: "100%" }}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </TextField>
                )}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Education
              </Typography>
              <Controller
                name="education"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="dense"
                    label="Education"
                    size="small"
                    value={field.value || ""}
                    error={!!form.formState.errors.education}
                    helperText={form.formState.errors.education?.message}
                    sx={{ width: "100%" }}
                  />
                )}
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Experience
              </Typography>
              <Controller
                name="experience"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="dense"
                    label="Experience"
                    size="small"
                    value={field.value || ""}
                    error={!!form.formState.errors.experience}
                    helperText={form.formState.errors.experience?.message}
                    sx={{ width: "100%" }}
                  />
                )}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Marital Status
              </Typography>
              <Controller
                name="status"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    margin="dense"
                    label="Select Gender"
                    size="small"
                    value={field.value || ""}
                    error={!!form.formState.errors.status}
                    helperText={form.formState.errors.status?.message}
                    sx={{ width: "100%" }}
                  >
                    <MenuItem value="single">Single</MenuItem>
                    <MenuItem value="married">Married</MenuItem>
                  </TextField>
                )}
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Nationality
              </Typography>
              <Controller
                name="nationality"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="dense"
                    label="Nationality"
                    size="small"
                    value={field.value || ""}
                    error={!!form.formState.errors.nationality}
                    helperText={form.formState.errors.nationality?.message}
                    sx={{ width: "100%" }}
                  />
                )}
              />
            </Box>
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "none", width: "100%", mt: 1 }}
          >
            Save Chanages
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Personal;
