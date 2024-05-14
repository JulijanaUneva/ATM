import readlineSync from "readline-sync";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { setTimeout as pause } from "timers/promises";
import figlet from "figlet";
import gradient from "gradient-string";
import { createSpinner } from "nanospinner";
import loginDe from "./main-de.js";
import iniciarSesion from "./main-e.js";
// 🪙 🧸ྀི ℹ️ ١٥٧٤♡ money💸.𓆝 𓆟 𓆞 𓆝 𓆟(づ ᴗ _ᴗ)づ♡༘⋆😍⭐💱💲 🤑💰💸💲🧠
// 🏦🏧💳💵
// 💵💸💰💲🎁💴💶💯

const users = [
  { username: "user1", pin: "1234", balance: 1000, transactions: [] },
  { username: "user2", pin: "5678", balance: 500, transactions: [] },
];

let currentUser = null;

// function logout() {
//     const spinner = createSpinner('Logging out...').start();
//     setTimeout(() => {
//         spinner.stop();
//         currentUser = null;
//         login();
//     }, 1000);
// }

function chooseLanguage() {
  console.log("Choose your language:");
  console.log("1. 🇺🇸 English");
  console.log("2. 🇩🇪 Deutsch");
  console.log("3. Espanol");

  const choice = readlineSync.questionInt("Enter your choice: ");

  if (choice === 1) {
    console.log("Starting English version...");
    login();
  } else if (choice === 2) {
    console.log("Starte deutsche Version...");
    loginDe();
  } else if (choice === 3) {
    console.log("Starte spanische Version...");
    iniciarSesion();
  } else {
    console.log("Invalid choice. Please enter 1 or 2.");
    chooseLanguage();
  }
}

chooseLanguage();

function logout() {
  const spinner = createSpinner("Logging out...").start();
  setTimeout(() => {
    spinner.stop();
    console.log(chalk.yellow("Log out"));
    currentUser = null;
    login();
  }, 1000);
}

// function exitProgram() {
//   const spinner = createSpinner("Exiting...").start();
//   setTimeout(() => {
//     spinner.stop();
//     console.log(chalk.yellow("You have exited the program."));
//     process.exit(0);
//   }, 1000);
// }

// function exitProgram() {
//     const spinner = createSpinner('Exiting...').start();
//     setTimeout(() => {
//         spinner.stop();
//         console.log(chalk.yellow('Exiting...'));
//         setTimeout(() => {
//             process.exit(0);
//         }, 1000);
//     }, 1000);
// }

