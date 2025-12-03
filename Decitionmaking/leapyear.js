var year = 2300; // input
if ((year % 100 == 0 && year % 400 == 0) // cheak year is a century year and leapyear
    ||
    (year % 100 != 0 && year % 4 == 0)) { // cheak year not century year is leap
    console.log("leap year");

}
else {
    console.log("not a leap year");

}
