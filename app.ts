#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 4321;
let pinAnswer =await inquirer.prompt(
[
{
    name: "q1",
    message: "entre your pin",
    type: "number",
    }
]
)
if (pinAnswer.q1 === myPin) {
    console.log("Correct pin..");
}
let operationAns = await inquirer.prompt(
    [
        {
            name: "operation",
            message:"please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fastCash"]
        }
    ]
);
console.log(operationAns);

if (operationAns.operation === "withdraw") {
let amountAns = await inquirer.prompt(
    [
        {
            name:"amount",
            message: "entre your amount",
            type: "number",
        }
    ]
);

myBalance -= amountAns.amount;

console.log("Your remaining balance is: " + myBalance)

} else if (operationAns.operation === "check balance"){
    console.log("your balance is:" + myBalance)

} else if (operationAns.operation === "fastCash"){
    let fastCashAns = await inquirer.prompt(
        [
        { name:"fastCash",
          message:"please select your fastCash amount",
          type:"list",
          choices:[1000,2000,3000,4000,5000,9000]

    }
]
    );
    myBalance -= fastCashAns.fastCash;
    console.log("your remaining balance is:" +myBalance);
    
}


 else {
    console.log("Incorrect pin..")
 }