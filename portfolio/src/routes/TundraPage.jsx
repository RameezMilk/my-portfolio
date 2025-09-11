import "../styles/Tundra.css";
import React, { useState } from "react";


import StickyMapButton from "../components/StickyMapButton";
import MapModal from "../components/MapModal";
import SnowParticles from "../components/SnowParticles";


const TundraPage = () => {
       const [mapOpen, setMapOpen] = useState(false);

	const [cardTitle, setCardTitle] = useState("Macromancer");
	const [cardDesc, setCardDesc] = useState("Built a React + Vite frontend and Node.js + Express backend to process food images via OpenAI’s GPT-4o-mini API for macro tracking. Integrated personalized BMR-based nutrition recommendations using user biometrics.");
	const [cardImg, setCardImg] = useState("/images/Macromancer.png");


       // Handler for all tundra-line-btn buttons
       const handleCardBtnClick = (e) => {
	       const btnText = e.target.textContent;
	       setCardTitle(btnText);
	       if (btnText === "Macromancer") {
               setCardDesc("Built a React + Vite frontend and Node.js + Express backend to process food images via OpenAI’s GPT-4o-mini API for macro tracking. Integrated personalized BMR-based nutrition recommendations using user biometrics.");
			   setCardImg("/images/Macromancer.png");
	       } else if (btnText === "Portfolio") {
			   setCardDesc("Designed and deployed a personal portfolio with a unique AI-dystopian theme. Showcased custom UI/UX design and advanced visual effects for a standout presentation. Demonstrates strong frontend development and creative design skills.");
			   setCardImg("/images/world.png");
	       } else if (btnText === "Expertiza") {
			   setCardDesc("Contributed to Expertiza, an open-source Ruby on Rails peer review platform, by refactoring model hierarchies and implementing RESTful APIs with full RSpec test coverage. Improved cohesion and modularity while adhering to SOLID design principles. Collaborated with maintainers to ensure changes aligned with academic and project needs.");
			   setCardImg("/images/Expertiza.png");
	       }
       };

			return (
				<>
					<SnowParticles />
					<section className="biome-section tundra">
						<div className="tundra-title-row">
							<h1 className="tundra-title">PROJECTS</h1>
						</div>
						<div className="tundra-card-flex">
							<div className="glass-card">
								<h2 className="card-title">Arctic Glass</h2>
								<p className="card-subtitle">Frozen crystalline interface</p>
								<div className="card-content">
									<p>Experience the pristine beauty of arctic glaciers with this crystalline glass card. Inspired by the ethereal transparency of ancient ice formations.</p>
								</div>
							</div>
						</div>
						<div className="tundra-btn-vertical-group desktop-btns">
							<button className="tundra-line-btn tundra-line-btn-1" onClick={handleCardBtnClick}>Macromancer</button>
							<button className="tundra-line-btn tundra-line-btn-2" onClick={handleCardBtnClick}>Portfolio</button>
							<button className="tundra-line-btn tundra-line-btn-3" onClick={handleCardBtnClick}>Expertiza</button>
						</div>
					</section>
					<StickyMapButton onClick={() => setMapOpen(true)} />
					<MapModal open={mapOpen} onClose={() => setMapOpen(false)} />
				</>
	);
};

export default TundraPage;
