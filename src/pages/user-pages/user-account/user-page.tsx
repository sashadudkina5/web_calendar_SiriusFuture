import Discount from "../../../components/Discount/Discount";
import Balance from "../../../components/student-components/Balance/Balance";
import Countdown from "../../../components/student-components/Countdown/Countdown";
import Homeworks from "../../../components/student-components/Homeworks/Homeworks";
import NearLessons from "../../../components/student-components/NearLessons/NearLessons";
import Reports from "../../../components/student-components/Reports/Reports";
import styles from "./styles.module.scss";

export default function UserPage() {
  return (
    <section className={styles.main_container}>
      <div className={styles.main_upper_container}>
        <Discount />
        <Countdown />

        <div className={styles.blocks}>
          <Homeworks />
          <Reports />
        </div>
      </div>

      <div className={styles.main_low_container}>
        <Balance />
        <NearLessons />
      </div>
    </section>
  );
}
