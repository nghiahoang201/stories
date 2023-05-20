import React from "react";
import { Box } from "@mui/material";

const Icon = ({ width, height, background, hoverBackGround, icon }) => {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        background: background,
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
          background: hoverBackGround,
        },
      }}
    >
      {icon}
    </Box>
  );
};

export default Icon;
