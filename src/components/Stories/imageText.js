import React, { useContext } from "react";
import { Box, MenuItem, Select, TextField } from "@mui/material";
import { ShowGalleryContext } from "components/context/ShowGalleryContext";

const ImageText = () => {
  const { imagesColor, setText, typesText, setTypeText, setBackGround } =
    useContext(ShowGalleryContext);
  return (
    <Box>
      <Box mb={2}>
        <TextField
          label="nhập văn bản"
          rows={6}
          multiline
          sx={{ width: "100%" }}
          onChange={(e) => setText(e.target.value)}
        />
      </Box>
      <Box mb={2}>
        <Select defaultValue="Bình thường" sx={{ width: "100%" }}>
          {typesText.map((typesText) => (
            <MenuItem
              key={typesText.id}
              sx={{ background: "white" }}
              value={typesText.text}
              onClick={() => setTypeText(typesText)}
            >
              {typesText.text}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box
        sx={{
          border: "1px solid #c4c4c4",
          height: "140px",
          borderRadius: "4px",
          cursor: "default",
        }}
      >
        {imagesColor.map((imagesColor, index) => (
          <img
            key={index}
            src={require(`../../Image/${imagesColor}`)}
            alt="img"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "100%",
              margin: "10px 0 0 12px",
              cursor: "pointer",
            }}
            onClick={() => setBackGround(imagesColor)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageText;
