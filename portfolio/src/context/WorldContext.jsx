import React, { createContext, useContext, useState, useCallback } from "react";

// Context for world navigation and transitions
const WorldContext = createContext();

export const WorldProvider = ({ children }) => {
  const [currentBiome, setCurrentBiome] = useState("landing"); // e.g., 'landing', 'tropical', etc.
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetBiome, setTargetBiome] = useState(null);

  // Trigger teleport/transition to a biome
  const teleportToBiome = useCallback((biomeId) => {
    setTargetBiome(biomeId);
    setIsTransitioning(true);
    // After animation, setCurrentBiome(biomeId) and setIsTransitioning(false)
  }, []);

  // Call this after transition animation completes
  const completeTransition = useCallback(() => {
    if (targetBiome) {
      setCurrentBiome(targetBiome);
      setTargetBiome(null);
    }
    setIsTransitioning(false);
  }, [targetBiome]);

  return (
    <WorldContext.Provider
      value={{
        currentBiome,
        isTransitioning,
        targetBiome,
        teleportToBiome,
        completeTransition,
      }}
    >
      {children}
    </WorldContext.Provider>
  );
};

export const useWorld = () => useContext(WorldContext);
