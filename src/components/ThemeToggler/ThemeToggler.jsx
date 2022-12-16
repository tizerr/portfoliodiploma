import styles from "./styles.module.css";
import classnames from "classnames";
import {ThemeContext} from "../ThemeWrapper/ThemeWrapper";

export const ThemeToggler = () => {

  return (
      <ThemeContext.Consumer>
        {({changeTheme, theme}) => (
          <button className={styles.btn} onClick={() => changeTheme(theme)}>
            <img id='btn_sun' className={styles.btn__sun} src="./img/sun-icon.svg" alt=""/>
            <img id='btn_moon' className={classnames(styles.btn__moon, styles.button__icon_disabled)}
                 src="./img/moon-icon.svg" alt=""/>
          </button>
        )}
      </ThemeContext.Consumer>
  );
};
