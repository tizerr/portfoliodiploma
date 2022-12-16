import Header from '../Header/Header.js'
import Team from '../Team/Team.js'
import {MapSection} from "../MapSection/MapSection";
import {YMaps} from "@pbe/react-yandex-maps";
import styles from './styles.module.css'
import {ThemeContext} from "../ThemeWrapper/ThemeWrapper";

function Main(props) {
	return (
		<>
			<Header path="/"/> 
			<div className={styles.mainBlock}>
				<YMaps>
					<Team/>
					<MapSection width='100%'/>
				</YMaps>
			</div>
		</>
	)
}

export  default Main