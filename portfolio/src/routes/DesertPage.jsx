import StickyMapButton from "../components/StickyMapButton";
import DecodeText from "../components/DecodeText";

import "../styles/Desert.css";



import MapModal from "../components/MapModal";
import { useState } from "react";



const DesertPage = () => {
  const [mapOpen, setMapOpen] = useState(false);
  const [selected, setSelected] = useState("EDUCATION");

  // Card content for each mode
  const eduCards = [
    {
      title: "Wake Technical Community College",
      bullets: ["Associate in Engineering (2022-2023)"]
    },
    {
      title: "North Carolina State University",
      bullets: ["Bachelor's of Science in Computer Science (2023-2025)"]
    },
    {
      title: "North Carolina State University",
      bullets: ["Master's of Science in Computer Science (2025-2026)"]
    }
  ];
  const expCards = [
    {
      title: [
        "Bayan International Islamic Institute",
        "Web Developer (Feb 2025–Apr 2025)"
      ],
      bullets: [
        "Enabled a $700K fundraising initiative by establishing a donation platform for 400+ students."
      ]
    },
    {
      title: [
        "Axiom Software",
        "Full-Stack Developer Intern (Jun 2025–Sep 2025)"
      ],
      bullets: [
        "Developed an Admin License Management System, integrating seamlessly into existing flagship CRM."
      ]
    },
    {
      title: [
        "Axiom Software",
        "AI Automation Intern (Sep 2025–Present)"
      ],
      bullets: [
        "Engineered a Deterministic Autofill Service featuring live web search, to auto-populate company records."
      ]
    }
  ];

  const cards = selected === "EDUCATION" ? eduCards : expCards;
  const pageTitle = selected === "EDUCATION" ? "EDUCATION" : "EXPERIENCE";

  return (
    <>
      <div className="desert-navbar desert-navbar-top">
        <span className="desert-top-title">
          <DecodeText text={pageTitle} revealed={true} />
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
          {cards.map((card, idx) => (
            <div
              className={`edu-card edu-${idx + 1} ${selected === "EDUCATION" ? "edu-card-center" : ""}`}
              key={idx}
              style={selected === "EXPERIENCE" ? { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' } : {}}
            >
              <div>
                {Array.isArray(card.title) ? (
                  <div className="edu-title">
                    <div className="company-name">{card.title[0]}</div>
                    <div className="role-timeframe">{card.title[1]}</div>
                  </div>
                ) : (
                  <div className="edu-title">{card.title}</div>
                )}
                <ul className="edu-list">
                  {card.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              {selected === "EXPERIENCE" && (
                <a
                  href={
                    idx === 0
                      ? "https://bayaniii.org/"
                      : "https://axiomworkspace.com/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <button className="btn cubic-button" type="button">
                    <div className="bg-top">
                      <div className="bg-inner"></div>
                    </div>
                    <div className="bg-right">
                      <div className="bg-inner"></div>
                    </div>
                    <div className="bg">
                      <div className="bg-inner"></div>
                    </div>
                    <div className="text">Learn More</div>
                  </button>
                </a>
              )}
            </div>
          ))}
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
