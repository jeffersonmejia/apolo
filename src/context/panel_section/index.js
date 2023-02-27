import { createContext, useState } from "react";

const PanelSectionContext = createContext();

const PanelSectionProvider = ({ children }) => {
	const [isTicketActive, setTicketActive] = useState(true);
	const [isPackageActive, setPackageActive] = useState(false);
	const [isReportActive, setReportActive] = useState(false);

	const handleTicketActive = () => {
		if (isTicketActive) return;
		setTicketActive(true);
		setPackageActive(false);
		setReportActive(false);
	};

	const handlePackageActive = () => {
		if (isPackageActive) return;
		setPackageActive(true);
		setTicketActive(false);
		setReportActive(false);
	};

	const handleReportActive = () => {
		if (isReportActive) return;
		setReportActive(true);
		setTicketActive(false);
		setPackageActive(false);
	};

	const data = {
		isTicketActive,
		isPackageActive,
		isReportActive,
		handleTicketActive,
		handlePackageActive,
		handleReportActive,
	};

	return (
		<PanelSectionContext.Provider value={data}>{children}</PanelSectionContext.Provider>
	);
};

export { PanelSectionContext, PanelSectionProvider };
