import DetailCard from "../DetailCard/DetailCard";
import styles from "./Upcoming.module.scss";

const Upcoming = () => {
  const userData = [
    {
      id: 1,
      className: "A2 Grammar: The Present Simple",
      teacherName: "Michael Beaumont",
      avatar: "/avatar.png",
      dateTime: "9th July 2023 13:00 (GMT)",
    },
    {
      id: 2,
      className: "A2 Grammar: The Present Simple",
      teacherName: "Michael Beaumont",
      avatar: "/avatar.png",
      dateTime: "9th July 2023 13:00 (GMT)",
    },
    {
      id: 3,
      className: "A2 Grammar: The Present Simple",
      teacherName: "Michael Beaumont",
      avatar: "/avatar.png",
      dateTime: "9th July 2023 13:00 (GMT)",
    },
    {
      id: 4,
      className: "A2 Grammar: The Present Simple",
      teacherName: "Michael Beaumont",
      avatar: "/avatar.png",
      dateTime: "9th July 2023 13:00 (GMT)",
    },
    {
      id: 5,
      className: "A2 Grammar: The Present Simple",
      teacherName: "Michael Beaumont",
      avatar: "/avatar.png",
      dateTime: "9th July 2023 13:00 (GMT)",
    },
    {
      id: 6,
      className: "A2 Grammar: The Present Simple",
      teacherName: "Michael Beaumont",
      avatar: "/avatar.png",
      dateTime: "9th July 2023 13:00 (GMT)",
    },
    {
      id: 7,
      className: "A2 Grammar: The Present Simple",
      teacherName: "Michael Beaumont",
      avatar: "/avatar.png",
      dateTime: "9th July 2023 13:00 (GMT)",
    },
    {
      id: 8,
      className: "A2 Grammar: The Present Simple",
      teacherName: "Michael Beaumont",
      avatar: "/avatar.png",
      dateTime: "9th July 2023 13:00 (GMT)",
    },
    {
      id: 9,
      className: "A2 Grammar: The Present Simple",
      teacherName: "Michael Beaumont",
      avatar: "/avatar.png",
      dateTime: "9th July 2023 13:00 (GMT)",
    },
    {
      id: 10,
      className: "A2 Grammar: The Present Simple",
      teacherName: "Michael Beaumont",
      avatar: "/avatar.png",
      dateTime: "9th July 2023 13:00 (GMT)",
    },
  ];
  return (
    <div className={styles.upcoming}>
      <p className={styles.title}>Upcoming classes</p>
      <div className={styles.tableTitle}>
        <div className={styles.midContainer}>
          <p>Class name</p>
          <p>Teacher name</p>
        </div>
        <div className={styles.midContainer}>
          <p>Date & Time</p>
          <p></p>
        </div>
      </div>
      {userData.map((item) => (
        <DetailCard item={item} />
      ))}
    </div>
  );
};

export default Upcoming;
