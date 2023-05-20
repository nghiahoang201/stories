import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ShowGalleryContext } from "components/context/ShowGalleryContext";

const FilePost = ({ icon, background, text, input }) => {
  const { setImageStorie } = useContext(ShowGalleryContext);
  const handleFile = (e) => {
    setImageStorie(e.target.files[0].name);
  };
  return (
    <Box
      sx={{
        width: "220px",
        height: "330px",
        background: background,
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        "&:hover": {
          opacity: 0.9,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <Box
          sx={{
            width: "44px",
            height: "44px",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "100%",
            position: "absolute",
          }}
        >
          {icon}
        </Box>
        <Typography
          color="initial"
          sx={{
            position: "relative",
            top: 40,
            fontSize: "14px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {text}
        </Typography>
      </Box>
      {input && (
        <input
          type="file"
          onChange={handleFile}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 220,
            height: 330,
            opacity: 0,
            cursor: "pointer",
          }}
        />
      )}
    </Box>
  );
};

export default FilePost;
