import { useCountdown } from '../hooks/useCountdown';
import { Race } from '../types';
import styles from '../../styles/Countdown.module.css'

export const Countdown = ({ nextRace }: { nextRace: Race }) => {
  const countdown = useCountdown(nextRace)

  return (
    <div className={styles.countdown}>
      <div className={styles.section}>
        <p>{String(countdown.day).padStart(2, '0')}</p>
        <p>DAYS</p>
      </div>
      <div className={styles.section}>
        <p>{String(countdown.hours).padStart(2, '0')}</p>
        <p>HRS</p>
      </div>
      <div className={styles.section}>
        <p>{String(countdown.minutes).padStart(2, '0')}</p>
        <p>MINS</p>
      </div>
      <div className={styles.section}>
        <p>{String(countdown.seconds).padStart(2, '0')}</p>
        <p>SECS</p>
      </div>
    </div>
  )
}
