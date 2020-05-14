//Name: Sam Assareymuriyil
//Grade: 11 (ICS3UO-C)
//Date: March 5th 2020

//creates the function StorinatorTeach by which the input username and password is checked and if correct access is granted
function StorinatorTeach(){
  //creates variables to store user input username and password
  var userName = document.getElementById("usr").value;
  var passWord = document.getElementById("pwd").value;
  //compares user input username and password to that of this source JS file
  if(userName ==="teacherLogin" && passWord ==="adminpassword123"){
    //uses window.open to open teacher page when username and password are correct
    window.open("AppTeacher.html");
  }
  else{
    //alerts the user that either thier username or password is incorrect
    alert("Incorrect Username or Password");
  } 
}

//creates a function called StorinatorStudent which doesn't require a username or password but simply the click of a button
function StorinatorStudent(){
  //uses window.open to open student page 
  window.open("AppStudent.html");
  window.close("AppLogin.html");
  } 