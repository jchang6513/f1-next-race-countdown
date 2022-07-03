import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useEffect, useMemo, useState } from 'react';
import { RaceDateTime } from '../types';
import { getCountdown, safariSafeDateStr } from '../utils';

dayjs.extend(utc)

export const useCountdown = (raceDateTime: RaceDateTime) => {
  const [countdown, setCountdown] = useState({
    day: 0, hours: 0, minutes: 0, seconds: 0, live: false,
  })

  const raceDay = useMemo(() => dayjs(safariSafeDateStr(raceDateTime)), [raceDateTime])

  useEffect(() => {
    setTimeout(() => {
      setCountdown(getCountdown(raceDay))
    }, 1000)
  }, [countdown, raceDay])

  useEffect(() => {
    setCountdown(getCountdown(raceDay))
  }, [raceDay])

  return countdown
}
