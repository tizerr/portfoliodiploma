import styles from './styles.module.css'
import classnames from 'classnames'

function getDevelopers(val, key) {
	return <li className={styles.subTitle} key={key}>{val}</li>
}

function getDevelopmentStack(val, key) {
	return <li className={styles.helpText} key={key}>{val}</li>	
}

function Project(props) {

	return <><div className={styles.block}>
		<div className={styles.imgBlock}>
			<img src={props.previewPath} alt=""/>
		</div>
		<h2 className={styles.title}>{props.name}</h2>
		<div className={styles.developers}>
			<ul>
				 {props.developers.map(getDevelopers)}
			</ul>
			<span>•</span>
			<p>{props.kind}</p>
		</div>
		<p className={styles.text}>{props.description}</p>
		<ul className={styles.developmentStack}>
			{props.developmentStack.map(getDevelopmentStack)}
		</ul>
	</div>
	</>
}

export default Project