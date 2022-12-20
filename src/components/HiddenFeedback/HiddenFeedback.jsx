import styles from "./styles.module.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import closeButton from "../../img/closeButton.svg";
import closeButtonDark from "../../img/closeButton-dark.svg";
import {ThemeContext} from '../ThemeWrapper/ThemeWrapper'
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

export const HiddenFeedback = ({ active, setActive }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      const btnEscape = 27;
      if (event.keyCode === btnEscape) {
        setActive(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div
      id="modalWin"
      className={
        active
          ? classNames(styles.modal, styles.show)
          : classNames(styles.modal)
      }
      onClick={() => setActive(false)}
    >
      <section
        className={classNames(styles.formSection)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classNames(styles.formTitle)}>
          <FormattedMessage id="feedback.title"/>
        </div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className={classNames(styles.forInput, styles.mb30)}>
            <label htmlFor="nameInput" className={classNames(styles.labelSize)}>
              <span>*&nbsp;</span><FormattedMessage id="feedback.name"/>
            </label>
            <input
              type="text"
              id="nameInput"
              className={classNames(styles.inputSize)}
              required
            />

            <label
              htmlFor="emailInput"
              className={classNames(styles.labelSize)}
            >
              <span>*&nbsp;</span><FormattedMessage id="feedback.email"/>
            </label>
            <input
              type="email"
              id="emailInput"
              className={classNames(styles.inputSize)}
              required
            />

            <label
              htmlFor="textareaInput"
              className={classNames(styles.labelArea)}
            >
              <span>*&nbsp;</span><FormattedMessage id="feedback.message"/>
            </label>
            <textarea
              id="textareaInput"
              cols="30"
              rows="10"
              className={classNames(styles.textareaText)}
              required

            ></textarea>
          </div>

          <div className={classNames(styles.labelSize, styles.mb30)}>
            <input
              type="checkbox"
              id="checkboxInput"
              className={classNames(styles.checkInput)}
              required
            />
            <label
              htmlFor="checkboxInput"
              className={classNames(styles.labelArea)}
            >
              <a href="Politika.pdf" target="_blank" className={classNames(styles.link)}>
                <FormattedMessage id="feedback.checkbox"/>
              </a>
            </label>
          </div>
          <button type="submit" className={classNames(styles.submitButton)} /*disabled={acept}*/>
            <FormattedMessage id="feedback.submit"/>
          </button>

          <button
            className={classNames(styles.closeButton)}
            onClick={() => setActive(false)}
          >
            <ThemeContext.Consumer>
              {({theme}) => (
                <img src={theme === 'light' ? closeButton : closeButtonDark} alt="X" />
              )}
            </ThemeContext.Consumer>
          </button>
        </form>
      </section>
    </div>
  );
};
