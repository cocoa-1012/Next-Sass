import styles from "./DetailCard.module.scss";

const DetailCard = ({ item }) => {
  return (
    <div className={styles.detailCard}>
      <p>{item.className}</p>
      <p className={styles.teacherName}>
        <img src={item.avatar} alt="Avatar" />
        {item.teacherName}
      </p>
      <p>{item.dateTime}</p>
      <p className={styles.cancelBtn}>Cancel class</p>
    </div>
  );
};

export default DetailCard;
