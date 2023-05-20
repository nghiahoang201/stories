import { BrowserRouter, Routes, Route } from "react-router-dom";
import url from "./url";
import Home from "components/Home";
import CreateStories from "components/Stories/CreateStories";

function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{ height: "100vh" }}>
          <Routes>
            <Route path={url.home} element={<Home />} />
            <Route path={url.storiesCreate} element={<CreateStories />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
