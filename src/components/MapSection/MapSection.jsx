import styles from "./styles.module.css";
import { Map, Placemark } from "@pbe/react-yandex-maps";
import { useContext, useEffect, useState } from "react";
import { membersEn, membersRU } from "../../mock/mapMembers";
import placemark from "../../img/placemark.svg";
import placemarkActive from "../../img/placemarkActive.svg";
import placemarkDark from "../../img/placemark-dark.svg";
import placemarkActiveDark from "../../img/placemarkActive-dark.svg";

import { FeedbackModule } from "../FeedbackModule/FeedbackModule";
import classNames from "classnames";
import { ThemeContext } from "../ThemeWrapper/ThemeWrapper";
import { FormattedMessage } from "react-intl";
import { LanguageContext } from "../LanguageWrapper/LanguageWrapper";
import { slideCardsEn, slideCardsRu } from "../../mock/sliderCards";

export const MapSection = (props) => {
  const members = (useContext(LanguageContext).locale === 'en') ? membersEn : membersRU
  const [activeMember, setActiveMember] = useState(members[0].id);

  function click(e, key) {
    if (activeMember === key) return;
    setActiveMember(key);
  }

  const [map, setMap] = useState();

  const resizeMap = (map) => {
    if (!map) return;
    map.style.height = (map.offsetWidth * 0.6).toString() + "px";
  };

  useEffect(() => {
    resizeMap(map);
    window.addEventListener("resize", () => resizeMap(map));
  }, [map]);

  return (
    <section className={styles.mapSection}>
      <div className={classNames(styles.title, styles.transfer__line)}>
        <h2 className={styles.title__name}><FormattedMessage id="map.title"/></h2>
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
                      src={m.id === activeMember ? (theme === 'light' ? placemarkActive : placemarkActiveDark) : (theme === 'light' ? placemark : placemarkDark)}
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
              center: [55.683147, 42.180271],
              zoom: 6,
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
                  iconImageHref: `${
                    m.id === activeMember ? placemarkActive : placemark
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
