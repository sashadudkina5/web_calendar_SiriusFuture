import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useAppSelector } from "../../../service/store";
import { getNearestEvent } from "../../../service/selectors";

export default function Countdown() {
  const nearestEvent = useAppSelector(getNearestEvent);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    if (!nearestEvent) return;

    const countDownDate = new Date(nearestEvent.startTime).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setCountdown({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(interval);
  }, [nearestEvent]);

  if (!nearestEvent) {
    return <p>Нет предстоящих уроков</p>;
  }

  return (
    <article className={styles.countdown_container}>
      <p className={styles.countdown_title}>
        Следующее занятие <br /> начнется через:
      </p>
      <div className={styles.countdown_timer}>
        <div>
          <span className={styles.countdown_time}>{countdown.days}</span>
          <span className={styles.countdown_time_type}>д</span>
        </div>
        <div>
          <span className={styles.countdown_time}>{countdown.hours}</span>
          <span className={styles.countdown_time_type}>ч</span>
        </div>
        <div>
          <span className={styles.countdown_time}>{countdown.minutes}</span>
          <span className={styles.countdown_time_type}>мин</span>
        </div>
      </div>

      <button type="button" className={styles.countdown_button}>
        Button
      </button>
    </article>
  );
}
