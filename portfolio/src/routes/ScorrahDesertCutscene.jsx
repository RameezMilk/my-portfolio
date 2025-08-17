import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const ScorrahDesertCutscene = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/desert", { replace: true });
  }, [navigate]);
  return null;
};

export default ScorrahDesertCutscene;
