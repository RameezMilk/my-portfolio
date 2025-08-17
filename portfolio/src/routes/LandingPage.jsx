
import React from "react";

import Landing from "../components/Landing";
import Mission from "../components/Mission";
import StickyMapButton from "../components/StickyMapButton";
import MapModal from "../components/MapModal";
import { useState } from "react";

const LandingPage = () => {
	const [mapOpen, setMapOpen] = useState(false);
	return (
		<>
			<Landing />
			<Mission />
			<StickyMapButton onClick={() => setMapOpen(true)} />
			<MapModal open={mapOpen} onClose={() => setMapOpen(false)} />
		</>
	);
};

export default LandingPage;
