import { Box } from "@mui/system";
import React from "react";

const AvatarStory = ({ avatar }) => {
  return (
    <Box
      sx={{
        width: "35px",
        height: "35px",
        position: "absolute",
        zIndex: "10",
        top: "20px",
        left: "20px",
        backgroundColor: "#5260d4",
        padding: "4px",
        borderRadius: "100px",
      }}
    >
      <img
        src={avatar}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "100px",
          display: "inline-block",
        }}
      />
    </Box>
  );
};

export default AvatarStory;
