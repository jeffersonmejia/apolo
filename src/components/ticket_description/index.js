import { useContext, useEffect, useLayoutEffect, useState } from "react";
import styles from "./index.module.css";
import { DarkModeContext } from "@/context/dark_mode";

function TicketDescription({ status }) {
	const { isDarkMode } = useContext(DarkModeContext);
	const [listStatus, setListStatus] = useState([-1]);
	const theme = !isDarkMode ? styles.light : styles.dark;

	useEffect(() => {
		const list = [];
		for (let p in status) {
			list.push(status[p]);
			setListStatus(list);
		}
	}, []);
	return (
		<div className={`${styles.busDescription} ${theme}`}>
			{listStatus &&
				listStatus.map((el) => (
					<span key={el.code} className={styles[el.class]}>
						{el.name}
					</span>
				))}
		</div>
	);
}
export default TicketDescription;
