function isLeapYear(year) {
    if (year%4===0) {
        if (year%100===0) {
            if (year%400==0) {
                alert(year+" Yes it is Leap Year");
            }else{
                alert(year+" No it is Leap Year");
            }
        }else{
            alert(year+" Yes it is Leap Year");
        }
    }else{
        alert(year+" No it is Leap Year")
    }
}

isLeapYear(prompt("Enter a year"));
