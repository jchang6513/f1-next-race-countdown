import { useCountdown } from '../hooks/useCountdown';
import { Race } from '../types';
import styles from '../../styles/Countdown.module.css'

export const Countdown = ({ nextRace }: { nextRace: Race }) => {
  const countdown = useCountdown(nextRace)

  if (countdown.live) {
    return (
      <div className={styles.countdown}>
        <a href="https://www.formula1.com/en/f1-live-lite.html" target="_blank" rel="noreferrer">
          <h2>LIVE</h2>
          <div className={styles.liveEvents}>
            <div className={styles.liveAnimate}>
            </div>
            <div className={styles.liveFixed}>
            </div>
          </div>
        </a>
      </div>
    )
  }

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
