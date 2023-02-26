import { useContext } from "react";
import { SigninContext } from "@/context/Signin";
import { PanelAsideContext } from "@/context/panel_aside";
import styles from "./index.module.css";
import { Signin } from "../signin";
import { PanelTicket } from "../panel_ticket";
import { PanelNavbar } from "../panel_navbar";
import { PanelAside } from "../panel_aside";

export default function Main() {
	const { isSignin } = useContext(SigninContext);
	const { isAsideActive } = useContext(PanelAsideContext);

	return (
		<>
			{!isSignin && <Signin />}
			{isSignin && <PanelNavbar />}
			<main className={styles.main}>
				{isSignin && isAsideActive && <PanelAside />}
				{isSignin && <PanelTicket />}
			</main>
		</>
	);
}
