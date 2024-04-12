//for loop. Loops have initialization (start point), Condition (stop), Increment.


//for(let i=0;i<=5;i++){
//    console.log("Loop line" + i)
//}



// Excercise 1: Display numbers from 10 to 100

//for(let i=10;i<=100;i++){
//    console.log("Loop line" + i)
//}

//Excersise: Multiplication Table for X

// Use a for Loop to generate and display the multiplaciotn table for the nuber 5.
// Tha table shout include values from 1 to 100.
let number=prompt("Enter the number");
multiTable(number);

function multiTable(num){
    document.write(` Multiplicationb table x ${num} `);
    for(let i=1;i<=10;i++){
        document.write(`<p> ${i} x ${num} = ${i*num} </p>`)
    }
}
