import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const OlvrekTundraCutscene = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/tundra", { replace: true });
  }, [navigate]);
  return null;
};

export default OlvrekTundraCutscene;
