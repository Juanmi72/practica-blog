import dayjs from "dayjs"

import relativeTime from "dayjs/plugin/relativeTime.js"

await import("dayjs/locale/es-us.js")

dayjs.locale("es-us")
dayjs.extend(relativeTime)

export default function humanizedayjs(date) {

    
    const wrappedDate = dayjs(date); 
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));
    
    const isCurrentYear = wrappedDate.year() === new Date().getFullYear();
    
    if (!isCurrentYear) {
      return wrappedDate.format("MMMM D, YYYY");
    } else if (daysDiff <= 30) {
      return wrappedDate.formatNow();
    } else {
      return wrappedDate.format("MMMM DD");

  } 
}
  