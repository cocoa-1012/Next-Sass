import Buttons from "../../components/Buttons/Buttons";
import Container from "../../components/Container/Container";
import Reviews from "../../components/Reviews/Reviews";
import Upcoming from "../../components/Upcoming/Upcoming";
import styles from "./Base.module.scss";

export default function Base() {
  return (
    <Container>
      <div className={styles.md_view}>
        <Buttons />
      </div>
      <Upcoming />
      <div className={styles.rightDiv}>
        <div className={styles.lg_view}>
          <Buttons />
        </div>
        <Reviews />
      </div>
    </Container>
  );
}
