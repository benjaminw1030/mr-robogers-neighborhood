// Business Logic //

function mrRobogers(name, number) {
  outputArray = []
  testArray = number.split("");
  if (!/^\d+$/.test(number)) {
    return "ERROR: PLEASE ENTER AN INTEGER, NEIGHBOR UNIT."
  } else if (parseInt(number) > 10000) { 
    return "ERROR: NUMBER TOO LARGE, NEIGHBOR UNIT. THIS UNIT HAS ABORTED PROCESSING TO BE A GOOD NEIGHBOR AND AVOID FLOODING YOUR BROWSER."
  } else {
    for (i = 0; i <= number; i++) {
      let numberArray = i.toString().split("");
      if (numberArray.includes("3")) {
        outputArray.push("\"Won't you be my Neighbor, " + name + "?\"")
      } else if (numberArray.includes("2")) {
        outputArray.push("\"Boop!\"")
      } else if (numberArray.includes("1")) {
        outputArray.push("\"Beep!\"")
      } else {
        outputArray.push(i)
      }
    }
    return outputArray
  }
}

function robogersReverse(number) {
  mrRobogers(number);
}

$(document).ready(function () {
  $("form#mr-robogers").submit(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    const number = $("#input").val();
    const direction = $("input:radio[name=direction]:checked").val();
    console.log(direction);
    if (direction === "reversed") {
      $("#output").html(mrRobogers(name, number).reverse().join(", "));
    } else {
      $("#output").html(mrRobogers(name, number).join(", "));
    }
    $("#result").fadeIn();
  });
});