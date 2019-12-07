const today = new Date();
const todayDate =`&to=${today.getFullYear()}-${(today.getMonth()+1)}-${today.getDate()}`;
const thatDay = new Date(today.setDate(today.getDate() - 7));
const thatDayDate = `&from=${thatDay.getFullYear()}-${(thatDay.getMonth()+1)}-${thatDay.getDate()}`;
const date = thatDayDate + todayDate;

export {date}
