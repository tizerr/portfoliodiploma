import styles from "./styles.module.css";
import classNames from "classnames";
import { HiddenFeedback } from "../HiddenFeedback/HiddenFeedback";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

export const FeedbackModule = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <section>
      <button
        className={classNames(styles.feedbackButton)}
        onClick={() => setModalActive(true)}
      >
        <FormattedMessage id="feedback.btn"/>
      </button>
      <HiddenFeedback active={modalActive} setActive={setModalActive} />
    </section>
  );
};
