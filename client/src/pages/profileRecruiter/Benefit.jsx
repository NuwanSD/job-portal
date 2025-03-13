import React from "react";
import { Typography, Divider, Box, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  benefit01: z.string().nonempty("Benefit 1 is required"),
  benefit02: z.string().nonempty("Benefit 2 is required"),
  benefit03: z.string().nonempty("Benefit 3 is required"),
  benefit04: z.string().nonempty("Benefit 4 is required"),
});

const Benefit = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      benefit01: "xxxxxxxxxxxxxxxxx",
      benefit02: "xxxxxxxxxxxxxxxxx",
      benefit03: "xxxxxxxxxxxxxxxxx",
      benefit04: "xxxxxxxxxxxxxxxxx",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box component="form" onSubmit={form.handleSubmit(onSubmit)}>
      <Typography sx={{ fontWeight: "bold", mt: 4 }} gutterBottom>
        Company Benefits
      </Typography>

      <Controller
        name="benefit01"
        control={form.control}
        render={({ field }) => (
          <TextField
            {...field}
            margin="dense"
            size="small"
            error={!!form.formState.errors.benefit01}
            helperText={form.formState.errors.benefit01?.message}
            sx={{ width: "100%" }}
          />
        )}
      />
      <Controller
        name="benefit02"
        control={form.control}
        render={({ field }) => (
          <TextField
            {...field}
            margin="dense"
            size="small"
            error={!!form.formState.errors.benefit02}
            helperText={form.formState.errors.benefit02?.message}
            sx={{ width: "100%" }}
          />
        )}
      />
      <Controller
        name="benefit03"
        control={form.control}
        render={({ field }) => (
          <TextField
            {...field}
            margin="dense"
            size="small"
            error={!!form.formState.errors.benefit03}
            helperText={form.formState.errors.benefit03?.message}
            sx={{ width: "100%" }}
          />
        )}
      />
      <Controller
        name="benefit04"
        control={form.control}
        render={({ field }) => (
          <TextField
            {...field}
            margin="dense"
            size="small"
            error={!!form.formState.errors.benefit04}
            helperText={form.formState.errors.benefit04?.message}
            sx={{ width: "100%" }}
          />
        )}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ textTransform: "none", width: "100%", mt: 1 }}
      >
        Save Chanages
      </Button>
    </Box>
  );
};

export default Benefit;
