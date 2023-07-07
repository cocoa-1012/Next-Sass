import styles from "./DetailCard.module.scss";

const DetailCard = ({ item }) => {
  return (
    <div className={styles.detailCard}>
      <div className={styles.midContainer}>
        <p>{item.className}</p>
        <p className={styles.teacherName}>
          <img src={item.avatar} alt="Avatar" />
          {item.teacherName}
        </p>
      </div>
      <div className={styles.midContainer}>
        <p className={styles.dateTime}>{item.dateTime}</p>
        <button className={styles.cancelBtn}>Cancel class</button>
      </div>
    </div>
  );
};

export default DetailCard;
