const readline=require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Factorial Application");
console.log("------------------------------");
console.log("1. Say Hello");
console.log("2. Factorial");
console.log("3. Exit Application");
console.log("------------------------------");

r1.question("enter your choice (1-3): ", choice =>{
    console.log(choice);

if (choice === "1"){
    console.log("Hello");
} else if (choice === "2"){
    console.log("Factorial");
} else if (choice === "3"){
    console.log("Exiting Application");
} else {
    console.log("Invalid Choice. Please Try Again");
}

})

    r1.question("Please enter a number for factorial: ", numStr =>{
        let num = parseInt(numStr);

        if (isNaN(num) || num < 0){
            console.log("Please enter a non-negative integer");
        } else {
            let fact = 1;

            for (let i=1; i <= num; i++){
                fact *=1;
        }
        
        console.log("The Factorial of " + num + " is " + fact);
    }
    })