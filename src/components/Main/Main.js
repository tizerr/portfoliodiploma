import Header from '../Header/Header.js'
import Team from '../Team/Team.js'
import {MapSection} from "../MapSection/MapSection";
import {YMaps} from "@pbe/react-yandex-maps";
<<<<<<< HEAD
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
=======
import styles from './styles.module.css'

function Main(props) {
	return <> 
			<Header path="/"/> 
			<div className={styles.mainBlock}>
				<YMaps>
	            	<Team/>
	            	<MapSection width='75%'/>
        		</YMaps>
        	</div>
	</>
>>>>>>> bd2be4dc25426ba8457bffec4ad85b372514fe13
}

export  default Main