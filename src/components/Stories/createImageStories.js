import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ShowGalleryContext } from "components/context/ShowGalleryContext";

const CreateImageStories = ({ imageStorie }) => {
  const { text, typeText, backGround } = useContext(ShowGalleryContext);

  return (
    <Box
      align="center"
      sx={{
        width: "972px",
        height: "auto",
        background: "white",
        borderRadius: "10px",
      }}
    >
      <Box p={2}>
        <Box>
          <Typography
            sx={{
              textAlign: "start",
              fontWeight: "bold",
              fontSize: "15px",
              marginBottom: "16px",
            }}
          >
            Xem trước
          </Typography>
        </Box>
        <Box
          sx={{
            background: "black",
            borderRadius: "10px",
            padding: "2px",
          }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <img
              src={
                imageStorie
                  ? require(`../../Image/${imageStorie}`)
                  : require(`../../Image/${backGround}`)
              }
              alt="img"
              style={{
                margin: "20px 0 20px 0",
                minHeight: 440,
                maxWidth: 260,
                border: "1px solid  #ffffff",
                borderRadius: "6px",
              }}
            />
            <Box align="center">
              <Typography
                color="white"
                sx={{
                  position: "absolute",
                  fontSize: "20px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  maxWidth: "200px",
                  fontFamily: `${typeText?.type}`,
                }}
              >
                {text}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ color: "white", fontSize: "16px", marginBottom: "20px" }}
            >
              Chọn ảnh để cắt và xoay
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateImageStories;
