import readlineSync from "readline-sync";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { setTimeout as pause } from "timers/promises";
import figlet from "figlet";
import gradient from "gradient-string";
import { createSpinner } from "nanospinner";
// 🪙 🧸ྀི ℹ️ ١٥٧٤♡ money💸.𓆝 𓆟 𓆞 𓆝 𓆟(づ ᴗ _ᴗ)づ♡༘⋆😍⭐💱💲 🤑💰💸💲🧠
// 🏦🏧💳💵
// 💵💸💰💲🎁💴💶💯

const benutzer = [
  { benutzername: "benutzer1", pin: "1234", guthaben: 1000, transaktionen: [] },
  { benutzername: "benutzer2", pin: "5678", guthaben: 500, transaktionen: [] },
];

let aktuellerBenutzer = null;

// Funktion zum Ausloggen des Benutzers
function ausloggen() {
  // Starten des Ausloggen-Spinners
  const spinner = createSpinner("Abmelden...").start();
  setTimeout(() => {
    // Stoppen des Spinners nach 1 Sekunde
    spinner.stop();
    // Ausloggen erfolgreich, Benutzer auf null setzen und zurück zum Login
    console.log(chalk.yellow("Abgemeldet."));
    aktuellerBenutzer = null;
    loginDe();
  }, 1000);
}

// Funktion zum Beenden des Programms
function programmBeenden() {
  // Starten des Beenden-Spinners
  const spinner = createSpinner("Beenden...").start();
  setTimeout(() => {
    // Stoppen des Spinners nach 1 Sekunde
    spinner.stop();
    // Programm beendet
    console.log(chalk.yellow("Sie haben das Programm verlassen."));
    process.exit(0);
  }, 1000);
}

export default function loginDe() {
  const benutzername = readlineSync.question("Benutzername eingeben: ");

  if (benutzername.toLowerCase() === "exit") {
    console.log(chalk.yellow("Beenden..."));
    process.exit(0);
  }

  const pin = readlineSync.question("PIN eingeben: ", { hideEchoBack: true });

  if (pin.toLowerCase() === "exit") {
    console.log(chalk.yellow("Beenden..."));
    process.exit(0);
  }

  // Überprüfen, ob die Benutzerdaten gültig sind
  aktuellerBenutzer = benutzer.find(
    (benutzer) => benutzer.benutzername === benutzername && benutzer.pin === pin
  );
  if (aktuellerBenutzer) {
    // Login erfolgreich
    console.log(chalk.green(`Willkommen, ${aktuellerBenutzer.benutzername}!`));
    console.log(`
───────────────────────────────────────────────
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣿⣿⣷⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⣿⣿⣿⣿⣿⠋⣉⣉⠙⣿⣿⣿⣷⣦⣀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⠀⣿⣿⣿⣿⣿⣿⣶⣤⡀⠀

     Willkommen, ${chalk.green(aktuellerBenutzer.benutzername)}
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
───────────────────────────────────────────────
`);
    hauptmenü();
  } else {
    console.log(
      chalk.red(
        "❌ Ungültiger Benutzername oder PIN. Bitte versuchen Sie es erneut."
      )
    );
    loginDe();
  }
}

function hauptmenü() {
  console.log(`
\nHauptmenü 🏧:
1. Kontostand prüfen 
2. Geld einzahlen 
3. Geld abheben 
4. Geld überweisen 
5. Transaktionshistorie anzeigen 
6. Abmelden
7. Beenden`);

  const auswahl = readlineSync.questionInt("Ihre Auswahl eingeben: ");

  if (auswahl === 1) {
    kontostandPrüfen();
  } else if (auswahl === 2) {
    geldEinzahlen();
  } else if (auswahl === 3) {
    geldAbheben();
  } else if (auswahl === 4) {
    geldÜberweisen();
  } else if (auswahl === 5) {
    transaktionshistorieAnzeigen();
  } else if (auswahl === 6) {
    console.log(chalk.yellow("Abmelden..."));
    ausloggen();
  } else if (auswahl === 7) {
    console.log(chalk.yellow("Beenden..."));
    programmBeenden();
  } else {
    console.log(chalk.red("Ungültige Auswahl. Bitte versuchen Sie es erneut."));
    hauptmenü();
  }
}

function kontostandPrüfen() {
  console.log(chalk.green(`Ihr Kontostand: $${aktuellerBenutzer.guthaben}`));
  hauptmenü();
}

function geldEinzahlen() {
  const betragEingabe = readlineSync.question(
    "Betrag zum Einzahlen eingeben: $"
  );

  if (betragEingabe.toLowerCase() === "exit") {
    console.log(chalk.yellow("Beenden..."));
    hauptmenü();
  }

  const betrag = parseInt(betragEingabe);

  if (isNaN(betrag)) {
    console.log(
      chalk.red(
        '❌ Ungültige Eingabe. Bitte geben Sie eine gültige Zahl oder "exit" ein.'
      )
    );
    hauptmenü();
    return;
  }

  if (betrag <= 0) {
    console.log(chalk.red("❌ Ungültiger Betrag. Einzahlung fehlgeschlagen."));
    hauptmenü();
    return;
  }

  aktuellerBenutzer.guthaben += betrag;
  aktuellerBenutzer.transaktionen.push({
    typ: "Einzahlung",
    betrag,
    datum: new Date(),
  });
  console.log(chalk.green("√ Einzahlung erfolgreich."));
  hauptmenü();
}

