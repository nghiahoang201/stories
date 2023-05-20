import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import AvatarStory from "./AvatarStory";
import { ShowGalleryContext } from "./context/ShowGalleryContext";

const StoryItem = ({ item }) => {
  const { handleShowGallery } = useContext(ShowGalleryContext);

  const handleClickItem = () => {
    handleShowGallery();
  };

  return (
    <Box
      onClick={handleClickItem}
      sx={{
        display: "block",
        width: 130,
        height: 200,
        borderRadius: "20px",
        position: "relative",
        cursor: "pointer",
      }}
      key={item.name}
    >
      <AvatarStory avatar={item?.avatar}></AvatarStory>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "16px",
        }}
        src={require(`../Image/${item.image}`)}
        alt={item?.time}
      />
      {item?.text && (
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: "6px",
            width: "80px",
            textAlign: "center",
            color: "white",
            fontFamily: item?.typeText,
          }}
        >
          {item?.text}
        </Typography>
      )}
      <Typography
        variant="span"
        sx={{
          position: "absolute",
          bottom: 6,
          left: 10,
          color: "white",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        {item?.name}
      </Typography>
    </Box>
  );
};

export default StoryItem;
