import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { RaceDateTime } from '../types';

dayjs.extend(utc)

export const localTime = (raceDateTime?: RaceDateTime) => {
  if (!raceDateTime) return

  return dayjs(`${raceDateTime.date} ${raceDateTime.time}`).utc().local().format('MM/DD HH:mm')
}

export const getCountdown = (raceDay: dayjs.Dayjs) => {
  const current = dayjs();
  return {
    day: raceDay.diff(current, 'days'),
    hours: raceDay.diff(current, 'hours') % 24,
    minutes: raceDay.diff(current, 'minutes') % 60,
    seconds: raceDay.diff(current, 'seconds') % 60,
    live: raceDay.isBefore(current),
  }
}
