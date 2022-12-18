import Slider from "react-slick";
import styles from "./styles.module.css";
import { useRef, useState } from "react";
import TeamMember from "../TeamMember/TeamMember.js";
import slideCards from "../../mock/sliderCards.js";
import nextarr from "../../img/next-arrow.svg";
import prevarr from "../../img/prev-arrow.svg";
import nextarrDark from "../../img/next-arrow-dark.svg";
import prevarrDark from "../../img/prev-arrow-dark.svg";
import { v4 } from "uuid";
import {ThemeContext} from "../ThemeWrapper/ThemeWrapper";

function mod(a, b) {
  if (a >= 0) return a % b;
  else {
    return (b - (-a % b)) % b;
  }
}

function Team(props) {
  const sliderRef = useRef(null);
  const [slide, setSlide] = useState(0);

  function SampleNextArrow(props) {
    const { styles, img_light, img_dark } = props;
    return (
      <>
        <ThemeContext.Consumer>
          {({theme}) => (
            <button
              className={styles.nextBtn + " slick-arrow slick-next"}
              onClick={() => {
                setSlide(mod(slide + 1, slideCards.length / 3));
                sliderRef.current.slickNext();
              }}
            >
              <div className={styles.imgBlock}>
                <img src={theme === 'light' ? img_light : img_dark} alt="" />
              </div>
            </button>
          )}
        </ThemeContext.Consumer>
      </>
    );
  }

  function SamplePrevArrow(props) {
    const { styles, img_light, img_dark } = props;
    return (
      <>
        <ThemeContext.Consumer>
          {({theme}) => (
            <button className={styles.prevBtn}>
              <div
                className={styles.imgBlock}
                onClick={() => {
                  setSlide(mod(slide - 1, slideCards.length / 3));
                  sliderRef.current.slickPrev();
                }}
              >
                <img src={theme === 'light' ? img_light : img_dark} alt="" />
              </div>
            </button>
          )}
        </ThemeContext.Consumer>
      </>
    );
  }

  const sliderConfigs = {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    speed: 200,
    arrows: true,
    infinite: true,
    nextArrow: SampleNextArrow({ styles: styles, img_light: nextarr, img_dark: nextarrDark }),
    prevArrow: SamplePrevArrow({ styles: styles, img_light: prevarr, img_dark: prevarrDark }),
  };

  const segment_pos_and_width = {
    width: `${100 / slideCards.length}%`,

    left: `${(100 * slide) / (slideCards.length)}%`,
  };

  return (
    <div className={styles.slider}>
      <h1 className={styles.title}>Наша команда</h1>
      <Slider {...sliderConfigs} ref={sliderRef}>
        {slideCards.map((obj) => {
          return (
            <TeamMember
              imgPath={obj["photo"]}
              fullName={obj["full-name"]}
              gitHub={obj["gitHub"]}
              telegram={obj["telegram"]}
              text={obj["description"]}
              devStack={obj["dev-stack"]}
              key={v4()}
            />
          );
        })}
      </Slider>
      <div className={styles.line}>
        <div className={styles.segment} style={segment_pos_and_width}></div>
      </div>
    </div>
  );
}

export default Team;