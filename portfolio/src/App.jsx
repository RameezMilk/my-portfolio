
import React from "react";
import { Routes, Route } from "react-router-dom";
import World from "./components/World";
import { WorldProvider } from "./context/WorldContext.jsx";
import LandingPage from "./routes/LandingPage";
import TropicalPage from "./routes/TropicalPage";
import DesertPage from "./routes/DesertPage";
import TundraPage from "./routes/TundraPage";
import RuinsPage from "./routes/RuinsPage";
import VulcanLandingCutscene from "./routes/VulcanLandingCutscene";
import OvergroveJungleCutscene from "./routes/OvergroveJungleCutscene";
import ScorrahDesertCutscene from "./routes/ScorrahDesertCutscene";
import OlvrekTundraCutscene from "./routes/OlvrekTundraCutscene";
import AshkaraCutscene from "./routes/AshkaraCutscene";

const App = () => {
  return (
    <WorldProvider>
      <Routes>
        <Route path="/" element={<World />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/tropical" element={<TropicalPage />} />
        <Route path="/desert" element={<DesertPage />} />
        <Route path="/tundra" element={<TundraPage />} />
        <Route path="/ruins" element={<RuinsPage />} />
        <Route path="/cutscene/vulcan-landing" element={<VulcanLandingCutscene />} />
        <Route path="/cutscene/overgrove-jungle" element={<OvergroveJungleCutscene />} />
        <Route path="/cutscene/scorrah-desert" element={<ScorrahDesertCutscene />} />
        <Route path="/cutscene/olvrek-tundra" element={<OlvrekTundraCutscene />} />
        <Route path="/cutscene/ashkara" element={<AshkaraCutscene />} />
      </Routes>
    </WorldProvider>
  );
}

export default App;
