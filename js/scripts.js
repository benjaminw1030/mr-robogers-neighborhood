// "0" output "0" //
// "1" output "Beep!"
// "2" output "Boop!"
// "3" output "Won't you be my neighbor?"
// "14" output "Beep!"
// "12" output "Boop!"
// "123" output "Won't you be my neighbor?"
// "10" output "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9 Beep!"
//Business Logic

function mrRobogers(number) {
  if (number === "1") {
    return "Beep!"
  } else {
  return number
  }
}

mrRobogers("0");