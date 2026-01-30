import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const WatchPage = lazy(() => import("./WatchPage"));

const LoadingFallback = ({ theme }) => (
  <div
    className={`flex items-center justify-center min-h-screen w-full ${
      theme === "dark" ? "bg-[#000000]" : "bg-white"
    }`}
  >
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
      <p
        className={`text-lg font-semibold ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Loading...
      </p>
    </div>
  </div>
);

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const theme = useSelector((store) => store.theme.mode);

  return (
    <div className={`flex-1 ${theme === "dark" ? "bg-[#000000]" : "bg-white"}`}>
      {isMenuOpen && <Sidebar />}
      <div className="flex w-full">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route
            path="/watch"
            element={
              <Suspense fallback={<LoadingFallback theme={theme} />}>
                <WatchPage />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Body;
