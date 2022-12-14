import Project from '../Project/Project.jsx'
import Header from '../Header/Header.js'
import { readyWork } from '../../mock/readyWork.js'
import styles from './styles.module.css'
import {v4} from 'uuid';

function Projects(props) {
	return <>
			<Header path='projects'/>
			<div className={styles.block}>
				{readyWork.map((val) => {
					return <Project
								key={v4()}
        						previewPath={val['previewPath']}
        						name={val['name']}
        						developers={val['author']}
        						kind={val['purpose']}
        						description={val['description']}
        						developmentStack={val['technology']}/>
				})}
			</div>	
		</>
}

export default Projects