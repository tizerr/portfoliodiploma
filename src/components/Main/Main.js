import Header from "../Header/Header.js";
import Team from "../Team/Team.jsx";
import { MapSection } from "../MapSection/MapSection";
import { YMaps } from "@pbe/react-yandex-maps";
import styles from "./styles.module.css";
import React, { Suspense } from 'react'
import LazyLoading from '../LazyLoading/LazyLoading.jsx'

function Main(props) {
  return (
    <>
      <Header path="/" />
      <Suspense fallback={<LazyLoading/>}>
        <Team />
      </Suspense>
    </>
  );
}

/*
      <Suspense fallback={<LazyLoading/>}>
        <div className={styles.block}>
          <YMaps>
            <Team />
            <MapSection width="100%" />
          </YMaps>
        </div>
      </Suspense>*/

export default Main;
