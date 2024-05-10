var day ="wed"
switch(day){
    case"mon":
    console.log("tday is monday");
    break
    case "tue":
        console.log("today is Tue");
        break
        case "wed":
    console.log("tday is wed");
    break
    case "thurs":
        console.log("today is thurs");
        break
        case "fri":
    console.log("tday is fri");
    break
    case "sat":
        console.log("today is sat");
        break
        case "sun":
        console.log("today is sun");
        break
}
document.getElementById("note").innerText = "today is " + day

var text ;
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 1:
    text = "Today is Sunday";
    break;
    case 2:
    text = "Today is Monday";
    break;
    case 3:
    text = "Today is Tuesday";
    break;
    case 4:
    text = "Today is Wednesday";
    break;
    case 5:
    text = "Today is Thursday";
    break;
    case 7:
    text = "Today is Friday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
document.getElementById("note2").innerHTML = text;
