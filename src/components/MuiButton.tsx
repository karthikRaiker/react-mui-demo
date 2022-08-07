// import React from "react";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="http://www.google.com">
          Text Variant
        </Button>
        <Button variant="contained">Contained Variant</Button>
        <Button variant="outlined">Outlined Variant</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Typography variant="h5">Variant Contained</Typography>
        <Button variant="contained" color="primary">
          Primary Color
        </Button>
        <Button variant="contained" color="secondary">
          secondary Color
        </Button>
        <Button variant="contained" color="warning">
          warning Color
        </Button>
        <Button variant="contained" color="error">
          error Color
        </Button>
        <Button variant="contained" color="info">
          info Color
        </Button>
        <Button variant="contained" color="success">
          success Color
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Typography variant="h5">Variant Text</Typography>
        <Button variant="text" color="primary">
          Primary Color
        </Button>
        <Button variant="text" color="secondary">
          secondary Color
        </Button>
        <Button variant="text" color="warning">
          warning Color
        </Button>
        <Button variant="text" color="error">
          error Color
        </Button>
        <Button variant="text" color="info">
          info Color
        </Button>
        <Button variant="text" color="success">
          success Color
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Typography variant="h5">Variant Outlined</Typography>
        <Button variant="outlined" color="primary">
          Primary Color
        </Button>
        <Button variant="outlined" color="secondary">
          secondary Color
        </Button>
        <Button variant="outlined" color="warning">
          warning Color
        </Button>
        <Button variant="outlined" color="error">
          error Color
        </Button>
        <Button variant="outlined" color="info">
          info Color
        </Button>
        <Button variant="outlined" color="success">
          success Color
        </Button>
      </Stack>

      <Stack display="block" direction="row" spacing={2}>
        <Typography variant="h5">Button size</Typography>
        <Button variant="contained" size="small" color="primary">
          small size
        </Button>
        <Button variant="contained" size="medium" color="primary">
          medium size
        </Button>
        <Button variant="contained" size="large" color="primary">
          large size
        </Button>
      </Stack>
      <Stack display="block" direction="row" spacing={2}>
        <Typography variant="h5">Button icon</Typography>
        <Button
          variant="contained"
          startIcon={<LocalShippingIcon />}
          disableElevation
        >
          Shipping
        </Button>
        <Button
          variant="contained"
          endIcon={<LocalShippingIcon />}
          disableRipple
        >
          Shipping
        </Button>
        <IconButton
          color="info"
          onClick={() => alert("Hello you clicked on Icon button")}
        >
          <LocalShippingIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
