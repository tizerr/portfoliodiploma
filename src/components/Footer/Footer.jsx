import styles from "./styles.module.css";
import classNames from "classnames";
import { footerMembers } from "../../mock/footerMembers";
import { FeedbackModule } from "../FeedbackModule/FeedbackModule";
import telegram from '../../img/telegram-icon-white.svg'
import github from '../../img/github-icon-white.svg'
import mail from '../../img/mail_icon-white.svg'
import { FormattedMessage } from "react-intl";

function Footer(props) {
  console.log(footerMembers);
  return (
    <footer className={classNames(styles.footer)}>
      <div>
        <p className={styles.name}><FormattedMessage id="footer.name"/></p>
        <div className={styles.links}>
          <a className={styles.link} href="">
            <div className={styles.imgBlock}>
              <img src={telegram} alt=""/>
            </div>
          </a>
          <a className={styles.link} href="https://github.com/Salavat698/portfoliodiploma">
            <div className={styles.imgBlock}>
              <img src={github} alt=""/>
            </div>
          </a>
          <a className={styles.link} href="">
            <div className={styles.imgBlock}>
              <img src={mail} alt=""/>
            </div>
          </a>
          <a className={styles.link} href="https://ru.yougile.com/team/ce40cfced433/%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0">
            YG
          </a>
        </div>
      </div>
      <FeedbackModule/>
    </footer>
  );
}

export default Footer;
