import styles from "./styles.module.css";
import classnames from "classnames";
import {ThemeContext} from "../ThemeWrapper/ThemeWrapper";
import moon_icon from '../../img/moon-icon.svg'
import sun_icon from '../../img/sun-icon.svg'

export const ThemeToggler = () => {
  return (
    <ThemeContext.Consumer>
      {({changeTheme, theme}) => (
        <button className={styles.btn} onClick={() => changeTheme(theme)}>
          <img id='btn_sun' className={theme === 'dark' ? classnames(styles.btn__sun, styles.hidden) : styles.btn__sun} src={sun_icon} alt=""/>
          <img id='btn_moon' className={theme === 'light' ? classnames(styles.btn__moon, styles.hidden): styles.btn__moon}
               src={moon_icon} alt=""/>
        </button>
      )}
    </ThemeContext.Consumer>
  );
};