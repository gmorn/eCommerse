export const formatDate = (inputDateStr: string) => {
  const inputDate = new Date(inputDateStr);
  
  const year = inputDate.getFullYear().toString().slice(-2);
  const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
  const day = inputDate.getDate().toString().padStart(2, '0');
  
  return `${day}.${month}.${year}`;
}