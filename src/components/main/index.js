import { useContext, useEffect } from "react";
import { SigninContext } from "@/context/Signin";
import { PanelAsideContext } from "@/context/panel_aside";
import styles from "./index.module.css";
import { Signin } from "../signin";
import { PanelTicket } from "../panel_ticket";
import { PanelNavbar } from "../panel_navbar";
import { PanelAside } from "../panel_aside";
import { PanelResumen } from "../panel_resumen";

export default function Main() {
	const { isSignin } = useContext(SigninContext);
	const { isAsideActive, setAsideActive } = useContext(PanelAsideContext);
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
	if (!isSignin) return <Signin />;
	return (
		<>
			<PanelNavbar />
			<main className={styles.main}>
				{isAsideActive && <PanelAside />}
				<PanelTicket />
				<PanelResumen />
			</main>
		</>
	);
}
