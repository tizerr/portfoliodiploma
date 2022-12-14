import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import classnames from 'classnames'
import {ThemeToggler} from "../ThemeToggler/ThemeToggler";

function Header(props) {

	const isOnIndex = props.path === "/"

	return <>
		<header className={styles.header}>
			<nav>
				<Link to="/" className={classnames(styles.link, {[styles.disabled]:!isOnIndex})}>
					О нас
				</Link>
				<Link to="/projects" className={classnames(styles.link, {[styles.disabled]:isOnIndex})}>
					Проекты
				</Link>
			</nav>
			<ThemeToggler/>
		</header>
	 </>
}

export default Header