import styles from "./styles.module.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import closeButton from "../../img/closeButton.svg";

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
          Форма для связи с нами
        </div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className={classNames(styles.forInput, styles.mb30)}>
            <label htmlFor="nameInput" className={classNames(styles.labelSize)}>
              <span>*&nbsp;</span>Как вас зовут
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
              <span>*&nbsp;</span>Ваш Email
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
              <span>*&nbsp;</span>Ваше сообщение
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
              Даю согласие на обработку персональных данных
            </label>
          </div>
          <button type="submit" className={classNames(styles.submitButton)} /*disabled={acept}*/>
            Отправить
          </button>

          <button
            className={classNames(styles.closeButton)}
            onClick={() => setActive(false)}
          >
            <img src={closeButton} alt="X" />
          </button>
        </form>
      </section>
    </div>
  );
};
