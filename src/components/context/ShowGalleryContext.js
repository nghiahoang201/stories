import { dataStories, typesText, imagesColor } from "data/DataStories";
import { createContext, useState } from "react";

const ShowGalleryContext = createContext();

const ShowGalleryProvider = ({ children }) => {
  const [imageChang, setImageChang] = useState("");
  const [text, setText] = useState("");
  const [typeText, setTypeText] = useState({});
  const [open, setOpen] = useState(false);
  const [backGround, setBackGround] = useState();
  const [showGallery, setShowGallery] = useState(false);
  const [imageStorie, setImageStorie] = useState("");
  const [onchangImage, setOnchangImage] = useState();
  const getLocal = JSON.parse(localStorage.getItem("storie"));
  const [dataStorie, setDataStorie] = useState(() => {
    if (getLocal !== null) {
      return getLocal;
    } else {
      return [];
    }
  });

  function saveLocalStorage(item) {
    const data = JSON.stringify(item);
    localStorage.setItem("storie", data);
  }

  if (dataStorie.length > dataStories.length) {
    saveLocalStorage(dataStorie);
  }

  const handleShowGallery = () => {
    setShowGallery(!showGallery);
  };

  const value = {
    showGallery,
    handleShowGallery,
    dataStories,
    dataStorie,
    setDataStorie,
    imagesColor,
    setOpen,
    open,
    setText,
    text,
    typesText,
    setTypeText,
    typeText,
    backGround,
    setBackGround,
    imageStorie,
    setImageStorie,
    setImageChang,
    imageChang,
    onchangImage,
    setOnchangImage,
  };
  return (
    <ShowGalleryContext.Provider value={value}>
      {children}
    </ShowGalleryContext.Provider>
  );
};

export { ShowGalleryContext, ShowGalleryProvider };
