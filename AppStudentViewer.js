//creates a function called "logout" which closes the current window when used
function logout(){
    //uses the window close function to close the window when a user presses "Logout"
    window.close();
}

function showANN(){
    var gradeT = localStorage.getItem('gradeANN')
    var genT = localStorage.getItem('genANN')
    var clubT = localStorage.getItem('clubANN')
    var ibtT = localStorage.getItem('ibtANN')
    var gradeS = localStorage.getItem('gradeCHK')
    var genS = localStorage.getItem('genCHK')
    var clubS = localStorage.getItem('clubCHK')
    var ibtS = localStorage.getItem('ibtCHK')
    var title = localStorage.getItem('titleANN');
    var teacher = (localStorage.getItem('teacherANN'))+' at '+(localStorage.getItem('timeANN'));
    var annoucement = localStorage.getItem('postANN');
    //compares the "variableCHK"'s and "variableANN"'s from local storage
    if( gradeS === gradeT || gradeT == "all" && genS === genT || genT == "A" && clubS === clubT || clubT == "clubs" && ibtS === ibtT || ibtT == "B"){
        //the following lines take the values of the Annoucement's title, teacher name, and itself and uses inner html to input the text into the previously invisible textboxes
        document.getElementById("titleANN1").innerHTML = title;
        document.getElementById("teacherANN1").innerHTML = teacher;
        document.getElementById("postANN1").innerHTML = annoucement;  
    }
    else {
        //alerts the user that there are no announcements for them under the provided parameters
        document.getElementById("titleANN1").innerHTML = 'You have no Announcements'
    }
}