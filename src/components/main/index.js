import { useContext, useEffect } from "react";
import { SigninContext } from "@/context/signin";
import { PanelAsideContext } from "@/context/panel_aside";
import { PanelSectionContext } from "@/context/panel_section";
import styles from "./index.module.css";
import { Signin } from "../signin";
import { PanelTicket } from "../panel_ticket";
import { PanelPackage } from "../panel_package";
import { PanelNavbar } from "../panel_navbar";
import { PanelAside } from "../panel_aside";
import { PanelResumen } from "../panel_resumen";
import { PanelReport } from "../panel_report";
import { DarkModeContext } from "@/context/dark_mode";
export default function Main() {
	const { isDarkMode } = useContext(DarkModeContext);
	const { isSignin, data } = useContext(SigninContext);

	const { isAsideActive, setAsideActive } = useContext(PanelAsideContext);
	const { isTicketActive, isPackageActive, isReportActive } =
		useContext(PanelSectionContext);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 600) {
				setAsideActive(true);
			} else {
				setAsideActive(false);
			}
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<>
			<PanelNavbar />
			{!isSignin && <Signin />}
			{isSignin && (
				<main className={`${styles.main} ${isDarkMode ? "dark" : ""}`}>
					{isAsideActive && <PanelAside />}
					{data && isTicketActive && <PanelTicket />}
					{isPackageActive && <PanelPackage />}
					{!isReportActive && <PanelResumen />}
					{isReportActive && <PanelReport></PanelReport>}
				</main>
			)}
		</>
	);
}
