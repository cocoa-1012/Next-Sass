import styles from "./Buttons.module.scss";

const Buttons = () => {
  
  return (
    <div className={styles.buttons}>
      <button className={styles.primaryBtn}>Book a class <img src="/clock.svg" /> </button>
      <button className={styles.secondaryBtn}>Book a class <img src="/speak.svg" /> </button>
    </div>
  );
};

export default Buttons;
