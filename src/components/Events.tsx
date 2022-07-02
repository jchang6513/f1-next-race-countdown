import { Race } from '../types';
import { localTime } from '../utils';
import styles from '../../styles/Home.module.css'

export const Events = ({ nextRace }: { nextRace: Race }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h2>First Practice</h2>
        <p>{localTime(nextRace.FirstPractice)}</p>
      </div>
      <div className={styles.card}>
        <h2>Second Practice</h2>
        <p>{localTime(nextRace.SecondPractice)}</p>
      </div>
      <div className={styles.card}>
        <h2>Third Practice</h2>
        <p>{localTime(nextRace.ThirdPractice)}</p>
      </div>
      <div className={styles.card}>
        <h2>Qualifying</h2>
        <p>{localTime(nextRace.Qualifying)}</p>
      </div>
      <div className={styles.card}>
        <h2>Race</h2>
        <p>{localTime(nextRace)}</p>
      </div>
    </div>
  )
}
