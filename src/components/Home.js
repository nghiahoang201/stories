import Box from "@mui/material/Box";
import React, { useContext, useState } from "react";
import Header from "components/Header";
import StoryBox from "components/StoryBox";
import ShowGalleryStory from "components/ShowGalleryStory";
import { ShowGalleryContext } from "components/context/ShowGalleryContext";

function Home() {
  const { showGallery } = useContext(ShowGalleryContext);
  const [storySelected, setStorySelected] = useState();

  const data = localStorage.getItem("storie");
  const dataStories = JSON.parse(data);

  return (
    <>
      <Box className="Home" sx={{ backgroundColor: "#f0f2f5", height: "100%" }}>
        <Header>Stories</Header>
        <StoryBox
          setStorySelected={setStorySelected}
          dataStories={dataStories}
        ></StoryBox>
      </Box>
      {showGallery && (
        <ShowGalleryStory
          storySelected={storySelected}
          setStorySelected={setStorySelected}
        ></ShowGalleryStory>
      )}
    </>
  );
}

export default Home;
