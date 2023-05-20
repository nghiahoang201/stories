import { Button } from "@mui/material";
import React from "react";

const ButtonArrow = ({ onClick, startIcon, position }) => {
  if (position === "left")
    return (
      <Button
        onClick={onClick}
        startIcon={startIcon}
        sx={{
          minWidth: "initial",
          display: "flex",
          justifyContent: "center",
          width: "30px",
          height: "30px",
          borderRadius: "100px",
          backgroundColor: "white",
          position: "absolute",
          zIndex: 10,
          left: 10,
          top: "50%",
        }}
      ></Button>
    );

  return (
    <Button
      onClick={onClick}
      startIcon={startIcon}
      sx={{
        minWidth: "initial",
        display: "flex",
        justifyContent: "center",
        width: "30px",
        height: "30px",
        borderRadius: "100px",
        backgroundColor: "white",
        position: "absolute",
        zIndex: 10,
        right: 10,
        top: "50%",
      }}
    ></Button>
  );
};

export default ButtonArrow;
