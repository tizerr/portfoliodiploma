import styles from "./styles.module.css";
import classnames from "classnames";
import {ThemeWrapper} from "../ThemeWrapper/ThemeWrapper";

export const ThemeToggler = () => {

  return (
      <ThemeWrapper.Consumer>
        {({ changeTheme }) => (
          <button className={styles.btn} onClick={changeTheme}>
            <img id='btn_sun' className={styles.btn__sun} src="./img/sun-icon.svg" alt=""/>
            <img id='btn_moon' className={classnames(styles.btn__moon, styles.button__icon_disabled)} src="./img/moon-icon.svg" alt=""/>
          </button>
        )}
      </ThemeWrapper.Consumer>
  );
};
