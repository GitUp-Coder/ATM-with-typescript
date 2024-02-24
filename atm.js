import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userid",
        message: "Kindly enter your id:",
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly enter your pin:",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current", "saving"],
        message: "selact your account type",
    },
    {
        type: "list",
        name: "transectionType",
        choices: ["Fast cash", "withdrawl"],
        message: "selact your transection",
        when(answers) {
            return answers.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 20000],
        message: "selact your ammount",
        when(answers) {
            return answers.transectionType == "Fast cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "selact your ammount",
        when(answers) {
            return answers.transectionType == "withdrawl";
        },
    }
]);
if (answers.userid && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("your remaining balance is ", remaining);
    }
    else {
        console.log("your ammount is invalid");
    }
}
