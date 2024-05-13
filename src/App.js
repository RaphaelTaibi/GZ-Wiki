import React from "react";
import "./index.css";
import backgroundImage from "./assets/images/bg-pattern.webp";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Article from "./components/article/Article";
import FactionDetail from "./components/factionsDetail/FactionsDetail";
import TraderDetail from "./components/tradersDetail/TraderDetail";
import QuestDetail from "./components/questDetail/QuestDetail";
import Quests from "./pages/quests/Quest";
import Maps from "./pages/maps/Maps";
import NotFoundPage from "./pages/404/NotFound";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <div
        className="flex flex-col min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <AppHeader />
        <main className="flex-grow">
          <Routes>
            <Route path="/quests" element={<Quests />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/faction/:factionId" element={<FactionDetail />} />
            <Route path="/traders/:traderId" element={<TraderDetail />} />
            <Route
              path="/quests/faction/:factionId/:questId"
              element={<QuestDetail />}
            />
            <Route path="/quests/common/:questId" element={<QuestDetail />} />
            <Route
              path="/quests/traders/:traderId/:questId"
              element={<QuestDetail />}
            />
            <Route path="/protections" element={<React.Fragment />} />
            <Route path="/balistics" element={<React.Fragment />} />
            <Route path="/social" element={<Article />} />
            <Route path="/" element={<Home />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <AppFooter />
      </div>
    </Router>
  );
}

function AppHeader() {
  const location = useLocation();

  // Do not show the header on the home page
  if (location.pathname === "/") {
    return null;
  }

  return <Header />;
}
function AppFooter() {
  const location = useLocation();

  // Do not show the header on the home page
  if (location.pathname === "/") {
    return null;
  }

  return <Footer />;
}

export default App;
