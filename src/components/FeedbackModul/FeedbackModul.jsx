import styles from "./styles.module.css";
import classNames from "classnames";
import { HiddenFeedback } from "../HiddenFeedback/HiddenFeedback";
import { useState } from "react";

export const FeedbackModul = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <section>
      <button
        className={classNames(styles.feedbackButton)}
        onClick={() => setModalActive(true)}
      >
        Форма обратной связи с нами
      </button>
      <HiddenFeedback active={modalActive} setActive={setModalActive} />
    </section>
  );
};
