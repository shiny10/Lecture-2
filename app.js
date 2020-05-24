var student = {
    name: "",
    type: "student"
  };
  
  //this domcontent loaded is what initializes your html page and loads the main page onto the memory
  //and screen. so when the main page gets loaded this contentLoade function is called
  document.addEventListener('DOMContentLoaded', contentLoaded);
  
  //this function gets the name (name is the id) and whenever key is pressed on the name
  //this keyUp function is called
  function contentLoaded(event) {
    document.getElementById('name').addEventListener("keyup", keyUp);
  }
  
  //this keyUp function calls the calculateNumericicOutput() function
  function keyUp(event) {
    calculateNumericOutput();
  }
  
  function calculateNumericOutput() {
    student.name = document.getElementById('name').value;
  
    var totalNameValue = 0;
    for (var i = 0; i < student.name.length; i++) {
      totalNameValue += student.name.charCodeAt(i);
    }
  
    // Insert result into page
    var output = "Total Numeric value of person's name is " + totalNameValue;
    //sets the text box with output id with the value output calculated above
    document.getElementById('output').innerText = output;
  }