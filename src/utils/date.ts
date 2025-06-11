export const stringToDate = (dateStringInput: string): string => {
  const date = new Date(dateStringInput);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDate = `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;

  console.log(formattedDate); // Output: June 6, 2025
  return formattedDate;
};
