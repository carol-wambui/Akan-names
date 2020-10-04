var akanNameMale = ["Akosua", "Adwoa", "Abenaa", "Yaa", "Afua", "Ama"];
var akanNameFemale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

function ghana() {
    var centuary = parseInt(document.getElementById("centuary").value);
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    var gender = document.getElementById("gender").value;

    var CC = centuary;
    var YY = year;
    var MM = month;
    var DD = day;
    var d = parseInt(((CC / 4) - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7

    if (CC < 18 || CC > 20) {
        alert("Your centuary is invalid")
    } else if (YY < 0 || 20 < YY) {
        alert("Invalid Year")
    } else if (MM <= 0 || MM > 12) {
        alert("Enter a valid Month")
    } else if (DD <= 0 || DD > 31) {
        alert("Invalid date")
    } else if (gender === "Male") {
        alert("Your akan name is " + akanNameMale[d])
    }
     else if (gender === "Female") {
        alert("Your akan name is " + akanNameFemale[d])
    }
}
