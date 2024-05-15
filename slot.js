import readlineSync from "readline-sync";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { setTimeout as pause } from "timers/promises";
import figlet from "figlet";
import gradient from "gradient-string";
import { createSpinner } from "nanospinner";

//const readlineSync = require("readline-sync");

// Emoji-Icons für die Symbole
const lemon = "🍋";
const cherry = "🍒";
const bar = "🍀";

// Funktion für das Drehen der Rollen
function spin() {
  const symbols = [lemon, cherry, bar];
  const result = [];

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    result.push(symbols[randomIndex]);
  }

  return result;
}

// Funktion zur Überprüfung des Gewinns
function checkWin(rolls) {
  const lemonWin = rolls.every((symbol) => symbol === lemon);
  return lemonWin;
}

// Funktion zum Ausführen des Spiels
function play() {
  console.log("Willkommen zur Slot-Maschine!");
  console.log("Drücke Enter, um zu drehen.");
  readlineSync.keyInPause();

  const rolls = spin();

  // Ausgabe der Slot-Maschine
  console.log("\n╔═══╦═══╦═══╗");
  console.log(`║ ${rolls[0]} ║ ${rolls[1]} ║ ${rolls[2]} ║`);
  console.log("╚═══╩═══╩═══╝");

  // Überprüfung auf Gewinn
  if (checkWin(rolls)) {
    console.log("\n🎉 Herzlichen Glückwunsch! Du hast gewonnen! 🎉");
  } else {
    console.log("\n😞 Leider kein Gewinn. Versuche es erneut! 😞");
  }
}

// Spiel starten
play();
