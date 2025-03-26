


 

<a name="readme-top"></a>
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li><a href="#build-with">Build with</a>
      <ul>
        <li><a href="#technology-stack">Technology Stack</a></li>
      </ul>
       </li>
      <li>
      <a href="#getting-started">Getting Startet</a>
         <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



## About The Project

payFriend ATM Application

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Welcome to the payFriend ATM Application! This console-based application simulates basic ATM functionalities, allowing users to log in, check their balance, deposit and withdraw funds, transfer money, and view their transaction history.

<a name="features"></a>

### ✨ Features:
* Multi-language Support: Users can choose between English, German, and Spanish for their interface language.
* User Authentication: Secure login using a username and PIN.
* Account Management:
  * Check account balance
  * Deposit funds
  * Withdraw funds
  * Transfer money to other users
* Transaction History: View detailed transaction history for all activities.
* User-friendly Interface: Interactive and intuitive console-based navigation.
* Logout and Exit Options: Users can securely log out or exit the application at any time.

---

<a name="build-with"></a>
### 🛠️ Built With

<a name="technology-stack"></a>

Technology Stack

* JavaScript: Core language used for application logic.
* readline-sync: For synchronous input from the user via the command line.
* chalk: For adding colors and styling to the console output.
* figlet: For creating ASCII art for the welcome message.
* gradient-string: For adding gradient colors to text.
* nanospinner: For showing spinners during operations like login and money transfer.
* timers/promises: For adding delays and simulating wait times.

---

<a name="getting-started"></a>

## 🚀 Getting Startet 



Before you start, make sure you have the following installed:

<a name="prerequisites"></a>

### Prerequisites

Before you start, make sure you have the following installed:

Node.js (v14 or later)
npm (Node package manager)

***
<a name="installation"></a>

### 📂 Clone the project from GitHub and open it in VS Code

Follow these steps to download and open the project:

1. Open the terminal and run the following command:

    ```sh
   git clone https://github.com/JulijanaUneva/ATM.git

2. Enter the "ATM" directory
   ```sh
   cd ATM

3. Navigate into the "code"
    ```sh
    cd code .

5. Install the dependencies:
    ```sh
   npm install
6. Run the application:
   ```sh
   node main.js

---
<a name="usage"></a>

## ⚙️ Usage

Upon running, you will be prompted to choose your preferred language.
Follow the on-screen instructions to log in using your username and PIN.
Once logged in, you can navigate through the main menu to perform various banking operations.

User Accounts <br>

The application comes with pre-configured user accounts for testing: <br>

-Username: Julijana Uneva, PIN: 1234 <br>

-Username: Markus Steck, PIN: 5678 <br>

Feel free to modify the users array in the code to add more test users or change the existing ones.


---

<a name="roadmap"></a>

## 🗺️ Roadmap

- main.js: main entry point of the application. This file contains the core logic and initialization of the application, available in English for the user.
- main-de.js, main-e.js: Language-specific modules for German and Spanish respectively.
- users: an array containing user data including username, PIN, balance, and transaction history.
- transaction form: a form displaying transaction details in ASCII art.

[Back to top](#readme-top)




