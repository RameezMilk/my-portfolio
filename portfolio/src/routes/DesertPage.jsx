import StickyMapButton from "../components/StickyMapButton";
import DecodeText from "../components/DecodeText";

import "../styles/Desert.css";



import MapModal from "../components/MapModal";
import { useState } from "react";



const DesertPage = () => {
	const [mapOpen, setMapOpen] = useState(false);
		const [selected, setSelected] = useState("EDUCATION");

	return (
		<>
									<div className="desert-navbar desert-navbar-top">
									<span className="desert-top-title">
										<DecodeText text="EDUCATION" revealed={true} />
									</span>
								</div>
																<div className="desert-hero-image-section desert-hero-image-wrapper">
																  <img
																    src="/images/education-desert.jpeg"
																    alt="Education Desert"
																    className="desert-hero-image"
																    draggable="false"
																  />
																</div>

																				<div className="content-section">
																				  <div className="edu-cards-row">
																							<div className="edu-card edu-1">
																								<div className="edu-title">Wake Technical Community College</div>
																								<ul className="edu-list">
																									<li>Associate in Engineering (2022-2023)</li>
																								</ul>
																							</div>
																								<div className="edu-card edu-2">
																									<div className="edu-title">North Carolina State University</div>
																									<ul className="edu-list">
																										<li>Bachelor's of Science in Computer Science (2023-2025)</li>
																									</ul>
																								</div>
																				  </div>
																				</div>
			<div className="desert-navbar desert-navbar-bottom">
			  <nav className="desert-bottom-nav" aria-label="Inspire or Growth">
							<button
								className={`desert-bottom-btn${selected === "EDUCATION" ? " selected" : ""}`}
								aria-current={selected === "EDUCATION" ? "page" : undefined}
								onClick={() => setSelected("EDUCATION")}
								type="button"
							>
								EDUCATION
							</button>
							<button
								className={`desert-bottom-btn${selected === "EXPERIENCE" ? " selected" : ""}`}
								aria-current={selected === "EXPERIENCE" ? "page" : undefined}
								onClick={() => setSelected("EXPERIENCE")}
								type="button"
							>
								EXPERIENCE
							</button>
			  </nav>
			</div>
			<StickyMapButton onClick={() => setMapOpen(true)} />
			<MapModal open={mapOpen} onClose={() => setMapOpen(false)} />
		</>
	);
}

export default DesertPage;
