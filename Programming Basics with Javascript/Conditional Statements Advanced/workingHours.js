function workingHours(input) {
  let hour = Number(input[0]);
  let day = input[1];

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
    case "Saturday":
      if (10 <= hour && hour <= 18) {
        console.log("open");
      } else {
        console.log("closed");
      }
      break;
    case "Sunday":
      console.log("closed");
    default:
      break;
  }
}