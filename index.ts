#!/usr/bin/env node
import inquirer from "inquirer";
//for student 5 dijits unique Id
const randomNumber: number = Math.floor(10000 + Math.random() * 90000);
//for balance
let myBalance: number = 0;
console.clear();
console.log("  \n \t kshahmeer10-student-management_system\n".toUpperCase());

// for user input
let answer = await inquirer.prompt([
  {
    type: "input",
    name: "student",
    message: "Enter your name",
    validate: function (value) {
      if (value.trim()) {
        return true;
      } else {
        return "Please enter your name";
      }
    },
  },
  {
    name: "course",
    type: "list",
    message: "Choose your course",
    choices: ["MS OFFICE", "HTML", "CSS", "TYPESCRIPT"],
  },
]);
const tuitionFee: { [key: string]: number } = {
  "MS OFFICE": 1000,
  HTML: 2000,
  CSS: 3000,
  TYPESCRIPT: 4000,
};

console.log(`\n \tTuition fee: ${tuitionFee[answer.course]}\n`);
console.log(` \t Balance: ${myBalance}\n`);
//for payment
let paymentTypes = await inquirer.prompt([
  {
    name: "payment",
    type: "list",
    message: "Select payment method",
    choices: ["CASH", "BANK TRANSFER", "EASY PAISA", "JAZZCASH"],
  },
  {
    name: "amount",
    type: "input",
    message: "Enter amount",
    validate: function (value) {
      if (value.trim()) {
        return true;
      } else {
        return "Please enter amount";
      }
    },
  },
]);
console.log(`\n You Select payment: ${paymentTypes.payment}\n`);

const tuitionFees = tuitionFee[answer.course];
const paymentAmount = parseFloat(paymentTypes.amount);
if (tuitionFees===paymentAmount)
  {
    console.log(`Congratulation, you are successfully enroll in ${answer.course}\n`)
  let ans =await inquirer.prompt(
    [
      {
        name:"Select",
        type:"list",
        message:"Would you want to do next?",
        choices:["VIEW STATUS","EXIT"]
      }
    ]
  )
if (ans.Select === "VIEW STATUS"){
  console.clear();
  console.log(`\n *****************VIEW STATUS****************`);
  console.log(`Student name:${answer.student}`);
  console.log(`Student ID no:${randomNumber}`);
  console.log(`Course:${answer.course}`);
  console.log(`Tuition fee paid:${paymentAmount}`);
  console.log(`Balance:${myBalance += paymentAmount}`);
  
}else{`\n EXITING STUDENT MANAGMENT SYSTEM`}
  }else{
    console.log(`Sorry, you are not able to enroll in ${answer.course}\n \t Select right payment method`)
  }
