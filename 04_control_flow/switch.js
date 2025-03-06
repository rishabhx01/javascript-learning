// Switch Statement:
// Basic syntax of switch

/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month = 3 

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;

    default:
        console.log("default case match");
        break;
}


// VS Code shortcut select what you want to copy - click shift + alt + down arrow key.
// Output - March

// so why we are using break ?
// The break statement is used to exit the switch case once a match is found. 
// Without break, JavaScript will continue executing the next case, even if it doesn't match.



// Sometime not giving break is also helpful.
const day = "Saturday";

switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Weekday.");
}
