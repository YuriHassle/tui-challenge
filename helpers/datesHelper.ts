export function formatDateToYearMonthDay(date: Date): string {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = date.getFullYear();

  const formattedDate = yyyy + '-' + mm + '-' + dd;
  return formattedDate;
}

export function getTomorrowDate(): Date {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return new Date(tomorrow);
}
