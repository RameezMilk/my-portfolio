import React, { useState } from "react";
import "../styles/Ruins.css";



const SKILL_CATEGORIES = [
  "Programming Languages",
  "Web Development",
  "Frameworks",
  "Operating Systems",
  "Tools",
  "Database Management",
  "Cloud Infrastructure & DevOps"
];

function getRandomDots(num) {
  // Restrict to central 60% of radar (20% to 80%)
  return Array.from({ length: num }, () => ({
    left: Math.random() * 60 + 20, // 20% to 80%
    top: Math.random() * 60 + 20
  }));
}



// Chip labels for each skill category (as provided by user)
const CHIP_LABELS = [
  ["Java", "MATLAB", "C/C++/C#", "R", "Ruby", "JavaScript", "SQL", "Python"],
  ["React", "React Native", "Angular", "Vite", "Node.js", "Express", "HTML", "CSS"],
  ["Spring Boot", "Hibernate", "REST", "JUnit", "Ruby on Rails", "RAG", "Microsoft .NET"],
  ["Unix", "Linux", "Windows", "macOS"],
  ["Azure DevOps", "Eclipse", "Maven", "Github", "Jenkins", "Google Colab", "Visual Studio Code"],
  ["SQL", "MySQL Workbench", "Postman", "Flask", "H2 Database", "Azure Data Studio"],
  ["Docker", "Kubernetes", "AWS", "Microsoft Azure"]
];

const Ruins = () => {
  const [selected, setSelected] = useState(null);
  const [dots, setDots] = useState(getRandomDots(4));


  const handleSelect = idx => {
    setSelected(idx);
    setDots(getRandomDots(CHIP_LABELS[idx].length));
  };



  // Chips: 4 question marks if nothing selected, else show all chips for selected skill
  const chips =
    selected === null
      ? Array(4).fill("???")
      : CHIP_LABELS[selected];


  // Animation state for chips
  const [chipAnim, setChipAnim] = useState(true);

  // When sidebar button is clicked, animate chips out then in
  const handleSidebarClick = idx => {
    setChipAnim(false);
    setTimeout(() => {
      setSelected(idx);
      setDots(getRandomDots(CHIP_LABELS[idx].length));
      setChipAnim(true);
    }, 200); // 200ms for slide out
  };

  // If no skill is selected, show 4 dots; else, match number of chips
  const radarDots = selected === null ? 4 : chips.length;
  return (
    <section className="biome-section ruins">
      <header className="skills-header">
        <div className="sidebar-skills-list">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <React.Fragment key={cat}>
              <button
                className={"sidebar-skill-btn" + (selected === idx ? " is-active" : "")}
                onClick={() => handleSidebarClick(idx)}
              >
                {cat}
              </button>
              {idx < SKILL_CATEGORIES.length - 1 && <div className="sidebar-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </header>
      <div className="ruins-content-layout">
        <div className="skills-title-above-container">Skills</div>
        <div className="debug-green-container">
          <div className="ruins-chips-flex">
            {chips.map((chip, i) => (
              <span
                key={chip + i}
                className={
                  "chip-item" +
                  (chipAnim ? " chip-slide-in" : " chip-slide-out")
                }
                style={{ transitionDelay: chipAnim ? `${i * 60}ms` : "0ms" }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="ruins-main-content">
          {/* Removed City of Ashkara title as requested */}
          {/* Add ruins biome visuals and content here */}
        </div>
        <div className="ruins-radar-center">
          <div className="radar-spin-wrapper">
            <img src="/images/radar.png" alt="Purple Radar" className="ruins-radar-img" draggable="false" />
            <div className="radar-sweep"></div>
            {dots.slice(0, radarDots).map((dot, i) => (
              <span
                key={i}
                className="radar-dot"
                style={{ left: `${dot.left}%`, top: `${dot.top}%` }}
              />
            ))}
          </div>
        </div>

      </div>
      <div className="ruins-overlay ruins-vignette" aria-hidden="true"></div>
      <div className="ruins-overlay ruins-color-wash" aria-hidden="true"></div>
      <img
        src="/images/city.png"
        alt="City silhouette"
        className="ruins-city-img"
        aria-hidden="true"
      />
    </section>
  );
};

export default Ruins;
