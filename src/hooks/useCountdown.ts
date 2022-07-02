import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useEffect, useState } from 'react';
import { RaceDateTime } from '../types';
import { getCountdown } from '../utils';

dayjs.extend(utc)

export const useCountdown = (raceDateTime: RaceDateTime) => {
  const [countdown, setCountdown] = useState({
    day: 0, hours: 0, minutes: 0, seconds: 0,
  })

  const raceDay = dayjs(`${raceDateTime.date} ${raceDateTime.time}`);

  useEffect(() => {
    setTimeout(() => {
      setCountdown(getCountdown(raceDay))
    }, 1000)
  }, [countdown, raceDay])

  useEffect(() => {
    setCountdown(getCountdown(raceDay))
  }, [])

  return countdown
}
