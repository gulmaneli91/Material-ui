import React from "react";
import { Button, Typography, styled } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {
  const BlueButton = styled(
    Button)(({theme}) => ({
      backgroundColor: "lightblue",
      color: "#333",
      m: 5,
      "&:hover": {
        backgroundColor: theme.palette.otherColor.main,
      },
      "&:disabled": {
        backgroundColor: "gray",
        color: "white",
      },
    }));
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Contained
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        ADD
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        h1. Heading
      </Typography>
      <Button
        variant="contained"
        disabled
        sx={{
          backgroundColor: "lightblue",
          color: "#333",
          m: 5,
          "&:hover": {
            backgroundColor: "skyblue",
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
        }}
      >
        My Unique button
      </Button>
      <BlueButton>Other way</BlueButton>
    </div>
  );
}

export default App;
