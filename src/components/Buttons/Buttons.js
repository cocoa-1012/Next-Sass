import styles from "./Buttons.module.scss";

const Buttons = () => {
  
  return (
    <div className={styles.buttons}>
      <button className={styles.primaryBtn}>Book a class <img src="/clock.svg" /> </button>
      <button className={styles.secondaryBtn}>Practice speaking with AI <img src="/speak.svg" /> </button>
    </div>
  );
};

export default Buttons;
