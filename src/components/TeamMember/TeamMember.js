import styles from "./styles.module.css"

function get_item(val, id) {
	return <li className={styles.helpText} key={id}>{val}</li>
}

function TeamMember(props) {
	return <>
		<div className={styles.block}>
			<div className={styles.imgBlock}>
				<img src={props.imgPath} alt=""/>
			</div>
			<h6 className={styles.title}>
				{props.fullName}
				<a href={props.gitHub}><img src="" alt=""/></a>
				<a href={props.telegram}><img src="" alt=""/></a>
			</h6>
			<p className={styles.text}>{props.text}</p>
			<ul className={styles.developmentStack}>
				{props.devStack.map(get_item)}
			</ul>
		</div>	
	</>
}

export default TeamMember