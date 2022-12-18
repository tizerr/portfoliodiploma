import styles from "./styles.module.css";
import { LanguageContext } from "../LanguageWrapper/LanguageWrapper";

export const LanguageSelect = () => {
  return (
        <LanguageContext.Consumer>
          {({se}) => (
            <select className={styles.select} onChange={(e) => changeLanguage(e.target.value)}>
              <option value="ru">ru</option>
              <option value="en">en</option>
            </select>
          )}
        </LanguageContext.Consumer>
  )
};