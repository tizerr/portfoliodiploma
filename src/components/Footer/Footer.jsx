import styles from "./styles.module.css";
import classNames from "classnames";
import { footerMembers } from "../../mock/footerMembers";
import { FooterItem } from "../FooterItem/FooterItem";
import { FeedbackModul } from "../FeedbackModul/FeedbackModul";
import telegram from '../../img/telegram-icon.svg'
import github from '../../img/github-icon.svg'
import mail from '../../img/mail_icon.svg'

function Footer(props) {
  console.log(footerMembers);
  return (
    <footer className={classNames(styles.footer)}>
      <div>
        <p>Арбузики</p>
        <div className={styles.links}>
          <a href="">
            <div className={styles.imgBlock}>
              <img src={telegram} alt=""/>
            </div>
          </a>
          <a href="https://github.com/Salavat698/portfoliodiploma">
            <div className={styles.imgBlock}>
              <img src={github} alt=""/>
            </div>
          </a>
          <a href="">
            <div className={styles.imgBlock}>
              <img src={mail} alt=""/>
            </div>
          </a>
          <a href="https://ru.yougile.com/team/ce40cfced433/%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0">
            YG
          </a>
        </div>
      </div>
      <div className={styles.feedback}>
        <button className={styles.egg}>Посхалка</button>
        <FeedbackModul/>
      </div>
            {/*{footerMembers.map((person, key) => (
        <FooterItem key={key} info={person} />
      ))}*/}
    </footer>
  );
}

export default Footer;
