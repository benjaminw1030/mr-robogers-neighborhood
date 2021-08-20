# Mr. Roboger's Neighborhood

### By Benjamin Wilson

### This page uses a function created with TDD to output a complex string from a number input.

## Technologies Used

* HTML
* CSS
* Javascript
* jQuery
* Bootstrap

## Description

The script run on this page will output a string of numbers following certain specs. The string will count from 0 to the inputted number, always returning "Won't you be my neighbor?" if one of the digits in an outputted number is 3, "Boop!" if one of the digits is 2, and "Beep!" if one of the digits is 1, in that order. For instance, an input of "14" will display: "0, "Beep!, Boop!, Won't you be my Neighbor?, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my Neighbor?", "Beep!""

## Setup/Installation Requirements

1. [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) this repository from GitHub to your local machine.
2. Open the new directory.
3. Open index.html in a browser.

You can also see it hosted directly on [GitHub Pages](https://benjaminw1030.github.io/mr-robogers-neighborhood/).

## Known Bugs

* No bugs known at the moment.

## License

* [MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Benjamin Wilson

## Contact Information

<benjaminw1030@gmail.com>

---

## Specs:

### Describe: mrRobogers()

* Test: "It should return a string of "0" if the number 0 is inputted."  
Code: const number = "0";  
mrRobogers(number);  
Expected Output: "0"

* Test: "It should return a string with "Beep!" if the number 1 is inputted."  
Code: const number = "1";  
mrRobogers(number);  
Expected Output: ""Beep!""

* Test: "It should return a string with "Boop!" if the number 2 is inputted."  
Code: const number = "2";  
mrRobogers(number);  
Expected Output: ""Boop!""

* Test: "It should return a string with "Won't you be my neighbor?" if the number 3 is inputted."  
Code: const number = "3";  
mrRobogers(number);  
Expected Output: ""Won't you be my neighbor?""

- Test: "It should return a string with "Beep!" if the number 14 is inputted."  
Code: const number = "14";  
mrRobogers(number);  
Expected Output: ""Beep!""

- Test: "It should return a string with "Boop!" if the number 12 is inputted."  
Code: const number = "12";  
mrRobogers(number);  
Expected Output: ""Boop!""

- Test: "It should return a string with "Won't you be my neighbor?" if the number 123 is inputted."  
Code: const number = "123";  
mrRobogers(number);  
Expected Output: ""Won't you be my neighbor?""

- Test: "It should return a string of a list of translated values counting up to 10 if the number 10 is inputted."  
Code: const number = "10";  
mrRobogers(number);  
Expected Output: "0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9 "Beep!""

- Test: "It should return an error if an integer is not entered."  
Code: const number = "Hello Neighbor!";  
mrRobogers(number);  
Expected Output: "ERROR: PLEASE ENTER AN INTEGER, NEIGHBOR UNIT."

- Test: "It should return an error if a number over 10,000 is entered."  
Code: const number = "100000";  
mrRobogers(number);  
Expected Output: "ERROR: NUMBER TOO LARGE, NEIGHBOR UNIT. THIS UNIT HAS ABORTED PROCESSING TO BE A GOOD NEIGHBOR AND AVOID FLOODING YOUR BROWSER."