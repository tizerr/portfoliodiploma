import Project from "../Project/Project.jsx";
import Header from "../Header/Header.js";
import { readyWork } from "../../mock/readyWork.js";
import styles from "./styles.module.css";
import {v4} from 'uuid';
// function getItem(val, key) {
//   return (
//     <Project
//       key={key}
//       previewPath={val["previewPath"]}
//       name={val["name"]}
//       developers={val["author"]}
//       kind={val["purpose"]}
//       description={val["description"]}
//       developmentStack={val["technology"]}
//     />
//   );
// }

function Projects(props) {
  return (
    <>
      <Header path="projects" />
      <div className={styles.block}>
        {readyWork.map((item) => {
          return (
            <Project
              key={v4()}
              previewPath={item["previewPath"]}
              name={item["name"]}
              developers={item["author"]}
              kind={item["purpose"]}
              description={item["description"]}
              developmentStack={item["technology"]}
            />
          );
        })}
      </div>
    </>
  );
}

export default Projects;
