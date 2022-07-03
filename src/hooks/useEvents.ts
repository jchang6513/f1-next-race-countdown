import { useMemo } from "react";
import { Event, Race } from "../types";
import { localTime } from "../utils";

const EVENTS: Event[] = [
  {
    key: 'FirstPractice',
    label: 'First Practice',
  },
  {
    key: 'SecondPractice',
    label: 'Second Practice',
  },
  {
    key: 'ThirdPractice',
    label: 'Third Practice',
  },
  {
    key: 'Qualifying',
    label: 'Qualifying',
  },
  {
    key: 'Sprint',
    label: 'Sprint',
  },
]

export const useEvents = (nextRace: Race) => {
  return useMemo(
    () => (
      EVENTS
        .reduce<Event[]>((acc, cur) => {
          const time = localTime(nextRace[cur.key])
          if (!time) return acc

          return acc.concat({ ...cur, time })
        }, [])
        .sort((a, b) => Number(new Date(a.time || '')) - Number(new Date(b.time || '')))
    ),
    [nextRace],
  )
}
