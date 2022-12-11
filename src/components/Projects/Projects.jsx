<<<<<<< HEAD
import Header from '../Header/Header.js'

function Projects(props) {
	return <Header path="/projects"/>
=======
import Project from '../Project/Project.jsx'
import Header from '../Header/Header.js'
import projects from '../../mock/projects.js'
import styles from './styles.module.css'

function getItem(val, key) {

	return <Project
		key={key}
        previewPath={val['preview-path']}
        name={val['name']}
        developers={val['developers']}
        kind={val['kind']}
        description={val['description']}
        developmentStack={val['development-stack']}
      />
}

function Projects(props) {
	return <>
			<Header path='projects'/>
			<div className={styles.block}>
				{projects.map(getItem)}
			</div>	
		</>
>>>>>>> bd2be4dc25426ba8457bffec4ad85b372514fe13
}

export default Projects