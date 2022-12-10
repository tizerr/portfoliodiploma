import styles from "./styles.module.css"
import classNames from "classnames";

export const FooterItem = (props) => {
    let person = props.info;
    return <article className={classNames(styles.article)}>
        <p className={classNames(styles.namePar)}>{person.name}</p>
        <p><span className={classNames(styles.secondaryText)}>Телефон:</span> {person.tel}</p>
        <p><span className={classNames(styles.secondaryText)}>Почта:</span> {person.email}</p>
        <p><span className={classNames(styles.secondaryText)}>ГитХаб:</span> {person.social.git}</p>
        <p><span className={classNames(styles.secondaryText)}>Телеграм:</span> {person.social.telegram}</p>
    </article>
}