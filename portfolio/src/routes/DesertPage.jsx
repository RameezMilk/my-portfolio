
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
												<div className="desert-center-content desert-center-columns">
													<div className="desert-center-col desert-role-container fullstack-narrow">
														<div className="desert-role-title">
															{selectedSection === "EDUCATION"
																? "Student @ NC State University"
																: "Full Stack Software Intern @ Axiom"}
														</div>
														<div className="desert-role-desc">
															{selectedSection === "EDUCATION"
																		? (
																				"At North Carolina State University, I am pursuing a Bachelor of Science in Computer Science as part of the Accelerated Bachelor’s/Master’s (ABM) Program, which will allow me to complete my Master’s in one additional year. My academic and career focus is on Applied AI and Software Engineering, where I am developing both theoretical and practical expertise in designing scalable systems. Beyond coursework, I am active in the Competitive Programming Club, where I strengthen my technical skills and collaborate with peers on challenging problem-solving tasks."
																			) : (
																				"As a Full-Stack Developer Intern at Axiom Software, I play a key role in building and maintaining the company’s flagship CRM platform, which serves as a dynamic solution for managing client data and business workflows. My work spans the full development stack, where I architect and implement secure, RESTful C# APIs to enable efficient and reliable data transactions, while also designing responsive user interfaces in Angular that improve usability and interactivity for end-users. By leveraging Microsoft’s .NET ecosystem, I ensure backend logic is both scalable and performance-driven, while my use of Azure DevOps allows for agile project tracking, version control, and smooth team-wide deployment."
																			)}
														</div>
													</div>
													<div className="desert-center-col desert-role-container fullstack-narrow">
														<div className="desert-role-title">
															{selectedSection === "EDUCATION"
															? "Student @ Wake Technical Community College"
															: "Web Developer @ Bayan Institute"}
														</div>
														<div className="desert-role-desc">
															{selectedSection === "EDUCATION"
																		? (
																				"Prior to NC State, I studied at Wake Technical Community College in the Associate in Engineering transfer pathway with a focus on Computer Science. During this time, I built a strong academic foundation in engineering principles and programming, which prepared me for transfer into NC State’s rigorous program. I was a member of the Wake Tech Honors Program and Sigma Kappa Delta (English Honors Society), where I cultivated a balance of technical and communication skills, while maintaining high academic performance in a competitive environment."
																			) : (
																				"As a Web Developer for the Bayan International Islamic Institute, I designed and deployed a modern, donation-driven platform that empowers the organization to maximize community engagement and fundraising outcomes. Beyond technical execution, I worked directly with stakeholders to ensure the platform aligned with organizational goals and evolving campaign strategies, ultimately building a digital presence that continues to support ongoing fundraising initiatives and long-term growth."
																			)}
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
