import Project from '../Project/Project.jsx'
import Header from '../Header/Header.js'
import { readyWork } from '../../mock/readyWork.js'
import styles from './styles.module.css'
import {v4} from 'uuid';
import { useState } from 'react'

function addWorks(works, count) {
	let visibleWorks = []
	for (let i in works) {
		if (i == count)
			break
		visibleWorks.push(works[i])
	}
	return visibleWorks
}

function Projects(props) {
	const [count, setCount] = useState(2)
	const worksCount = readyWork.length
	const visibleWorks = addWorks(readyWork, count)
	return <>
			<Header path='projects'/>
			<div className={styles.block}>
				{visibleWorks.map((val) => {
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
			<button onClick={() => {setCount(count <= worksCount ? count + 2 : count)}}>Показать еще</button>
		</>
}

export default Projects