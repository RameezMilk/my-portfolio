import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const OvergroveJungleCutscene = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/tropical", { replace: true });
  }, [navigate]);
  return null;
};

export default OvergroveJungleCutscene;
