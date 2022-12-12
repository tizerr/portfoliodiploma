import styles from "./styles.module.css"
import classNames from "classnames";
import { footerMembers } from "../../mock/footerMembers"
import { FooterItem } from "../FooterItem/FooterItem"

function Footer(props) {
    console.log(footerMembers);
    return <footer className={classNames(styles.footer)}>
        {footerMembers.map((person, key) => <FooterItem key={key} info={person}/>)}
    </footer>
}

export default Footer