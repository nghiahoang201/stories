import React, { useContext, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import { user } from "../../data/DataStories";
import { useNavigate } from "react-router-dom";
import url from "../../url";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import { ShowGalleryContext } from "components/context/ShowGalleryContext";
import ImageText from "./imageText";
import Icon from "./Icon";

const NavStories = ({ imageStorie }) => {
  const {
    dataStorie,
    setDataStorie,
    backGround,
    text,
    typeText,
    setImageChang,
    setImageStorie,
    imageChang,
  } = useContext(ShowGalleryContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (imageStorie !== "") {
      setImageChang(imageStorie);
    } else if (backGround) {
      setImageChang(backGround);
    }
  }, [imageStorie, setImageChang, backGround]);

  const handlePushStorie = () => {
    const existStorie = dataStorie.find(
      (dataStorie) => dataStorie?.id === user?.id
    );
    if (existStorie) {
      setDataStorie(
        dataStorie.map((dataStorie) =>
          dataStorie?.id === existStorie?.id
            ? {
                ...existStorie,
                image: imageChang,
                text: text,
                typeText: typeText?.type,
              }
            : dataStorie
        )
      );
      alert("update storie thành công");
    } else {
      dataStorie.push({
        ...user,
        image: imageChang,
        text: text,
        typeText: typeText,
      });
      alert("đăng storie thành công");
    }
    navigate(url.home);
    setImageStorie("");
  };

  return (
    <Box
      sx={{
        minWidth: "360px",
        height: "100%",
        backgroundColor: "#fefefe",
        position: "inherit",
        boxShadow: "3px 0 #e6e8ea",
      }}
    >
      <Box
        sx={{
          height: "56px",
          display: "flex",
          alignItems: "center",
          borderBottom: "3px solid #efefef",
          px: 2,
        }}
      >
        <Icon
          width="40px"
          height="40px"
          background="#999999"
          hoverBackGround="#333"
          icon={
            <CloseIcon
              sx={{
                fontSize: "25px",
                color: "white",
              }}
            />
          }
        />

        <Box sx={{ marginLeft: "8px" }} onClick={() => navigate(url.home)}>
          <Icon
            width="46px"
            height="46px"
            icon={
              <FacebookOutlinedIcon
                sx={{ fontSize: "49px", color: "#0e8ef1" }}
              />
            }
          />
        </Box>
      </Box>
      <Box
        sx={{
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
        }}
      >
        <Typography
          variant="h1"
          color="black"
          sx={{ fontSize: "24px", fontWeight: "bold" }}
        >
          Tin của bạn
        </Typography>

        <Icon
          width="36px"
          height="36px"
          background="#e4e6eb"
          icon={<SettingsIcon />}
        />
      </Box>
      <Box
        sx={{
          mt: 1,
          display: "flex",
          alignItems: "center",
          padding: "8px 16px 26px 16px",
          borderBottom: "3px solid #efefef",
        }}
      >
        <img
          src={user.image}
          alt="img"
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "100%",
            marginRight: "12px",
          }}
        />
        <Typography
          variant="text"
          color="black"
          sx={{ fontSize: "17px", fontWeight: "600" }}
        >
          {user.name}
        </Typography>
      </Box>
      <Box
        sx={{
          m: 2,
          cursor: "pointer",
        }}
      >
        {imageStorie === "" ? (
          ""
        ) : (
          <Box
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              borderRadius: "4px",
              "&:hover": {
                background: "#e4e6eb",
              },
            }}
          >
            <Box sx={{ mr: 1 }}>
              <Icon
                width="40px"
                height="40px"
                background="#f0f2f5"
                icon={<TextIncreaseIcon />}
              />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "17px", fontWeight: "500" }}>
                Thêm văn bản
              </Typography>
            </Box>
          </Box>
        )}
        {backGround && <ImageText />}
        {imageStorie !== "" || backGround ? (
          <Box
            sx={{
              pt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: 14,
              borderTop: "3px solid #efefef",
            }}
          >
            <Button
              sx={{
                background: "#e4e6eb",
                color: "black",
                width: "120px",
                "&:hover": { background: "#ccc" },
                mr: 1,
              }}
            >
              Bỏ
            </Button>

            <Button
              sx={{ width: "198px" }}
              variant="contained"
              color="primary"
              onClick={() => handlePushStorie()}
            >
              Chia sẻ lên tin
            </Button>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default NavStories;
