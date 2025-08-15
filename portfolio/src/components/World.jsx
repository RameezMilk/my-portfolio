import React, { useRef, useEffect, useState } from "react";
import Landing from "./Landing";
import Tropical from "./Tropical";
import Desert from "./Desert";
import Tundra from "./Tundra";
import Ruins from "./Ruins";
import { useWorld } from "../context/WorldContext.jsx";
import StickyMapButton from "./StickyMapButton";
import MapModal from "./MapModal";

const biomeOrder = [
  { id: "landing", Component: Landing },
  { id: "tropical", Component: Tropical },
  { id: "desert", Component: Desert },
  { id: "tundra", Component: Tundra },
  { id: "ruins", Component: Ruins },
];

const World = () => {
  const sectionRefs = useRef([]);
  const { currentBiome, teleportToBiome } = useWorld();
  const [mapOpen, setMapOpen] = useState(false);

  // Scroll to biome when currentBiome changes
  useEffect(() => {
    const idx = biomeOrder.findIndex((b) => b.id === currentBiome);
    if (idx !== -1 && sectionRefs.current[idx]) {
      sectionRefs.current[idx].scrollIntoView({ behavior: "smooth" });
    }
  }, [currentBiome]);

  return (
    <div className="world">
      {biomeOrder.map(({ id, Component }, idx) => (
        <section
          key={id}
          ref={(el) => (sectionRefs.current[idx] = el)}
          id={id}
          style={{ minHeight: "100vh", width: "100vw" }}
        >
          <Component />
        </section>
      ))}
      <StickyMapButton onClick={() => setMapOpen(true)} />
      <MapModal open={mapOpen} onClose={() => setMapOpen(false)} onTeleport={teleportToBiome} />
    </div>
  );
};

export default World;
