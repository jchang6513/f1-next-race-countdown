import { useState } from 'react';
import { Race } from '../types';
import { localTime } from '../utils';
import styles from '../../styles/Events.module.css'

export const Events = ({ nextRace }: { nextRace: Race }) => {
  const [mobileGridToggle, setMobileGridToggle] = useState(false)

  return (
    <>
      <div className={styles.actionBar} onClick={() => setMobileGridToggle(true)}>
        <svg className={styles.arrow} viewBox="0 0 1792 1792">
          <path d="M1412 897q0-27-18-45l-91-91q-18-18-45-18t-45 18l-189 189v-502q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v502l-189-189q-19-19-45-19t-45 19l-91 91q-18 18-18 45t18 45l362 362 91 91q18 18 45 18t45-18l91-91 362-362q18-18 18-45zm252-1q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" fill="#fff" />
        </svg>
      </div>
      <div className={`${styles.events} ${mobileGridToggle ? styles.active : ''}`}>
        <div className={styles.event}>
          <h2>First Practice</h2>
          <p>{localTime(nextRace.FirstPractice)}</p>
        </div>
        <div className={styles.event}>
          <h2>Second Practice</h2>
          <p>{localTime(nextRace.SecondPractice)}</p>
        </div>
        <div className={styles.event}>
          <h2>Third Practice</h2>
          <p>{localTime(nextRace.ThirdPractice)}</p>
        </div>
        <div className={styles.event}>
          <h2>Qualifying</h2>
          <p>{localTime(nextRace.Qualifying)}</p>
        </div>
        <div className={styles.event}>
          <h2>Race</h2>
          <p>{localTime(nextRace)}</p>
        </div>
        <div className={styles.closeBtn} onClick={() => setMobileGridToggle(false)}/>
      </div>
    </>
  )
}
