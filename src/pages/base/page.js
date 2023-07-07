import Buttons from "../../components/Buttons/Buttons";
import Container from "../../components/Container/Container";
import Reviews from "../../components/Reviews/Reviews";
import Upcoming from "../../components/Upcoming/Upcoming";
import styles from "./Base.module.scss";

export default function Base() {
  return (
    <Container>
      <Upcoming />
      <div className={styles.rightDiv}>
        <Buttons />
        <Reviews />
      </div>
    </Container>
  );
}
