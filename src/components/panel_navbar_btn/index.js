import styles from "./index.module.css";
import { SigninContext } from "@/context/signin";
import { UserProfile } from "../user_profile";
import { DarkModeContext } from "@/context/dark_mode";
import { useContext, useState } from "react";
import { SupportContext } from "@/context/support";
import { PanelNavbarAccount } from "../panel_navbar_account";

export function PanelNavbarBtn() {
	const [isModal, setModal] = useState(false);
	const [isAccount, setAccount] = useState(false);
	const handleModal = () => {
		setModal(isModal ? false : true);
		setAccount(false);
	};
	const { isSignin } = useContext(SigninContext);
	const { handleDarkMode, isDarkMode } = useContext(DarkModeContext);
	const { isSupport } = useContext(SupportContext);

	const handleAccount = () => {
		setAccount(isAccount ? false : true);
	};

	const theme = !isDarkMode ? styles.light : styles.dark;
	const dark_btn = !isDarkMode ? "light_mode" : "dark_mode";
	const material = "material-symbols-outlined";
	return (
		<div className={`${styles.navButtons} ${theme}`}>
			{isSupport && <span className={material}>notifications</span>}
			<span className={material} onClick={handleDarkMode}>
				{dark_btn}
			</span>

			{isSignin && (
				<>
					<span className={material} onClick={handleAccount}>
						admin_panel_settings
					</span>
					{isAccount && (
						<PanelNavbarAccount setAccount={setAccount} handleModal={handleModal} />
					)}
				</>
			)}
			{isModal && <UserProfile handleClick={handleModal} />}
		</div>
	);
}
