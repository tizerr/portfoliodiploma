import styles from "./styles.module.css";
import { LanguageContext } from "../LanguageWrapper/LanguageWrapper";

export const LanguageSelect = () => {
  return (
        <LanguageContext.Consumer>
          {({selectLanguage}) => (
            <select className={styles.select} onChange={(e) => selectLanguage(e.target.options[e.target.selectedIndex].value)}>
              <option value="ru">ru</option>
              <option value="en">en</option>
            </select>
          )}
        </LanguageContext.Consumer>
  )
};