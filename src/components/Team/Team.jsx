import Slider from "react-slick";
import styles from "./styles.module.css";
import { useRef, useState } from "react";
import TeamMember from "../TeamMember/TeamMember.js";
import slideCards from "../../mock/sliderCards.js";

function get_item(obj, id) {
  return (
    <TeamMember
      imgPath={obj["photo"]}
      fullName={obj["full-name"]}
      gitHub={obj["gitHub"]}
      telegram={obj["telegram"]}
      text={obj["description"]}
      devStack={obj["dev-stack"]}
      key={id}
    />
  );
}

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
    const { styles, img_path } = props;
    return (
      <>
        <button
          className={styles.nextBtn + " slick-arrow slick-next"}
          onClick={() => {
            setSlide(mod(slide + 1, slideCards.length / 3));
            sliderRef.current.slickNext();
          }}
        >
          <div className={styles.imgBlock}>
            <img src={img_path} alt="" />
          </div>
        </button>
      </>
    );
  }

  function SamplePrevArrow(props) {
    const { styles, img_path } = props;
    return (
      <>
        <button className={styles.prevBtn}>
          <div
            className={styles.imgBlock}
            onClick={() => {
              setSlide(mod(slide - 1, slideCards.length / 3));
              sliderRef.current.slickPrev();
            }}
          >
            <img src={img_path} alt="" />
          </div>
        </button>
      </>
    );
  }

  const sliderConfigs = {
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 200,
    infinite: false,
    arrows: true,
    infinite: true,
    nextArrow: SampleNextArrow({
      styles: styles,
      img_path: "../../../next-arrow.svg"
    }),
    prevArrow: SamplePrevArrow({
      styles: styles,
      img_path: "../../../prev-arrow.svg"
    })
  };

  const segment_pos_and_width = {
    width: `${100 / (slideCards.length / 3)}%`,
    left: `${(100 * slide) / (slideCards.length / 3)}%`
  };

  return (
    <div className={styles.slider}>
      <h1 className={styles.title}>Наша команда</h1>
      <Slider {...sliderConfigs} ref={sliderRef}>
        {slideCards.map(get_item)}
      </Slider>
      <div className={styles.line}>
        <div className={styles.segment} style={segment_pos_and_width}></div>
      </div>
    </div>
  );
}

export default Team;
