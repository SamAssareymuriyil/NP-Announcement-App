//Name: Sam Assareymuriyil
//Grade: 11 (ICS3UO-C)
//Date: June 10th 2020

//global declratation of the teacher variables for this js file
var gradeS;
var genS;
var clubS;
var ibtS;

function Logout(){
    //uses the window close function to close the window when a user presses "Logout"
    window.close();
}

function checkANN(){
    //the following variables that end in T stores the value of the dropdown menu's user input from the HTML document
    gradeS = document.getElementById("HTMLgradeS").value;
    genS = document.getElementById("HTMLgenS").value;
    clubS = document.getElementById("HTMLclubS").value;
    ibtS = document.getElementById("HTMLibtS").value;
    //the following lines save the previously saved variables to its appropriate "variableCHK" key for easy reference
    localStorage.setItem('gradeCHK',gradeS);
    localStorage.setItem('genCHK',genS);
    localStorage.setItem('clubCHK',clubS);
    localStorage.setItem('ibtCHK',ibtS);
    window.close();
    window.open("AppStudentViewer.html");
}