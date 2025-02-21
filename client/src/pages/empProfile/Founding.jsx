import React from "react";
import { Typography, Divider, Box, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({});

const Founding = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description:
        "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta acconsectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel",
      benefits:
        "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta acconsectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel",
      vision:
        "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta acconsectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel",
      website: "www.dddddc.com",
      founded: "1924.05.06",
      organization_type: "Private",
      industry_type: "Information Technology",
      team_size: 100,
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box
      component="form"
      onSubmit={form.handleSubmit(onSubmit)}
      sx={{ width: "100%", py: 10 }}
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
        Benefits
      </Typography>

      <Controller
        name="benefits"
        control={form.control}
        render={({ field }) => (
          <TextField
            {...field}
            margin="dense"
            label="Benefits"
            size="small"
            multiline
            error={!!form.formState.errors.benefits}
            helperText={form.formState.errors.benefits?.message}
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
              Team_size:
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
                  helperText={form.formState.errors.organization_type?.message}
                  sx={{ width: "100%" }}
                />
              )}
            />
          </Box>

          <Box sx={{ width: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Industry Type:
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

export default Founding;
