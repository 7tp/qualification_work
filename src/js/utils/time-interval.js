const today = new Date();
const todayDate =`&to=${today.getFullYear()}-${(today.getMonth()+1)}-${today.getDate()}`;
const week = 7;
const thatDay = new Date(today.setDate(today.getDate() - week));
const thatDayDate = `&from=${thatDay.getFullYear()}-${(thatDay.getMonth()+1)}-${thatDay.getDate()}`;
const DATE_INTERVAL = thatDayDate + todayDate;

export {DATE_INTERVAL}
