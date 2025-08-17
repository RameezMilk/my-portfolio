import React from "react";

import Ruins from "../components/Ruins";
import StickyMapButton from "../components/StickyMapButton";
import MapModal from "../components/MapModal";
import { useState } from "react";

const RuinsPage = () => {
	const [mapOpen, setMapOpen] = useState(false);
	return (
		<>
			<Ruins />
			<StickyMapButton onClick={() => setMapOpen(true)} />
			<MapModal open={mapOpen} onClose={() => setMapOpen(false)} />
		</>
	);
};

export default RuinsPage;
