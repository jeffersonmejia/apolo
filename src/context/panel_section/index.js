import { createContext, useState } from "react";

const PanelSectionContext = createContext();

const PanelSectionProvider = ({ children }) => {
	const [isTicket, setTicket] = useState(true);
	const [isPackage, setPackage] = useState(false);
	const [isReport, setReport] = useState(false);

	const handleSection = ({ currentTarget }) => {
		let { value } = currentTarget;
		switch (value) {
			case 0: {
				setTicket(true);
				if (isPackage) setPackage(false);
				if (isReport) setReport(false);
				break;
			}
			case 1: {
				setPackage(true);
				if (isTicket) setTicket(false);
				if (isReport) setReport(false);
				break;
			}
			case 2: {
				setReport(true);
				if (isTicket) setTicket(false);
				if (isPackage) setPackage(false);
				break;
			}
		}
	};

	const data = {
		handleSection,
		isTicket,
		isPackage,
		isReport,
	};

	return (
		<PanelSectionContext.Provider value={data}>{children}</PanelSectionContext.Provider>
	);
};

export { PanelSectionContext, PanelSectionProvider };
