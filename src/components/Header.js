import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Header = ({ children }) => {
  return (
    <Box>
      <Typography variant="h1" gutterBottom align="center">
        {children}
      </Typography>
    </Box>
  );
};

export default Header;
