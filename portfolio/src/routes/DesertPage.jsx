
import "../styles/Desert.css";

import StickyMapButton from "../components/StickyMapButton";
import MapModal from "../components/MapModal";
import { useState } from "react";


const DesertPage = () => {
	const [mapOpen, setMapOpen] = useState(false);
	const [selectedSection, setSelectedSection] = useState("EDUCATION");

	return (
		<>
			<div className="desert-top-title">
				{selectedSection}
			</div>
					<section className="biome-section desert">
						<aside className="desert-sidebar">
							<button
								className={"sidebar-rotated-text education" + (selectedSection === "EDUCATION" ? " is-active" : "")}
								onClick={() => setSelectedSection("EDUCATION")}
								tabIndex={0}
							>
								Education
							</button>
							<button
								className={"sidebar-rotated-text experience" + (selectedSection === "EXPERIENCE" ? " is-active" : "")}
								onClick={() => setSelectedSection("EXPERIENCE")}
								tabIndex={0}
							>
								Experience
							</button>
						</aside>
										<div className="desert-center-content desert-center-columns">
											<div className="desert-center-col desert-role-container fullstack-narrow">
												<div className="desert-role-title">Full Stack Software Intern @ Axiom</div>
												<div className="desert-role-desc">
													As a Full-Stack Developer at Axiom Software, I develop and maintain a CRM platform using .NET and Angular. I build secure C# APIs, design responsive UIs, and manage agile workflows via Azure DevOps, collaborating across teams in a fast-paced startup setting.
												</div>
											</div>
											<div className="desert-center-col desert-role-container fullstack-narrow">
												<div className="desert-role-title">Web Developer</div>
												<div className="desert-role-desc">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis, velit eu facilisis cursus, velit nisi cursus velit, facilisis facilisis velit nisi euismod.
												</div>
											</div>
										</div>
					</section>
			<StickyMapButton onClick={() => setMapOpen(true)} />
			<MapModal open={mapOpen} onClose={() => setMapOpen(false)} />
		</>
	);
};

export default DesertPage;
