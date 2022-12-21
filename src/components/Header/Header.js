import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import classnames from "classnames";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";

import { Menu } from "../Menu/Menu";
import { useState } from "react";

import { LanguageSelect } from "../LanguageButton/LanguageSelect";
import { FormattedMessage } from "react-intl";


function Header(props) {
  const isOnIndex = props.path === "/";
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <nav>

          <div className={classnames(styles.burger_btn)} onClick={() => setMenuActive(!menuActive)}>
            <span/>
          </div>
          
          {/* <Link
            to="/"
            className={classnames(styles.link, {
              [styles.disabled]: !isOnIndex,
            })}
          >
            <FormattedMessage id="nav.aboutUs"/>
          </Link>
          <Link
            to="/projects"
            className={classnames(styles.link, {
              [styles.disabled]: isOnIndex,
            })}
          >

            Проекты
          </Link> */}
        </nav>
        <ThemeToggler/>
        <Menu active={menuActive} setActive={setMenuActive} OnIndex={isOnIndex}/>

            <FormattedMessage id="nav.projects"/>
          </Link>
        </nav>
        <div className={styles.controlsGroup}>
          <LanguageSelect/>
          <ThemeToggler/>
        </div>

      </header>
    </>
  );
}

export default Header;
