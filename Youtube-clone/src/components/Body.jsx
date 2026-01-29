import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const theme = useSelector((store) => store.theme.mode);

  return (
    <div className={`flex-1 ${theme === "dark" ? "bg-[#000000]" : "bg-white"}`}>
      {isMenuOpen && <Sidebar />}
      <div className="flex">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/watch" element={<WatchPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Body;
