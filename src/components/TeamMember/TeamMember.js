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
				<a className={styles.socialNetworks} href={props.gitHub}>
					<div className={styles.imgBlock}>
						<img src="img/github-icon.svg" alt=""/>	
					</div>
				</a>
				<a className={styles.socialNetworks} href={props.telegram}>
					<div className={styles.imgBlock}>				
						<img src="img/telegram-icon.svg" alt=""/>
					</div>
				</a>
			</h6>
			<p className={styles.text}>{props.text}</p>
			<ul className={styles.developmentStack}>
				{props.devStack.map(get_item)}
			</ul>
		</div>	
	</>
}

export default TeamMember