import addLeadingZero from './addLeadingZero';

export default function getFormattedTimeFromMillis(millis: number): string {
  const date = new Date(millis);

  return `${date.getFullYear()}.${addLeadingZero(date.getUTCMonth())}.${addLeadingZero(
    date.getUTCDate()
  )}.${addLeadingZero(date.getHours())}:${addLeadingZero(date.getUTCMinutes())}`;
}
