import styles from "./ReviewCard.module.scss";

const ReviewCard = ({ item }) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.cardHeader}>
        <p className={styles.userName}>
          <img src={item.avatar} />
          {item.userName}
        </p>
        <p className={styles.dateTime}>{item.dateTime}</p>
      </div>
      <p className={styles.content}>{item.content}</p>
      <div className={styles.cardFooter}>
        <p>
          {[0, 0, 0, 0].map((item) => (
            <span className={styles.coloredStar}> &#9733;</span>
          ))}
          <span className={styles.uncoloredStar}> &#9734; </span>
          <span> {item.rating.toFixed(1)}</span>
        </p>
        <button className={styles.askBtn}>Ask a question</button>
      </div>
    </div>
  );
};

export default ReviewCard;