function geldAbheben() {
  const betragStr = readlineSync.question(
    "Geben Sie den abzuhebenden Betrag ein: $"
  );

  if (betragStr.toLowerCase() === "exit") {
    console.log(chalk.yellow("Beenden..."));
    hauptmenü();
  }

  const betrag = parseFloat(betragStr); // parseInt

  if (isNaN(betrag) || betrag <= 0) {
    console.log(chalk.red("❌ Ungültiger Betrag. Abhebung fehlgeschlagen."));
    hauptmenü();
    return;
  }

  if (betrag > aktuellerBenutzer.guthaben) {
    console.log(chalk.red("❌ Unzureichendes Guthaben."));
  } else {
    aktuellerBenutzer.guthaben -= betrag;
    aktuellerBenutzer.transaktionen.push({
      typ: "Abhebung",
      betrag,
      datum: new Date(),
    });
    console.log(chalk.green("√ Abhebung erfolgreich."));
  }

  hauptmenü();
}

function geldÜberweisen() {
  function formatiereFormularfeld(label, wert) {
    const maxLabelLänge = 22; // Maximale Länge für das Label
    const labelMitPadding = label + ":".padEnd(maxLabelLänge - label.length);
    return `| ${labelMitPadding} ${wert.padEnd(47 - maxLabelLänge, "_")}   |`;
  }

  // const empfängerBenutzernamePlatzhalter = '[__________________________]';
  // const zweckPlatzhalter = '[_________________________]';

  const empfängerBenutzername = readlineSync.question(
    "Geben Sie den Benutzernamen des Empfängers ein: "
  );

  if (empfängerBenutzername.toLowerCase() === "exit") {
    console.log(chalk.yellow("Beenden..."));
    hauptmenü();
    return;
  }

  const empfänger = users.find(
    (benutzer) => benutzer.benutzername === empfängerBenutzername
  );

  if (!empfänger) {
    console.log(chalk.red("Empfänger nicht gefunden."));
    hauptmenü();
    return;
  }

  const zweck = readlineSync.question(
    "Geben Sie den Zweck der Überweisung ein: "
  );
  const betragStr = readlineSync.question(
    "Geben Sie den zu überweisenden Betrag ein: $"
  );

  if (betragStr.toLowerCase() === "exit") {
    console.log(chalk.yellow("Beenden..."));
    hauptmenü();
    return; // Hier, wenn es ein Problem gibt!
  }

  const betrag = parseFloat(betragStr);

  if (isNaN(betrag) || betrag <= 0) {
    console.log(chalk.red("Ungültiger Betrag. Überweisung fehlgeschlagen."));
    hauptmenü();
    return;
  }

  //----------------------------------------
  if (betrag > aktuellerBenutzer.guthaben) {
    console.log(chalk.red("Unzureichendes Guthaben."));
    hauptmenü();
    return;
  }

  const spinner = createSpinner("Überweise Geld...").start();

  setTimeout(() => {
    // Geld überweisen
    aktuellerBenutzer.guthaben -= betrag;
    empfänger.guthaben += betrag;

    // Transaktion aufzeichnen
    aktuellerBenutzer.transaktionen.push({
      typ: "Überweisung (aus)",
      betrag: -betrag,
      datum: new Date(),
      empfänger: empfängerBenutzername,
      zweck: zweck,
    });

    empfänger.transaktionen.push({
      typ: "Überweisung (ein)",
      betrag: +betrag,
      datum: new Date(),
      absender: aktuellerBenutzer.benutzername,
      zweck: zweck,
    });

    spinner.stop();

    const formular = [
      `Geld Überweisen:`,

      `  __________________________________________________ `,
      `//                                                  \\  `,
      `|   Überweisungsformular                              |`,
      `|____________________________________________________|`,
      formatiereFormularfeld("Empfänger Benutzername", empfänger.benutzername),
      `|                                                    |`,
      formatiereFormularfeld("Zweck der Überweisung", zweck),
      `|                                                    |`,
      formatiereFormularfeld("Betrag der Überweisung", "$" + betrag.toFixed(2)),
      `|____________________________________________________|`,
      `|                                                    |`,
      `| [Absenden]                                         |`,
      `|____________________________________________________|`,
    ];

    console.log(chalk.green("Überweisung erfolgreich."));
    console.log(formular);
    hauptmenü();
  }, 2000);
}

function transaktionshistorieAnzeigen() {
  console.log(chalk.green("\nTransaktionsverlauf:"));
  aktuellerBenutzer.transaktionen.forEach((transaktion) => {
    console.log(
      `${transaktion.datum} - ${transaktion.typ}: $${transaktion.betrag}`
    );
    // toLocalString() oder toString()
  });
  hauptmenü();
}
