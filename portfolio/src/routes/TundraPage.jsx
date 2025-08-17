import "../styles/Tundra.css";
import React, { useState } from "react";

import StickyMapButton from "../components/StickyMapButton";
import MapModal from "../components/MapModal";


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
			{/* Main Tundra content here */}
					<section className="biome-section tundra">
				<div className="tundra-feature-group">
			       <div className="line-project-1 line-with-btn desktop-only">
									   <button className="tundra-line-btn tundra-line-btn-1" onClick={handleCardBtnClick}>Macromancer</button>
			       </div>
			       <div className="line-project-2 line-with-btn desktop-only">
									   <button className="tundra-line-btn tundra-line-btn-2" onClick={handleCardBtnClick}>Portfolio</button>
			       </div>
			       <div className="line-project-3 line-with-btn desktop-only">
									   <button className="tundra-line-btn tundra-line-btn-3" onClick={handleCardBtnClick}>Expertiza</button>
			       </div>
					{/* Mobile button row, only visible on mobile */}
			       <div className="tundra-mobile-btn-row">
									   <button className="tundra-line-btn tundra-line-btn-1" onClick={handleCardBtnClick}>Macromancer</button>
									   <button className="tundra-line-btn tundra-line-btn-2" onClick={handleCardBtnClick}>Portfolio</button>
									   <button className="tundra-line-btn tundra-line-btn-3" onClick={handleCardBtnClick}>Expertiza</button>
			       </div>
					<img className="tundra-iceberg" src="/images/iceberg.png" alt="Iceberg" />
				</div>
						<div className="tundra-content">
							<h1 className="tundra-title">PROJECTS</h1>
							<div className="tundra-card">
													   <div className="tundra-card-title">{cardTitle}</div>
													   <img className="tundra-card-image" src={cardImg} alt="Card visual" />
													   <div className="tundra-card-desc">{cardDesc}</div>
							</div>
						</div>
					</section>
			<StickyMapButton onClick={() => setMapOpen(true)} />
			<MapModal open={mapOpen} onClose={() => setMapOpen(false)} />
		</>
	);
};

export default TundraPage;
