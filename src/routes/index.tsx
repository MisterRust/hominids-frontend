import MainLayout from "components/layout";
import LandingPage from "pages/Landing-Page";
import Test from "pages/Test";
import Explore from "pages/explore";
import Minting from "pages/minting";
import Auction from "pages/auction";
// import Home from "pages/home";
import { Route, Routes } from "react-router-dom";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/minting" element={<Minting />} />
        <Route
          path="/auction"
          element={
            <Auction
              name="Hominids"
              current={1672}
              hour="08"
              min="23"
              sec="06"
              lastBid="JDHWSJ_01"
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default MainRouter;
