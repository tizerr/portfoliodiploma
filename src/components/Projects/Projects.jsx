import Header from '../Header/Header.js'
import Project from '../Projects/Projects.jsx'
import projects from '../../mock/projects.js'
import styles from './styles.module.css'

function getItem(val, key) {

	return <Project
        previewPath={val['preview-path']}
        name={val['name']}
        developers={val['developers']}
        kind={val['kind']}
        description={val['description']}
        developmentStack={val['development-stack']}
      />
}

function Projects(props) {
	console.log(projects)
	return <>
			<Header path="/projects"/>
			<div className={styles.block}>
				{projects.map(getItem)}
			</div>	
		</>
}

export default Projects