function login() {
  const username = readlineSync.question("Enter username: ");

  // if (username.toLowerCase() === 'exit') {
  //     console.log(chalk.yellow('Exiting...'));
  //     process.exit(0);
  //     //exitProgram();
  // }

  if (username.toLowerCase() === "exit") {
    console.log(chalk.yellow("Exiting..."));
    // exitProgram();
    process.exit(0);
  }

  const pin = readlineSync.question("Enter PIN: ", { hideEchoBack: true });

  if (pin.toLowerCase() === "exit") {
    console.log(chalk.yellow("Exiting..."));
    process.exit(0);
    //exitProgram();
  }

  currentUser = users.find(
    (user) => user.username === username && user.pin === pin
  );
  if (currentUser) {
    console.log(chalk.green(`Welcome, ${currentUser.username}!`));
    console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣿⣿⣷⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⣿⣿⣿⣿⣿⠋⣉⣉⠙⣿⣿⣿⣷⣦⣀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⠀⣿⣿⣿⣿⣿⣿⣶⣤⡀⠀

         Welcome, ${chalk.green(currentUser.username)}
⠀
⠀⠀⠀⣤⣤⣤⣤⣤⡄⠀⠀⠀⢀⣠⣿⣿⣤⣤⣄⡀⠀⢠⣤⣤⣤⣤⣤⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⢀⣴⣿⡿⠛⠛⠛⠛⠛⠇⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⣸⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⣿⣿⠀⠀⠀⠀⢠⣤⣤⣤⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⢹⣿⣆⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠻⣿⣷⣤⣤⣤⣤⣾⣿⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠈⠙⣿⣿⠛⠛⠉⠁⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠛⠛⠛⠛⠛⠃⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠘⠛⠛⠛⠛⠛⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠉⠉⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀
⠀⢰⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⡆⠀
⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀
`);
    mainMenu();
  } else {
    console.log(chalk.red("❌ Invalid username or PIN. Please try again."));
    login();
  }
}

function mainMenu() {
  console.log(`
\nMain Menu 🏧:
1. Check Balance 
2. Deposit Funds 
3. Withdraw Funds 
4. Transfer Money 
5. View Transaction History 
6. Logout
7. Exit`);

  const choice = readlineSync.questionInt("Enter your choice: "); //Int

  if (choice === 1) {
    checkBalance();
  } else if (choice === 2) {
    depositFunds();
  } else if (choice === 3) {
    withdrawFunds();
  } else if (choice === 4) {
    transferMoney();
  } else if (choice === 5) {
    viewTransactionHistory();
  } else if (choice === 6) {
    console.log(chalk.yellow("Logging out..."));
    logout();
    // currentUser = null;
    // login();
  } else if (choice === 7) {
    console.log(chalk.yellow("Exiting..."));
    process.exit(0);
  } else {
    console.log(chalk.red("Invalid choice. Please try again."));
    mainMenu();
  }
}

function checkBalance() {
  console.log(chalk.green(`Your balance: $${currentUser.balance}`));
  mainMenu();
}

//--------------------------------

function depositFunds() {
  const amountInput = readlineSync.question("Enter the amount to deposit: $");

  if (amountInput.toLowerCase() === "exit") {
    console.log(chalk.yellow("Exiting..."));
    mainMenu();
  }

  const amount = parseInt(amountInput);

  if (isNaN(amount)) {
    console.log(
      chalk.red('❌ Invalid input. Please enter a valid number or "exit".')
    );
    mainMenu();
    return;
  }

  if (amount <= 0) {
    console.log(chalk.red("❌ Invalid amount. Deposit not successful."));
    mainMenu();
    return;
  }

  currentUser.balance += amount;
  currentUser.transactions.push({ type: "Deposit", amount, date: new Date() });
  console.log(chalk.green("√ Deposit successful."));
  mainMenu();
}

function withdrawFunds() {
  const amountStr = readlineSync.question("Enter the amount to withdraw: $");

  if (amountStr.toLowerCase() === "exit") {
    console.log(chalk.yellow("Exiting..."));
    mainMenu();
  }

  const amount = parseFloat(amountStr); //parseInt

  if (isNaN(amount) || amount <= 0) {
    console.log(chalk.red("❌ Invalid amount. Withdraw not successful."));
    mainMenu();
    return;
  }

  if (amount > currentUser.balance) {
    console.log(chalk.red("❌ Insufficient funds."));
  } else {
    currentUser.balance -= amount;
    currentUser.transactions.push({
      type: "Withdrawal",
      amount,
      date: new Date(),
    });
    console.log(chalk.green("√ Withdrawal successful."));
  }

  mainMenu();
}

function transferMoney() {
  function formatFormField(label, value) {
    const maxLabelLength = 22; // Max länge for the label
    const labelWithPadding = label + ":".padEnd(maxLabelLength - label.length);
    return `| ${labelWithPadding} ${value.padEnd(
      47 - maxLabelLength,
      "_"
    )}   |`;
  }

  //const recipientUsernamePlaceholder = '[__________________________]';
  //const purposePlaceholder = '[_________________________]';

  const recipientUsername = readlineSync.question("Enter recipient username: ");

  if (recipientUsername.toLowerCase() === "exit") {
    console.log(chalk.yellow("Exiting..."));
    mainMenu();
    return;
  }

  const recipient = users.find((user) => user.username === recipientUsername);

  if (!recipient) {
    console.log(chalk.red("Recipient not found."));
    mainMenu();
    return;
  }

  const purpose = readlineSync.question("Enter purpose of transfer: ");
  const amountStr = readlineSync.question("Enter the amount to transfer: $");

  if (amountStr.toLowerCase() === "exit") {
    console.log(chalk.yellow("Exiting..."));
    mainMenu();
    // return; // wenn es gibt problem, hier!
  }

  const amount = parseFloat(amountStr);

  if (isNaN(amount) || amount <= 0) {
    console.log(chalk.red("Invalid amount. Transfer not successful."));
    mainMenu();
    // return;
  }

  //----------------------------------------
  if (amount > currentUser.balance) {
    console.log(chalk.red("Insufficient funds."));
    mainMenu();
    //return;
  }

  const spinner = createSpinner("Transferring funds...").start();

  setTimeout(() => {
    // !Transfer funds
    currentUser.balance -= amount;
    recipient.balance += amount;

    // ! Record transaction
    currentUser.transactions.push({
      type: "Transfer (out)",
      amount: -amount,
      date: new Date(),
      recipient: recipientUsername,
      purpose: purpose,
    });

    recipient.transactions.push({
      type: "Transfer (in)",
      amount: +amount,
      date: new Date(),
      sender: currentUser.username,
      purpose: purpose,
    });

    spinner.stop();

    const form = [
      `Transfer Money:`,

      `  __________________________________________________ `,
      `//                                                  \\  `,
      `|   Transfer Money Form                              |`,
      `|____________________________________________________|`,
      formatFormField("Recipient Username", recipient.username),
      `|                                                    |`,
      formatFormField("Purpose of Transfer", purpose),
      `|                                                    |`,
      formatFormField("Amount to Transfer", "$" + amount.toFixed(2)),
      `|____________________________________________________|`,
      `|                                                    |`,
      `| [Submit]                                           |`,
      `|____________________________________________________|`,
    ];

    console.log(chalk.green("Transfer successful."));
    console.log(form);
    mainMenu();
  }, 2000);
}

// const amountPlaceholder = `[${amount}____________________]`;

function viewTransactionHistory() {
  console.log(chalk.green("\nTransaction History:"));
  currentUser.transactions.forEach((transaction) => {
    console.log(
      `${transaction.date} - ${transaction.type}: $${transaction.amount}`
    );
    //toLocalString()  oder toString()
  });
  mainMenu();
}

chooseLanguage();
