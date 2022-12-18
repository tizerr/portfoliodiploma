import styles from "./styles.module.css";
import classNames from "classnames";

export const FooterItem = (props) => {
  let person = props.info;
  return (
    <article className={classNames(styles.article)}>
      <p className={classNames(styles.namePar)}>{person.name}</p>
      <p>
        <span className={classNames(styles.secondaryText)}>Телефон:</span>{" "}
        {person.tel}
      </p>
      <p>
        <span className={classNames(styles.secondaryText)}>Почта:</span>{" "}
        {person.social.email}
      </p>
      <p>
        <span className={classNames(styles.secondaryText)}>ГитХаб:</span>{" "}
        <a href={person.links.git}>{person.social.git}</a>
      </p>
      <p>
        <span className={classNames(styles.secondaryText)}>Телеграм:</span>{" "}
        <a href={person.links.telegram}>{person.social.telegram}</a>
      </p>
    </article>
  );
};
