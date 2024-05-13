import readlineSync from "readline-sync"
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import {setTimeout as pause} from 'timers/promises';
import figlet from "figlet";
import gradient from "gradient-string";
import { createSpinner } from 'nanospinner';

//import chalk from "chalk";

// let yourName = readlineSync.question("What is your name?\n*");
// console.log(yourName)

//chalk

// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// console.log(`${chalk.blue('Hello')} World${chalk.red('!')}`);
// console.log(chalk.blue.bgRed.bold('Hello world!'));

// console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// console.log(chalk.hex('#DEADED').bold('Bold gray!'));

//rainbow

// const rainbow = chalkAnimation.rainbow('Willkommen auf mein Zahlenratenspiel!');
// await pause(3000);
// rainbow.stop();

//figlet


// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

//gradient-string

//import figlet from "figlet";  das habe ich schon


// const nachricht = "Hallo WebKids!"

// figlet(nachricht, (err, data) => {
//   console.log(gradient.instagram.multiline(data));
// });

//spinner


//import {setTimeout as pause} from 'timers/promises';

// const spinner = createSpinner('Testlauf').start();
// await pause(3000);
// spinner.success();

// const spinner1 = createSpinner('Noch ein Test').start()
// await pause(4000);
// spinner1.success()




const users = [
    { username: 'user1', pin: '1234', balance: 1000, transactions: [] },
    { username: 'user2', pin: '5678', balance: 500, transactions: [] }
];

let currentUser = null;

function login() {

    const username = readlineSync.question('Enter username: ');

    if (username.toLowerCase() === 'exit') {
        console.log(chalk.yellow('Exiting...'));
        process.exit(0); 
    }

    const pin = readlineSync.question('Enter PIN: ', { hideEchoBack: true });

    if (pin.toLowerCase() === 'exit') {
        console.log(chalk.yellow('Exiting...'));
        process.exit(0); 
    }

    currentUser = users.find(user => user.username === username && user.pin === pin);
    if (currentUser) {
        console.log(chalk.green(`Welcome, ${currentUser.username}!`));
        mainMenu();
    } else {
        console.log(chalk.red('Invalid username or PIN. Please try again.'));
        login();
    }
}

function mainMenu() {
    console.log(`
\nMain Menu:
1. Check Balance
2. Deposit Funds
3. Withdraw Funds
4. Transfer Money
5. View Transaction History
6. Logout
7. Exit`);
    
    const choice = readlineSync.questionInt('Enter your choice: ');//Int 
    
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
        console.log(chalk.yellow('Logging out...'));
        currentUser = null;
        login();
    } else if (choice === 7) {
        console.log(chalk.yellow('Exiting...'));
        process.exit(0); 
    } else {
        console.log(chalk.red('Invalid choice. Please try again.'));
        mainMenu();
    }
}


function checkBalance() {
    console.log(chalk.green(`Your balance: $${currentUser.balance}`));
    mainMenu();
}

//--------------------------------

function depositFunds() {
    const amountInput = readlineSync.question('Enter the amount to deposit: $');

    if (amountInput.toLowerCase() === 'exit') {
        console.log(chalk.yellow('Exiting...'));
        mainMenu(); 
    }

    const amount = parseInt(amountInput);

    if (isNaN(amount)) {
        console.log(chalk.red('Invalid input. Please enter a valid number or "exit".'));
        mainMenu();
        return;
    }

    if (amount <= 0) {
        console.log(chalk.red('Invalid amount. Deposit not successful.'));
        mainMenu();
        return;
    }

    currentUser.balance += amount;
    currentUser.transactions.push({ type: 'Deposit', amount, date: new Date() });
    console.log(chalk.green('√ Deposit successful.'));
    mainMenu();
}


function withdrawFunds() {
    const amountStr = readlineSync.question('Enter the amount to withdraw: ');

    if (amountStr.toLowerCase() === 'exit') {
        console.log(chalk.yellow('Exiting...'));
        mainMenu();
    }

    const amount = parseFloat(amountStr); //parseInt

    if (isNaN(amount) || amount <= 0) {
        console.log(chalk.red('Invalid amount. Withdraw not successful.'));
        mainMenu();
        return;
    }

    if (amount > currentUser.balance) {
        console.log(chalk.red('Insufficient funds.'));
    } else {
        currentUser.balance -= amount;
        currentUser.transactions.push({ type: 'Withdrawal', amount, date: new Date() });
        console.log(chalk.green('Withdrawal successful.'));
    }

    mainMenu();
}




// function transferMoney() {
//     const recipientUsername = readlineSync.question('Enter recipient username: ');
//     const recipient = users.find(user => user.username === recipientUsername);

//     if (!recipient) {
//         console.log(chalk.red('Recipient not found.'));
//         mainMenu();
//         //return;
//     }
//     if (amount <= 0) {
//         console.log(chalk.red('Invalid amount. Transfer not successful.'));
//         mainMenu();
//     }

//     const amount = readlineSync.questionFloat('Enter the amount to transfer: ');//Float

//     if (amount <= 0) {
//         console.log(chalk.red('Invalid amount.'));
//         mainMenu();
//         return;
//     }

