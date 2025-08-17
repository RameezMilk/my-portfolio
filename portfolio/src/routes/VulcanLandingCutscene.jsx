
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const VulcanLandingCutscene = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);
  return null;
};

export default VulcanLandingCutscene;
