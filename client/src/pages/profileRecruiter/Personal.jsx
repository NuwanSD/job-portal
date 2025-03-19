import React, { useEffect } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cover from "../../assets/banner-img.jpg";
import Logo from "../../assets/facebook.svg";
import { updateUser } from "../../helper/helper";
import useFetch from "../../hook/fetch.hook";

const formSchema = z.object({});

const Personal = () => {
  const [{ isLoading, apiData, serverError }] = useFetch();

  const form = useForm({
    //resolver: zodResolver(formSchema),
    defaultValues: {
      user_id: "",
      username: "",
      name: "",
      email: "",
      phone: "",
      city: "",
      country: "",
    },
  });

  useEffect(() => {
    if (apiData) {
      form.reset({
        name: apiData.name,
        email: apiData.email,
        phone: apiData.phone,
        city: apiData.city,
        country: apiData.country,
      });
    }
  }, [apiData]);

  async function onSubmit(values) {
    console.log(values);
    try {
      const data = values;

      const update = await updateUser(data);

      console.log(update);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box sx={{ width: "100%", py: 10 }}>
      <Box
        sx={{
          display: { xs: "row", md: "flex" },
          gap: 2,
          mb: 5,
          alignItems: "center",
        }}
      >
        <Box sx={{ border: 1, display: "inline-block", mb: { xs: 1, md: 0 } }}>
          <img src={Logo} alt="" height="150px" />
        </Box>
        <img src={Cover} alt="" height="150px" width="100%" />
      </Box>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ fontWeight: "bold" }} gutterBottom>
            ORGANIZATIONAL NAME
          </Typography>

          <Controller
            name="name"
            control={form.control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Name"
                size="small"
                multiline
                error={!!form.formState.errors.name}
                helperText={form.formState.errors.name?.message}
                sx={{ width: "100%" }}
              />
            )}
          />
        </Box>

        <Box sx={{ my: 4 }}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Contact Number
              </Typography>
              <Controller
                name="phone"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="dense"
                    label="Phone"
                    size="small"
                    error={!!form.formState.errors.phone}
                    helperText={form.formState.errors.phone?.message}
                    sx={{ width: "100%" }}
                  />
                )}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Email
              </Typography>
              <Controller
                name="email"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="dense"
                    label="Email"
                    size="small"
                    error={!!form.formState.errors.email}
                    helperText={form.formState.errors.email?.message}
                    sx={{ width: "100%" }}
                  />
                )}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                City
              </Typography>
              <Controller
                name="city"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="dense"
                    label="City"
                    size="small"
                    error={!!form.formState.errors.city}
                    helperText={form.formState.errors.city?.message}
                    sx={{ width: "100%" }}
                  />
                )}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Country
              </Typography>
              <Controller
                name="country"
                control={form.control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="dense"
                    label="Country"
                    size="small"
                    error={!!form.formState.errors.country}
                    helperText={form.formState.errors.country?.message}
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
