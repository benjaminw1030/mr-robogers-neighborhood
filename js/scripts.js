// Business Logic //

function mrRobogers(number) {
  outputArray = []
  for (i = 0; i <= number; i++) {
    let numberArray = i.toString().split("");
    if (numberArray.includes("3")) {
      outputArray.push("Won't you be my Neighbor?")
    } else if (numberArray.includes("2")) {
      outputArray.push("Boop!")
    } else if (numberArray.includes("1")) {
      outputArray.push("Beep!")
    } else {
      outputArray.push(i)
    }
  }
  return outputArray.join(", ")
}

mrRobogers("14");