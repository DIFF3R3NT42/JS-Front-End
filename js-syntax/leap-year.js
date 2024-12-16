function LeapYear(year) {
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 == 0 ) {
        console.log("yes")
    } else {
        console.log("no")
    }
}

LeapYear(1984);
LeapYear(2003);
LeapYear(4);