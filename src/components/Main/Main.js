import Header from '../Header/Header.js'
import Team from '../Team/Team.js'
import {MapSection} from "../MapSection/MapSection";
import {YMaps} from "@pbe/react-yandex-maps";
import styles from "./styles.module.css"

function Main(props) {
	return <> 
			<Header path="/"/>
			<div className={styles.block}>
     			<YMaps>
        			<Team/>
        		<MapSection width='75%'/>
      			</YMaps>				
			</div>
			</>
}

export  default Main