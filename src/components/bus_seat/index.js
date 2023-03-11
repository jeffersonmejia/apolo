import React, { useContext, useEffect, useState } from "react";
import styles from "./index.module.css";
import { DarkModeContext } from "@/context/dark_mode";
import { Modal } from "../modal";

function BusSeat({ el, state }) {
	const [styleState, setStyleState] = useState(null);
	const [currentState, setCurrentState] = useState(null);
	const { isDarkMode } = useContext(DarkModeContext);

	useEffect(() => {
		setCurrentState(state);
		if (state === 1) {
			setStyleState(styles.unavailable);
		} else if (state === 2) {
			setStyleState(styles.reserved);
		} else {
			setCurrentState(0);
		}
	}, []);
	const handleClick = () => {
		if (currentState === 0) {
			setCurrentState(2);
			setStyleState(styles.reserved);
		}
		if (currentState === 1) {
			console.log("wait");
		}
		if (currentState === 2) {
			setCurrentState(0);
			setStyleState(null);
		}
	};
	const theme = !isDarkMode ? styles.light : styles.dark;
	return (
		<span className={`${styleState} ${theme}`} onClick={handleClick}>
			{el}
		</span>
	);
}
export default React.memo(BusSeat);
