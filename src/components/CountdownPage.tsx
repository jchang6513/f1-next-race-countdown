import { Race } from '../types';
import styles from '../../styles/Home.module.css'
import { Countdown } from './Countdown';
import { Events } from './Events';
import { Flag } from './Flag';

export const CountdownPage = ({ nextRace }: { nextRace: Race }) => {
  const { raceName, Circuit } = nextRace

  return (
    <main className={styles.main}>
      <Flag />
      <h1 className={styles.raceName}>
        {raceName}
      </h1>
      <div className={styles.title}>
        <h1 className={styles.circuitName}>
          {Circuit.circuitName}
        </h1>
        <Countdown nextRace={nextRace} />
      </div>
      <Events nextRace={nextRace} />
    </main>
  )
}
