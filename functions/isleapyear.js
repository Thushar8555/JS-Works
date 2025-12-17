// w.a.f fuction is leap year with one parameter year
// return true if year is a leap year else return false

function leapyear(year){
    return ((year%100==0 && year%400==0)||(year%100!=0 && year%4==0))
}
console.log(leapyear(1900));
console.log(leapyear(2024));
console.log(leapyear(2025));
console.log(leapyear(2104));


