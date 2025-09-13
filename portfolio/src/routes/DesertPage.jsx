
import "../styles/Desert.css";

import StickyMapButton from "../components/StickyMapButton";
import MapModal from "../components/MapModal";
import { useState } from "react";
import DecodeText from "../components/DecodeText";


const DesertPage = () => {
	const [mapOpen, setMapOpen] = useState(false);
	const [selectedSection, setSelectedSection] = useState("EDUCATION");
	const [decodeReveal, setDecodeReveal] = useState(true);
		const handleSectionClick = (section) => {
			setDecodeReveal(false);
			setSelectedSection(section); // selection happens immediately
			setTimeout(() => {
				setDecodeReveal(true);
			}, 600);
		};

	return (
		<>
			<div className="desert-top-title">
				<DecodeText text={selectedSection} revealed={decodeReveal} />
			</div>
					<section className="biome-section desert">
						<aside className="desert-sidebar">
							<button
								className={"sidebar-rotated-text education" + (selectedSection === "EDUCATION" ? " is-active" : "")}
								onClick={() => handleSectionClick("EDUCATION")}
								tabIndex={0}
							>
								Education
							</button>
							<button
								className={"sidebar-rotated-text experience" + (selectedSection === "EXPERIENCE" ? " is-active" : "")}
								onClick={() => handleSectionClick("EXPERIENCE")}
								tabIndex={0}
							>
								Experience
							</button>
						</aside>
						<div className="desert-glass-stack">
							{selectedSection === "EDUCATION" ? (
								<>
									<div className="desert-glass-card-1">
										<div>
											<h2 style={{margin: 0, fontSize: '2rem'}}>Student @ NC State University</h2>
											<ul style={{margin: '1.2em 0 0 1.2em'}}>
												<li>Bachelor of Science in Computer Science (ABM Program)</li>
												<li>Focus: Applied AI & Software Engineering</li>
												<li>Competitive Programming Club member</li>
											</ul>
										</div>
									</div>
									<div className="desert-glass-card-2">
										<div>
											<h2 style={{margin: 0, fontSize: '2rem'}}>Student @ WakeTech College</h2>
											<ul style={{margin: '1.2em 0 0 1.2em'}}>
												<li>Associate in Engineering transfer pathway</li>
												<li>Honors Program & Sigma Kappa Delta member</li>
												<li>High academic performance</li>
											</ul>
										</div>
									</div>
								</>
							) : (
								<>
									<div className="desert-glass-card-1">
										<div>
											<h2 style={{margin: 0, fontSize: '2rem'}}>Full Stack Intern @ Axiom</h2>
											<ul style={{margin: '1.2em 0 0 1.2em'}}>
												<li>Built and maintained flagship CRM platform</li>
												<li>Developed secure RESTful C# APIs & Angular UIs</li>
												<li>Used Azure DevOps for agile project tracking</li>
											</ul>
										</div>
									</div>
									<div className="desert-glass-card-2">
										<div>
											<h2 style={{margin: 0, fontSize: '2rem'}}>Web Developer @ Bayan Institute</h2>
											<ul style={{margin: '1.2em 0 0 1.2em'}}>
												<li>Designed and deployed donation-driven platform</li>
												<li>Aligned platform with organizational goals</li>
												<li>Supported ongoing fundraising initiatives</li>
											</ul>
										</div>
									</div>
								</>
							)}
						</div>
					</section>
			<StickyMapButton onClick={() => setMapOpen(true)} />
			<MapModal open={mapOpen} onClose={() => setMapOpen(false)} />
		</>
	);
};

export default DesertPage;
