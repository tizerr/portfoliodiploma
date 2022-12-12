import Project from '../Project/Project.jsx'
import Header from '../Header/Header.js'
import { readyWork } from '../../mock/readyWork.js'
import styles from './styles.module.css'

function getItem(val, key) {

	return <Project
		key={key}
        previewPath={val['previewPath']}
        name={val['name']}
        developers={val['author']}
        kind={val['purpose']}
        description={val['description']}
        developmentStack={val['technology']}
      />
}

function Projects(props) {
	return <>
			<Header path='projects'/>
			<div className={styles.block}>
				{readyWork.map(getItem)}
			</div>	
		</>
}

export default Projects