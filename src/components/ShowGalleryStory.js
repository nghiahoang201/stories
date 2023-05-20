import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { ShowGalleryContext } from "./context/ShowGalleryContext";

const ShowGalleryStory = (props) => {
  const { storySelected, setStorySelected } = props;
  const { handleShowGallery, dataStorie } = useContext(ShowGalleryContext);

  const [translateX, setTranslateX] = useState(0);

  const indexImageSelected = dataStorie.findIndex(
    (item) => item.image === storySelected.image
  );

  const handleClickNextStory = () => {
    setStorySelected(dataStorie[indexImageSelected + 1]);
    setTranslateX((x) => x - 480);
  };

  const handleClickPrevStory = () => {
    if (storySelected.id === 1) return;
    setStorySelected(dataStorie[indexImageSelected - 1]);
    setTranslateX((x) => x + 480);
  };

  return (
    <Box
      sx={{
        zIndex: 20,
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        backgroundColor: "#1a1a1a",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Typography
          variant="p"
          sx={{ fontSize: 25, color: "white", fontStyle: "italic", padding: 2 }}
        >
          Instagram
        </Typography>
        <Button
          onClick={handleShowGallery}
          variant="text"
          sx={{ backgroundColor: "none", borderRadius: 100, color: "white" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: "0 50px",
          transform: `translateX(${translateX}px)`,
          transitionDuration: "1s",
        }}
      >
        {[...dataStorie].reverse().map((item, index) => (
          <Box
            key={index}
            className={
              storySelected.id === item.id ? "scale-bigger" : "scale-smaller"
            }
            sx={{
              display: "flex",
              flexShrink: 0,
              flexDirection: "row-reverse",
              width: "440px",
              height: "600px",
              borderRadius: "18px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={require(`../Image/${item.image}`)}
              alt="img"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Typography
              sx={{
                color: "white",
                position: "absolute",
                top: "50%",
                left: "50%",
                maxWidth: "300px",
                maxHeight: "380px",
                fontSize: "18px",
                transform: "translate(-50%,-50%)",
                fontFamily: item?.typeText,
              }}
            >
              {item?.text}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: "fixed",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          gap: "0 550px",
          top: "50%",
        }}
      >
        <Button onClick={handleClickPrevStory} size="small" variant="contained">
          Prev
        </Button>
        <Button onClick={handleClickNextStory} size="small" variant="contained">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ShowGalleryStory;
