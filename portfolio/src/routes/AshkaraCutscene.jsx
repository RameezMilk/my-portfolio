import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const AshkaraCutscene = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/ruins", { replace: true });
  }, [navigate]);
  return null;
};

export default AshkaraCutscene;
