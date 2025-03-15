import React, { useEffect } from "react";
import { Typography, Divider, Box, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Benefit from "./Benefit";
import { getRecruiterById } from "../../helper/recruiter";

const formSchema = z.object({
  description: z.string().nonempty("Description is required"),
  vision: z.string().nonempty("Vision is required"),
  website: z.string().nonempty("Website is required"),
  founded: z.string().nonempty("Founded date is required"),
  organization_type: z.string().nonempty("Organization type is required"),
  industry_type: z.string().nonempty("Industry type is required"),
  team_size: z
    .number()
    .nonnegative("Team size must be a positive number")
    .int("Team size must be an integer"),
});

const Founding = ({ user_id }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      vision: "",
      website: "",
      founded: "",
      organization_type: "",
      industry_type: "",
      team_size: "",
    },
  });

  const { reset } = form;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRecruiterById({ user_id });

        const data = response.data[0];

        reset({
          description: data.description,
          vision: data.vision,
          website: data.website,
          founded: data.founded,
          organization_type: data.organization_type,
          industry_type: data.industry_type,
          team_size: data.team_size,
          facebook_url: data.facebook_url,
          instagram_url: data.instagram_url,
          linkedin_url: data.linkedin_url,
          x_url: data.x_url,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [user_id, reset]);

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Box sx={{ width: "100%", py: 10 }}>
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
              error={!!form.formState.errors.description}
              helperText={form.formState.errors.description?.message}
              sx={{ width: "100%" }}
            />
          )}
        />

        <Typography sx={{ fontWeight: "bold", mt: 4 }} gutterBottom>
          Vision
        </Typography>

        <Controller
          name="vision"
          control={form.control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="dense"
              label="Vision"
              size="small"
              multiline
              error={!!form.formState.errors.vision}
              helperText={form.formState.errors.vision?.message}
              sx={{ width: "100%" }}
            />
          )}
        />

        <Box sx={{ my: 4 }}>
          <Box sx={{ width: "100%" }}>
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
                  error={!!form.formState.errors.website}
                  helperText={form.formState.errors.website?.message}
                  sx={{ width: "100%" }}
                />
              )}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Founded
              </Typography>
              <Controller
                name="founded"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="dense"
                    label="Founded"
                    size="small"
                    error={!!form.formState.errors.founded}
                    helperText={form.formState.errors.founded?.message}
                    sx={{ width: "100%" }}
                  />
                )}
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Team Size
              </Typography>
              <Controller
                name="team_size"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="dense"
                    label="Team size"
                    size="small"
                    error={!!form.formState.errors.team_size}
                    helperText={form.formState.errors.team_size?.message}
                    sx={{ width: "100%" }}
                  />
                )}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Organization Type
              </Typography>
              <Controller
                name="organization_type"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="dense"
                    label="Organization type"
                    size="small"
                    error={!!form.formState.errors.organization_type}
                    helperText={
                      form.formState.errors.organization_type?.message
                    }
                    sx={{ width: "100%" }}
                  />
                )}
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Industry Type
              </Typography>
              <Controller
                name="industry_type"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="dense"
                    label="Industry type"
                    size="small"
                    error={!!form.formState.errors.industry_type}
                    helperText={form.formState.errors.industry_type?.message}
                    sx={{ width: "100%" }}
                  />
                )}
              />
            </Box>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ width: "100%" }}>
                <Typography variant="h6" gutterBottom>
                  Facebook
                </Typography>
                <Controller
                  name="facebook_url"
                  control={form.control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="dense"
                      label="Facebook"
                      size="small"
                      error={!!form.formState.errors.facebook_url}
                      helperText={form.formState.errors.facebook_url?.message}
                      sx={{ width: "100%" }}
                    />
                  )}
                />
              </Box>

              <Box sx={{ width: "100%" }}>
                <Typography variant="h6" gutterBottom>
                  Instagram
                </Typography>
                <Controller
                  name="instagram_url"
                  control={form.control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="dense"
                      label="Instagram"
                      size="small"
                      error={!!form.formState.errors.instagram_url}
                      helperText={form.formState.errors.instagram_url?.message}
                      sx={{ width: "100%" }}
                    />
                  )}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ width: "100%" }}>
                <Typography variant="h6" gutterBottom>
                  Linkedin
                </Typography>
                <Controller
                  name="linkedin_url"
                  control={form.control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="dense"
                      label="Linkedin"
                      size="small"
                      error={!!form.formState.errors.linkedin_url}
                      helperText={form.formState.errors.linkedin_url?.message}
                      sx={{ width: "100%" }}
                    />
                  )}
                />
              </Box>

              <Box sx={{ width: "100%" }}>
                <Typography variant="h6" gutterBottom>
                  X
                </Typography>
                <Controller
                  name="x_url"
                  control={form.control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="dense"
                      label="X"
                      size="small"
                      error={!!form.formState.errors.x_url}
                      helperText={form.formState.errors.x_url?.message}
                      sx={{ width: "100%" }}
                    />
                  )}
                />
              </Box>
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

      <Divider />

      <Box>
        <Benefit />
      </Box>
    </Box>
  );
};

export default Founding;
