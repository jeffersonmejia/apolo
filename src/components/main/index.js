import { useContext, useEffect, useState } from "react";
import styles from "./index.module.css";
import { SigninContext } from "@/context/signin";
import { PanelAsideContext } from "@/context/panel_aside";
import { PanelSectionContext } from "@/context/panel_section";
import { DarkModeContext } from "@/context/dark_mode";
import { Signin } from "../signin";
import { PanelTicket } from "../panel_ticket";
import { PanelPackage } from "../panel_package";
import { PanelNavbar } from "../panel_navbar";
import { PanelAside } from "../panel_aside";
import { PanelResumen } from "../panel_resumen";
import { PanelReport } from "../panel_report";
import SystemSupport from "../system_support";
import { TravelTicketProvider } from "@/context/travel_ticket";

export default function Main() {
	const { isDarkMode, setDarkMode } = useContext(DarkModeContext);
	const { isSignin, data, error } = useContext(SigninContext);
	const { isAsideActive, setAsideActive } = useContext(PanelAsideContext);
	const { isTicket, isPackage, isReport } = useContext(PanelSectionContext);

	const handleResize = () => {
		if (window.innerWidth >= 600) {
			setAsideActive(true);
		} else {
			setAsideActive(false);
		}
	};
	useEffect(() => {
		setDarkMode(Boolean(JSON.parse(localStorage.getItem("dark"))));
		handleResize();
	}, []);

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			document.removeEventListener("DOMContentLoaded", handleResize);
		};
	}, [window.innerWidth, data]);

	const theme = !isDarkMode ? styles.light : styles.dark;
	const support = error ? styles.error : "";
	const ticket_section = isTicket ? styles.ticket : "";
	return (
		<>
			<PanelNavbar />
			{!isSignin && <Signin />}
			{isSignin && (
				<TravelTicketProvider>
					<main className={`${styles.main} ${theme} ${support} ${ticket_section}`}>
						{isAsideActive && <PanelAside />}
						{data && isTicket && <PanelTicket />}
						{!data && isTicket && <SystemSupport />}
						{isPackage && <PanelPackage />}
						{!isReport && data && <PanelResumen />}
						{isReport && <PanelReport></PanelReport>}
					</main>
				</TravelTicketProvider>
			)}
		</>
	);
}
