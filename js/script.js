function findLeapYear(year) {
    var year = document.getElementById("year").value;
    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        alert("year " + year + " is a Leap Year");
    }
    else{
        alert("year " + year + " is not Leap Year");    
    }

}
onclick = "findLeapYear();"