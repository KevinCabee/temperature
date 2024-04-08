console.log("Calculator")

function calculate() {
    //body of function
    var number1 = Number(prompt("Enter the first number"));
    var number2 = Number(prompt("Enter the second number"));

    var option = prompt("Entrer the oprion: 1)Sum, 2) Sub, 3)Multiplication, 4)Division");

    //if(option == 1){
    //     console.log(number1+number2); //math operation
    // }

    // if(option == 2){
    //    console.log(number1-number2); 
    // }

    //if(option == 3){
    //    console.log(number1*number2); 
    // }

    //if(option == 4){
    //   console.log(number1/number2); 
    // }

    switch(option == 1){
        case "1":
            console.log(number1+number2);
            break;
    }

    switch(option == 2){
        case "2":
            console.log(number1-number2);
            break;
    }

    switch(option == 3){
        case "3":
            console.log(number1*number2);
            break;
    }

    switch(option ==4){
        case "4":
            console.log(number1/number2);
            break;
    }


} //end of calculate function

