import React, { useEffect } from "react";
import { Typography, Divider, Box, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import userDetailtsFetch from "../../hook/userDetails.hook";

const formSchema = z.object({});

const Personal = () => {
  const [{ isLoading, apiData, serverError }] = userDetailtsFetch();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      looking_for: "",
      website: "",
      birthday: "",
      gender: "",
      education: "",
      experience: "",
      status: "",
      nationality: "",
    },
  });

  useEffect(() => {
    if (apiData) {
      form.reset({
        description: apiData.description,
        looking_for: apiData.looking_for,
        website: apiData.website,
        birthday: apiData.birthday,
        gender: apiData.gender,
        education: apiData.education,
        experience: apiData.experience,
        status: apiData.status,
        nationality: apiData.nationality,
      });
    }
  }, [apiData]);

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Box
      component="form"
      onSubmit={form.handleSubmit(onSubmit)}
      sx={{ width: "100%" }}
    >
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
            error={!!form.formState.errors.looking_for}
            helperText={form.formState.errors.looking_for?.message}
            sx={{ width: "100%" }}
          />
        )}
      />

      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Website:
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
            <Controller
              name="birthday"
              control={form.control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="dense"
                  label="Birthday"
                  size="small"
                  error={!!form.formState.errors.birthday}
                  helperText={form.formState.errors.birthday?.message}
                  sx={{ width: "100%" }}
                />
              )}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Gender:
            </Typography>
            <Controller
              name="gender"
              control={form.control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="dense"
                  label="Gender"
                  size="small"
                  error={!!form.formState.errors.gender}
                  helperText={form.formState.errors.gender?.message}
                  sx={{ width: "100%" }}
                />
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
                  error={!!form.formState.errors.education}
                  helperText={form.formState.errors.education?.message}
                  sx={{ width: "100%" }}
                />
              )}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Experience:
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
              Marital Status:
            </Typography>
            <Controller
              name="status"
              control={form.control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="dense"
                  label="Martial Status"
                  size="small"
                  error={!!form.formState.errors.status}
                  helperText={form.formState.errors.status?.message}
                  sx={{ width: "100%" }}
                />
              )}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Nationality:
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
    </Box>
  );
};

export default Personal;
