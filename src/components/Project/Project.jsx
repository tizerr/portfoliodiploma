import styles from "./styles.module.css";
import { v4 } from "uuid";

function Project(props) {
  return (
    <>
      <div className={styles.block}>
        <div className={styles.imgBlock}>
          <img src={props.previewPath} alt="" />
        </div>
        <h2 className={styles.title}>{props.name}</h2>
        <div className={styles.developers}>
          <ul>
            {props.developers.map((val) => {
              return (
                <li className={styles.subTitle} key={v4()}>
                  {val}
                </li>
              );
            })}
          </ul>
          <span>•</span>
          <p>{props.kind}</p>
        </div>
        <p className={styles.text}>{props.description}</p>
        <div>
          <ul className={styles.developmentStack}>
          {props.developmentStack.map((val) => {
            return (
              <li className={styles.helpText} key={v4()}>
                {val}
              </li>
            );
          })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Project;
