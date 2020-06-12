//Name: Sam Assareymuriyil
//Grade: 11 (ICS3UO-C)
//Date: June 10th 2020

//creates a function called "logout" which closes the current window when used
function logout(){
    //uses the window close function to close the window when a user presses "Logout"
    window.close();
}

function showANN(){
    var teachTime=[];
    var annDiv=[];
    var titleA=[];
    var teacherA=[];
    var annCon=[];
    var gradeT = JSON.parse(localStorage.getItem('gradeANN'))
    var genT = JSON.parse(localStorage.getItem('genANN'))
    var clubT = JSON.parse(localStorage.getItem('clubANN'))
    var ibtT = JSON.parse(localStorage.getItem('ibtANN'))
    var gradeS = localStorage.getItem('gradeCHK')
    var genS = localStorage.getItem('genCHK')
    var clubS = localStorage.getItem('clubCHK')
    var ibtS = localStorage.getItem('ibtCHK')
    var title = JSON.parse(localStorage.getItem('titleANN'));
    var teacher = JSON.parse(localStorage.getItem('teacherANN'));
    var time = JSON.parse(localStorage.getItem('timeANN'));
    var annoucement = JSON.parse(localStorage.getItem('postANN'));
    var textHolder = "";
    //creates a for loop that runs until all of the array's values has been checked for
    for (var i=0; i<gradeT.length; i++){
    //compares the "variableCHK"'s and "variableANN"'s from local storage
        if((gradeS === gradeT[i] || gradeT[i] == "All") && (genS === genT[i] || genT[i] == "All") && (clubS === clubT[i] || clubT[i] == "All") && (ibtS === ibtT[i] || ibtT[i] == "All")){
            textHolder += '<h2>' + title[i] + '<br>' + '<h6>' + teacher[i] + ' at ' + time[i] + '<br>' + '<h4>' + annoucement[i] + '<br>' + '<hr>' + '<br>'
        }
    }
    if(textHolder == '') {
        //alerts the user that there are no announcements for them under the provided parameters
        document.getElementById("annArea").innerHTML = ('You have no Announcements, for your current settings');
    }
    document.getElementById("annArea").innerHTML += textHolder  
}