//     if (amount > currentUser.balance) {
//         console.log(chalk.red('Insufficient funds.'));
//         mainMenu();
//         return;
//     }

//     // Transfer funds
//     currentUser.balance -= amount;
//     recipient.balance += amount;

//     // Record transaction
//     currentUser.transactions.push({ type: 'Transfer (out)', amount: -amount, date: chalk.green(new Date()) });
//     recipient.transactions.push({ type: 'Transfer (in)', amount: +amount, date: chalk.green(new Date()) });

//     console.log(chalk.green('Transfer successful.'));
//     mainMenu();
// }

//---------------------------------------------

// function transferMoney() {

//     const recipientUsername = readlineSync.question('Enter recipient username: ');

//     if (recipientUsername.toLowerCase() === 'exit') {
//         console.log(chalk.yellow('Exiting...'));
//         mainMenu(); 
//     }

//     const recipient = users.find(user => user.username === recipientUsername);

//     if (!recipient) {
//         console.log(chalk.red('Recipient not found.'));
//         mainMenu();
//         return;
//     }

//     const amountStr = readlineSync.question('Enter the amount to transfer: ');

//     if (amountStr.toLowerCase() === 'exit') {
//         console.log(chalk.yellow('Exiting...'));
//         mainMenu()
//     }

//     const amount = parseFloat(amountStr); 

//     if (isNaN(amount) || amount <= 0) {
//         console.log(chalk.red('Invalid amount. Transfer not successful.'));
//         mainMenu();
//         return;
//     }

//     if (amount > currentUser.balance) {
//         console.log(chalk.red('Insufficient funds.'));
//         mainMenu();
//         return;
//     }


//     // Transfer funds
//     currentUser.balance -= amount;
//     recipient.balance += amount;

//     // Record transaction
//     currentUser.transactions.push({ type: 'Transfer (out)', amount: -amount, date: new Date() });
//     recipient.transactions.push({ type: 'Transfer (in)', amount: +amount, date: new Date() });

//     console.log(chalk.green('Transfer successful.'));
//     mainMenu();
// }

//------------------------------------------------------------------

function transferMoney() {

    function formatFormField(label, value) {
        const maxLabelLength = 22; // Max länge for the label
        const labelWithPadding = label + ':'.padEnd(maxLabelLength - label.length);
        return `| ${labelWithPadding} ${value.padEnd(47 - maxLabelLength, '_')}   |`;
    }

    //const recipientUsernamePlaceholder = '[__________________________]';
    //const purposePlaceholder = '[_________________________]';

    const recipientUsername = readlineSync.question('Enter recipient username: ');

    if (recipientUsername.toLowerCase() === 'exit') {
        console.log(chalk.yellow('Exiting...'));
        mainMenu(); 
        return;
    }

    const recipient = users.find(user => user.username === recipientUsername);

    if (!recipient) {
        console.log(chalk.red('Recipient not found.'));
        mainMenu();
        return;
    }

    const purpose = readlineSync.question('Enter purpose of transfer: ');
    const amountStr = readlineSync.question('Enter the amount to transfer: ');

    if (amountStr.toLowerCase() === 'exit') {
        console.log(chalk.yellow('Exiting...'));
        mainMenu()
        return;   // wenn es gibt problem, hier!
    }

    const amount = parseFloat(amountStr); 

    if (isNaN(amount) || amount <= 0) {
        console.log(chalk.red('Invalid amount. Transfer not successful.'));
        mainMenu();
        return;
    }

    //----------------------------------------
    if (amount > currentUser.balance) {
                console.log(chalk.red('Insufficient funds.'));
                mainMenu();
                return;
            }
        
            
            // Transfer funds
            currentUser.balance -= amount;
            recipient.balance += amount;
        
            // Record transaction
            currentUser.transactions.push({ 
                type: 'Transfer (out)', 
                amount: -amount, 
                date: new Date(), 
                recipient: recipientUsername, 
                purpose: purpose 
            });
        
            recipient.transactions.push({ 
                type: 'Transfer (in)', 
                amount: +amount, 
                date: new Date(), 
                sender: currentUser.username, 
                purpose: purpose 
            });


    const form = [`Transfer Money:`, 
                                                                                                                                          
    `  __________________________________________________ `,
   `//                                                  \\  `,
   `|   Transfer Money Form                              |`,
   `|____________________________________________________|`,
    formatFormField('Recipient Username', recipient.username),         
   `|                                                    |`,
    formatFormField('Purpose of Transfer', purpose),                  
   `|                                                    |`,
    formatFormField('Amount to Transfer', '$' + amount.toFixed(2)),              
   `|____________________________________________________|`,
   `|                                                    |`,
   `| [Submit]                                           |`,
   `|____________________________________________________|`];
   
        
            console.log(chalk.green('Transfer successful.'));
            console.log(form)
            mainMenu();
        }
        
        //----------------------------------------------------------------------

   // const amountPlaceholder = `[${amount}____________________]`;


function viewTransactionHistory() {
    console.log(chalk.green('\nTransaction History:'));
    currentUser.transactions.forEach(transaction => {
        console.log(`${transaction.date} - ${transaction.type}: $${transaction.amount}`);
        //toLocalString()  oder toString()
    });
    mainMenu();
}


login();