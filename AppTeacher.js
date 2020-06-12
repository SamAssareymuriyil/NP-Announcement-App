//Name: Sam Assareymuriyil
//Grade: 11 (ICS3UO-C)
//Date: June 10th 2020

//global declratation of the teacher variables for this js file
let i=0;
let j=1;
var gradeT = [];
var genT = [];
var clubT = [];
var ibtT = [];
var titleT = [];
var teacherT = [];
var postT = [];
var timeT = [];
let announcementView = "<table><tr><th>Time Posted</th><th>Grade</th><th>Gender</th><th>Club</th><th>IBT?</th><th>Title</th><th>Teacher</th><th>Announcement</th></tr>";

//creates a function called "logout" which closes the current window when used
function logout(){
    //uses the window close function to close the window when a user presses "Logout"
    window.close();
}

function store(){
    if (localStorage.getItem('gradeANN') === null){
        storeANN1();
        i++
    }
    else {
        storeANN2();
        i++
    }
    //increments i setting up for the next announcement
}

//creates a function called "storeANN" in which the teacher's input is stored as variables, the values of which are stored into Local Storage
function storeANN1(){
    //first announcement
    //the following variables that end in T stores the value of the dropdown menu's user input from the HTML document
    gradeT[i] = document.getElementById("HTMLgradeT").value;
    genT[i] = document.getElementById("HTMLgenT").value;
    clubT[i] = document.getElementById("HTMLclubT").value;
    ibtT[i] = document.getElementById("HTMLibtT").value;
    titleT[i] = document.getElementById("HTMLtitleT").value;
    teacherT[i] = document.getElementById("HTMLteacherT").value;
    postT[i] = document.getElementById("HTMLpostT").value;
    timeT[i] = getTime();
    //displays alert to show that announcment was posted
    alert('Your announcement was posted.');
    //the following lines save the previously saved variables to its appropriate "variableANN" key for easy reference
    localStorage.setItem('gradeANN',JSON.stringify(gradeT));
    localStorage.setItem('genANN',JSON.stringify(genT));
    localStorage.setItem('clubANN',JSON.stringify(clubT));
    localStorage.setItem('ibtANN',JSON.stringify(ibtT));
    localStorage.setItem('titleANN',JSON.stringify(titleT));
    localStorage.setItem('teacherANN',JSON.stringify(teacherT));
    localStorage.setItem('postANN',JSON.stringify(postT));
    localStorage.setItem('timeANN',JSON.stringify(timeT));
    //checkArray();
}

function storeANN2(){
    //for any announcements after the first
    let gradeT = JSON.parse(localStorage.getItem('gradeANN'))
    let genT = JSON.parse(localStorage.getItem('genANN'))
    let clubT = JSON.parse(localStorage.getItem('clubANN'))
    let ibtT = JSON.parse(localStorage.getItem('ibtANN'))
    let titleT = JSON.parse(localStorage.getItem('titleANN'))
    let teacherT = JSON.parse(localStorage.getItem('teacherANN'))
    let postT = JSON.parse(localStorage.getItem('postANN'))
    let timeT = JSON.parse(localStorage.getItem('timeANN'))
    //stores the value of the dropdown menu's user input from the HTML document into the variable array
    gradeT.push(document.getElementById("HTMLgradeT").value);
    genT.push(document.getElementById("HTMLgenT").value);
    clubT.push(document.getElementById("HTMLclubT").value);
    ibtT.push(document.getElementById("HTMLibtT").value);
    titleT.push(document.getElementById("HTMLtitleT").value);
    teacherT.push(document.getElementById("HTMLteacherT").value);
    postT.push(document.getElementById("HTMLpostT").value);
    timeT.push(getTime());
    //displays alert to show that announcment was posted
    alert('Your announcement was posted.');
    //store variable array back into local storage
    localStorage.setItem('gradeANN',JSON.stringify(gradeT));
    localStorage.setItem('genANN',JSON.stringify(genT));
    localStorage.setItem('clubANN',JSON.stringify(clubT));
    localStorage.setItem('ibtANN',JSON.stringify(ibtT));
    localStorage.setItem('titleANN',JSON.stringify(titleT));
    localStorage.setItem('teacherANN',JSON.stringify(teacherT));
    localStorage.setItem('postANN',JSON.stringify(postT));
    localStorage.setItem('timeANN',JSON.stringify(timeT));
    //checkArray();
}

