import styles from './styles.module.css'

function LazyLoading(props) {
	return <div className={styles.loaderBlock}><span className={styles.loader}></span></div>
}

export default LazyLoading