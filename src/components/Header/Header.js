import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import classnames from "classnames";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { LanguageSelect } from "../LanguageButton/LanguageSelect";
import { FormattedMessage } from "react-intl";

function Header(props) {
  const isOnIndex = props.path === "/";

  return (
    <>
      <header className={styles.header}>
        <nav>
          <Link
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
            <FormattedMessage id="nav.projects"/>
          </Link>
        </nav>
        <ThemeToggler/>
        <LanguageSelect/>
      </header>
    </>
  );
}

export default Header;
