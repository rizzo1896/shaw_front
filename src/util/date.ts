export const formatDate = (date: string, format: string) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  const second = dateObj.getSeconds();
  const millisecond = dateObj.getMilliseconds();
  const dateObjMap = {
    YYYY: year,
    MM: month,
    DD: day,
    HH: hour,
    mm: minute,
    ss: second,
    SSS: millisecond,
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss|SSS/g, (matched) => {
    // @ts-ignore
    return dateObjMap[matched];
  });
};
