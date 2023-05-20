import React, { useContext } from "react";
import { Box } from "@mui/material";
import NavStories from "./NavStories";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { user } from "../../data/DataStories";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import CreateImageStories from "./createImageStories";
import { ShowGalleryContext } from "components/context/ShowGalleryContext";
import { imagesColor } from "../../data/DataStories";
import FilePost from "./FilePost";

const CreateStories = () => {
  const { setOpen, open, setBackGround, imageStorie } =
    useContext(ShowGalleryContext);

  const handleOpen = () => {
    setBackGround(imagesColor[1]);
    setOpen(true);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f0f2f5",
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <NavStories imageStorie={imageStorie} />
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: "56px",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "40px",
              height: "40px",
              background: "#e4e6eb",
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: 1,
              cursor: "pointer",
            }}
          >
            <AppsIcon />
          </Box>
          <Box
            sx={{
              width: "40px",
              height: "40px",
              background: "#e4e6eb",
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: 1,
              cursor: "pointer",
            }}
          >
            <NotificationsIcon />
          </Box>
          <Box>
            <img
              src={user.image}
              alt="img"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                marginRight: "8px",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
        {imageStorie !== "" || open ? (
          <Box align="center" mt={2}>
            <CreateImageStories imageStorie={imageStorie} />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 20,
              gap: "20px",
            }}
          >
            <FilePost
              text="Tạo tin ảnh"
              icon={<AddPhotoAlternateIcon />}
              background="linear-gradient(to bottom,#6043ea, #85c9fc)"
              input={true}
            />

            <Box sx={{ cursor: "pointer" }} onClick={() => handleOpen()}>
              <FilePost
                text="Tạo tin dạng văn bản"
                icon={<TextIncreaseIcon />}
                background="linear-gradient(to bottom,#a949d7, #c65ac3,#e25288)"
                input={false}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CreateStories;
