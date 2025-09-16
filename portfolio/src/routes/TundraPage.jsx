import "../styles/Tundra.css";
import React, { useState } from "react";


import StickyMapButton from "../components/StickyMapButton";
import MapModal from "../components/MapModal";
import SnowParticles from "../components/SnowParticles";


const TundraPage = () => {
	const [mapOpen, setMapOpen] = useState(false);

	const [cardTitle, setCardTitle] = useState("Macromancer");
	const [cardSubtitle, setCardSubtitle] = useState("AI-Powered Calorie Tracker");
	const [cardDesc, setCardDesc] = useState("Harness the intelligence of AI to decode your meals with seamless precision. Designed with an elegant React interface and powered by GPT-4o-mini, this project blends image recognition and personalized nutrition, offering clarity and balance for every user.");
	const [cardImg, setCardImg] = useState("/images/Macromancer.png");


       // Handler for all tundra-line-btn buttons
       const handleCardBtnClick = (e) => {
	       const btnText = e.target.textContent;
		   setCardTitle(btnText);
		   if (btnText === "Macromancer") {
			   setCardSubtitle("AI-Powered Calorie Tracker");
			   setCardDesc("Harness the intelligence of AI to decode your meals with seamless precision. Designed with an elegant React interface and powered by GPT-4o-mini, this project blends image recognition and personalized nutrition, offering clarity and balance for every user.");
			   setCardImg("/images/Macromancer.png");
		   } else if (btnText === "Expertiza") {
			   setCardSubtitle("Open Source Github Contribution");
			   setCardDesc("Experience the refinement of academic peer review through carefully restructured architecture. Rooted in Ruby on Rails and modernized with RESTful APIs, robust tests, and SOLID principles, this project breathes clarity and stability into a legacy system used by students worldwide.");
			   setCardImg("/images/Expertiza.png");
		   } else if (btnText === "Portfolio") {
			   setCardSubtitle("Professional Web Presense");
			   setCardDesc("Step into a curated digital identity with this responsive portfolio, designed to reflect both technical craft and personal aesthetic. Built with modern web frameworks, it embodies elegance, accessibility, and purpose.");
			   setCardImg("/images/world.png");
		   }
       };

			return (
				<>
					<SnowParticles />
					<section className="biome-section tundra">
						<div className="tundra-main-flex">
							<div className="tundra-title-row">
								<h1 className="tundra-title">PROJECTS</h1>
							</div>
							<div className="tundra-card-flex">
								<div className="glass-card">
									<div className="glass-card-left">
										<h2 className="card-title">{cardTitle}</h2>
										<p className="card-subtitle">{cardSubtitle}</p>
										<div className="card-content">
											<p>{cardDesc}</p>
										</div>
									</div>
									<img className="card-image" src={cardImg} alt={cardTitle} />
								</div>
							</div>
							<div className="tundra-btn-vertical-group">
								<button className="tundra-line-btn tundra-line-btn-1" onClick={handleCardBtnClick}>Macromancer</button>
								<button className="tundra-line-btn tundra-line-btn-2" onClick={handleCardBtnClick}>Portfolio</button>
								<button className="tundra-line-btn tundra-line-btn-3" onClick={handleCardBtnClick}>Expertiza</button>
							</div>
						</div>
					</section>
					<StickyMapButton onClick={() => setMapOpen(true)} />
					<MapModal open={mapOpen} onClose={() => setMapOpen(false)} />
				</>
	);
};

export default TundraPage;
