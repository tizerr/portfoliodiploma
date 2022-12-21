import Project from "../Project/Project.jsx";
import Header from "../Header/Header.js";
import LazyLoading from "../LazyLoading/LazyLoading.jsx"
import { readyWork } from "../../mock/readyWork.js";
import styles from "./styles.module.css";
import { v4 } from "uuid";
import { useState, Suspense } from "react";
import classnames from "classnames";
import search from "../../img/search-icon.svg"

function addWorks(works, count) {
  let visibleWorks = [];
  for (let i in works) {
    if (Number(i) === count) break;
    visibleWorks.push(works[i]);
  }
  return visibleWorks;
}
function sortWorsk(works, v) {
  
}

function Projects(props) {
  const [count, setCount] = useState(2);
  const worksCount = readyWork.length;
  const visibleWorks = addWorks(readyWork, count);
  return (
    <>
      <Header path="projects" />
      <Suspense fallback={<LazyLoading/>}>
      <div className={styles.block}>
      <div className={styles.projectsHeader}>
        <h2 className={styles.title}>Наши проекты</h2>
        <div className={styles.searchForm}>
          <input className={styles.search} id="search" type="text" onChange={(e) => {console.log(e.target.value)}}/>
          <label htmlFor="search">
            <div className={styles.imgBlock}>
              <img src={search} alt=""/>
            </div>
          </label>
        </div>
      </div>
      <div className={styles.prjectsBlock}>
        {visibleWorks.map((val) => {
          return (
            <Project
              key={v4()}
              previewPath={val["previewPath"]}
              name={val["name"]}
              developers={val["author"]}
              kind={val["purpose"]}
              description={val["description"]}
              developmentStack={val["technology"]}
            />
          );
        })}
      </div>
      <button
        className={classnames(styles.showMoreBtn, {[styles.hideBtn]:count >= worksCount})}
        onClick={() => {
          setCount(count <= worksCount ? count + 2 : count);
        }}
      >
        Показать еще
      </button>
      </div>
      </Suspense>
    </>
  );

  // import Project from "../Project/Project.jsx";
  // import Header from "../Header/Header.js";
  // import { readyWork } from "../../mock/readyWork.js";
  // import styles from "./styles.module.css";
  // import {v4} from 'uuid';
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

  // function Projects(props) {
  //   return (
  //     <>
  //       <Header path="projects" />
  //       <div className={styles.block}>
  //         {readyWork.map((item) => {
  //           return (
  //             <Project
  //               key={v4()}
  //               previewPath={item["previewPath"]}
  //               name={item["name"]}
  //               developers={item["author"]}
  //               kind={item["purpose"]}
  //               description={item["description"]}
  //               developmentStack={item["technology"]}
  //             />
  //           );
  //         })}
  //       </div>
  //     </>
  //   );
}

export default Projects;
