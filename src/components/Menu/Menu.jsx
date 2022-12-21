import styles from "./styles.module.css";
import classnames from "classnames";
import { Link } from "react-router-dom";

export const Menu = ({active, setActive, OnIndex}) => {
    const isOnIndex = OnIndex;

    return <div className={active ? classnames(styles.menu) : classnames(styles.menu, styles.active)}>
        <ul>
            <Link
                to="/"
                className={classnames(styles.link, {
                [styles.disabled]: !isOnIndex,
                })}
            >
                О нас
            </Link>
        </ul>
        <ul>
            <Link
                to="/projects"
                className={classnames(styles.link, {
                [styles.disabled]: isOnIndex,
                })}
            >
                Проекты
            </Link>
        </ul>
    </div>
}