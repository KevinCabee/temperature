//Enter celcius temperature and convert to Fahrenheit

function convertFahrenheit(){

    //Enter temperature in C° to convert to F°//

    var temperature = Number(prompt("Enter temperature in Celcius"));

    var Fahrenheit = (temperature * 9/5 + 32);

    var temperatureResult = document.getElementById("result");
    
    temperatureResult.innerHTML= `
    <p> The conversion of Celcius (${temperature}°) to Fahrenheit is (${Fahrenheit}° ) </p>
    `
}






/*Enter student infromation (name, grade101, grade102) and calculate and display the GPA


function getGPA(){
    1) get the name, grade1 and grade2
    var studentName = prompt("Enter student name");
    var grade1 = Number(prompt("Enter grade1"));
    var grade2 = Number(prompt("Enter grade2"));
    
    var gpa =(grade1+grade2)/2;

    var studentList = document.getElementById("students")

    studentList.innerHTML+= `
    <p> Name: ${studentName}</p>
    <p> Grade101: ${grade1}</p>
    <p> Grade102: ${grade2}</p>
    <p> GPA: ${gpa}</p>
    `



    <section>
        <h2>Functions</h2>
        <button class="btn" onclick="getGPA();">Calculate GAP</button>
        
        <h3>Student List</h3>
        <div id="students">
        </div>
        
        <script src="scripts/session2.js"></script>
    </section>
    
}
*/
