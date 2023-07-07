import ReviewCard from "../ReviewCard/ReviewCard";
import styles from "./Reviews.module.scss";

const Reviews = () => {
  const reviewData = [
    {
      id: 1,
      userName: "Michael Beaumont",
      content:
        "John demonstrated a commendable grasp of grammar during our English sessions, and we successfully explored various new expressions. I believe he is making significant progress overall, yet it would be beneficial for him to concentrate on enhancing his speaking confidence and expanding his vocabulary. Encouraging him to learn a new word every day could be an effective strategy to achievethis goal. - Thank you",
      avatar: "/avatar.png",
      dateTime: "9th July 2023 13:00 (GMT)",
      rating: 4,
    },
    {
      id: 1,
      userName: "Michael Beaumont",
      content:
        "John demonstrated a commendable grasp of grammar during our English sessions, and we successfully explored various new expressions. I believe he is making significant progress overall, yet it would be beneficial for him to concentrate on enhancing his speaking confidence and expanding his vocabulary. Encouraging him to learn a new word every day could be an effective strategy to achievethis goal. - Thank you",
      avatar: "/avatar.png",
      dateTime: "9th July 2023 13:00 (GMT)",
      rating: 4,
    },
  ];
  return (
    <div className={styles.reviews}>
      <p className={styles.title}>Most recent class</p>
      {reviewData.map((item) => (
        <ReviewCard item={item}/>
      ))}
    </div>
  );
};

export default Reviews;