function checkArray(){
    var checkgradeT = JSON.parse(localStorage.getItem("gradeANN"));
    var checkgenT = JSON.parse(localStorage.getItem("genANN"));
    var checkclubT = JSON.parse(localStorage.getItem("clubANN"));
    var checkibtT = JSON.parse(localStorage.getItem("ibtANN"));
    var checktitleT = JSON.parse(localStorage.getItem("titleANN"));
    var checkteacherT = JSON.parse(localStorage.getItem("teacherANN"));
    var checkpostT = JSON.parse(localStorage.getItem("postANN"));
    var checktimeT = JSON.parse(localStorage.getItem("timeANN"));
    alert("THESE ARRAYS ARE OBTAINED FROM LOCAL STORAGE:  " + "Grade: " + checkgradeT + "   Gender: " + checkgenT + "   Club: " + checkclubT + "   IBT: " + checkibtT + "   Title: " + checktitleT + "   Teacher: " + checkteacherT + "   Post: " + checkpostT + "   Time: " + checktimeT);
}

function getTime(){
    var day
    var month
    var d = new Date();
    var year = d.getFullYear();
    var ufMonth = d.getMonth();
    var date = d.getDate();
    var ufDay = d.getDay();
    var TIME = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    if (ufDay == 0){day = 'Sunday'}
    else if (ufDay == 1){day = 'Monday'}
    else if (ufDay == 2){day = 'Tuesday'}
    else if (ufDay == 3){day = 'Wednesday'}
    else if (ufDay == 4){day = 'Thursday'}
    else if (ufDay == 5){day = 'Friday'}
    else if (ufDay == 6){day = 'Saturday'};
    if (ufMonth == 0){month = 'January'}
    else if (ufMonth == 1){month = 'February'}
    else if (ufMonth == 2){month = 'March'}
    else if (ufMonth == 3){month = 'April'}
    else if (ufMonth == 4){month = 'May'}
    else if (ufMonth == 5){month = 'June'}
    else if (ufMonth == 6){month = 'July'}
    else if (ufMonth == 7){month = 'August'}
    else if (ufMonth == 8){month = 'September'}
    else if (ufMonth == 9){month = 'October'}
    else if (ufMonth == 10){month = 'November'}
    else if (ufMonth == 11){month = 'Decemeber'};
    return TIME + ' on ' + day + ' ' + date + ' ' + month + ', ' + year
}

function disp(){

    var checkgradeT = JSON.parse(localStorage.getItem("gradeANN"));
    var checkgenT = JSON.parse(localStorage.getItem("genANN"));
    var checkclubT = JSON.parse(localStorage.getItem("clubANN"));
    var checkibtT = JSON.parse(localStorage.getItem("ibtANN"));
    var checktitleT = JSON.parse(localStorage.getItem("titleANN"));
    var checkteacherT = JSON.parse(localStorage.getItem("teacherANN"));
    var checkpostT = JSON.parse(localStorage.getItem("postANN"));
    var checktimeT = JSON.parse(localStorage.getItem("timeANN"));

    for(j=1; j < checkgradeT.length + 1; j++){
        jLen = checkgradeT.length - j;
        announcementView +=
            "<tr><td>" + checktimeT[jLen] + "</td><td>" + checkgradeT[jLen] + "</td><td>" + checkgenT[jLen] + "</td><td>" +  checkclubT[jLen] + "</td><td>" + checkibtT[jLen] + "</td><td>" + checktitleT[jLen] + "</td><td>" + checkteacherT[jLen] + "</td><td>" + checkpostT[jLen] + "</td></tr>";
    }
    announcementView += "</table>";
    document.getElementById("teachAnnView").innerHTML = announcementView;
}
