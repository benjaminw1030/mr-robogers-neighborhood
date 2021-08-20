## Specs:

### Describe: mrRobogers()

- Test: "It should return a string of "0" if the number 0 is inputted."  
Code: const number = "0";  
mrRobogers(number);  
Expected Output: "0"

- Test: "It should return a string with "Beep!" if the number 1 is inputted."  
Code: const number = "1";  
mrRobogers(number);  
Expected Output: "Beep!"

- Test: "It should return a string with "Boop!" if the number 2 is inputted."  
Code: const number = "2";  
mrRobogers(number);  
Expected Output: "Boop!"

- Test: "It should return a string with "Won't you be my neighbor?" if the number 3 is inputted."  
Code: const number = "3";  
mrRobogers(number);  
Expected Output: "Won't you be my neighbor?"

- Test: "It should return a string with "Beep!" if the number 14 is inputted."  
Code: const number = "14";  
mrRobogers(number);  
Expected Output: "Beep!"

- Test: "It should return a string with "Boop!" if the number 12 is inputted."  
Code: const number = "12";  
mrRobogers(number);  
Expected Output: "Boop!"

- Test: "It should return a string with "Won't you be my neighbor?" if the number 123 is inputted."  
Code: const number = "123";  
mrRobogers(number);  
Expected Output: "Won't you be my neighbor?"

- Test: "It should return a string of a list of translated values counting up to 10 if the number 10 is inputted."  
Code: const number = "10";  
mrRobogers(number);  
Expected Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9 Beep!"

- Test: "It should return an error if an integer is not entered."  
Code: const number = "Hello Neighbor!";  
mrRobogers(number);  
Expected Output: "ERROR: PLEASE ENTER AN INTEGER, NEIGHBOR UNIT"