import styles from "./styles.module.css";
import { Map, Placemark } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";
import { members } from "../../mock/mapMembers";
import {ThemeContext} from "../ThemeWrapper/ThemeWrapper";

export const MapSection = (props) => {
  const [activeMember, setActiveMember] = useState(members[0].id);

  function click(e, key) {
    if (activeMember === key) return;
    setActiveMember(key);
  }

  const [map, setMap] = useState();

  const resizeMap = (map) => {
    if (!map) return;
    map.style.height = (map.offsetWidth * 0.7).toString() + "px";
  };

  useEffect(() => {
    resizeMap(map);
    window.addEventListener("resize", () => resizeMap(map));
  }, [map]);

  return (
    <section className={styles.mapSection}>
      <div className={styles.title}>
        <h2 className={styles.title__name}>Контактная информация</h2>
        //Feedback
      </div>
      <div className={styles.container}>
        <ul className={styles.list}>
          {members.map((m) => (
            <li
              key={m.id}
              onClick={(event) => click(event, m.id)}
              className={styles.listItem}
            >
              <h3 className={styles.listItem__name}>{m.name}</h3>
              <div
                className={`${styles.listItem__address}${
                  m.id === activeMember
                    ? ` ${styles.listItem__address_active}`
                    : ""
                }`}
              >
                <ThemeContext.Consumer>
                  {({theme}) => (
                      <img
                          className={styles.listItem__icon}
                          src={`./img/${
                              m.id === activeMember
                                  ? `placemarkActive${theme === 'light' ? '' : '_dark-theme'}.svg`
                                  : `placemark${theme === 'light' ? '' : '_dark-theme'}.svg`
                          }`}
                          alt=""
                      />
                  )}
                </ThemeContext.Consumer>
                <div>{m.address.text}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.mapDiv} ref={setMap}>
          <Map
            defaultState={{
              center: [55.751574, 37.573856],
              zoom: 9,
              controls: []
            }}
            width="100%"
            height="100%"
          >
            {members.map((m) => (
              <Placemark
                key={m.id}
                geometry={m.address.geocode}
                options={{
                  iconLayout: "default#image",
                  iconImageSize: [50, 50],
                  iconImageHref: `./img/${
                    m.id === activeMember
                      ? "placemarkActive.svg"
                      : "placemark.svg"
                  }`
                }}
              />
            ))}
          </Map>
        </div>
      </div>
    </section>
  );
};
