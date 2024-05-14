// 🪙 🧸ྀི ℹ️ ١٥٧٤♡ money💸.𓆝 𓆟 𓆞 𓆝 𓆟(づ ᴗ _ᴗ)づ♡༘⋆😍⭐💱💲 🤑💰💸💲🧠
// 🏦🏧💳💵
// 💵💸💰💲🎁💴💶💯

import readlineSync from "readline-sync";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { setTimeout as pause } from "timers/promises";
import figlet from "figlet";
import gradient from "gradient-string";
import { createSpinner } from "nanospinner";

const usuarios = [
  { nombreUsuario: "usuario1", pin: "1234", saldo: 1000, transacciones: [] },
  { nombreUsuario: "usuario2", pin: "5678", saldo: 500, transacciones: [] },
];

let usuarioActual = null;

function cerrarSesion() {
  const spinner = createSpinner("Cerrando sesión...").start();
  setTimeout(() => {
    spinner.stop();
    console.log(chalk.yellow("Sesión cerrada."));
    usuarioActual = null;
    iniciarSesion();
  }, 1000);
}

export default function iniciarSesion() {
  const nombreUsuario = readlineSync.question("Ingrese el nombre de usuario: ");

  if (nombreUsuario.toLowerCase() === "salir") {
    console.log(chalk.yellow("Saliendo del programa..."));
    process.exit(0);
  }

  const pin = readlineSync.question("Ingrese el PIN: ", { hideEchoBack: true });

  if (pin.toLowerCase() === "salir") {
    console.log(chalk.yellow("Saliendo del programa..."));
    process.exit(0);
  }

  usuarioActual = usuarios.find(
    (usuario) => usuario.nombreUsuario === nombreUsuario && usuario.pin === pin
  );

  if (usuarioActual) {
    console.log(chalk.green(`¡Bienvenido, ${usuarioActual.nombreUsuario}!`));
    console.log(`
───────────────────────────────────────────────
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣿⣿⣷⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⣿⣿⣿⣿⣿⠋⣉⣉⠙⣿⣿⣿⣷⣦⣀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⠀⣿⣿⣿⣿⣿⣿⣶⣤⡀⠀

    ¡Bienvenido, ${chalk.green(usuarioActual.nombreUsuario)}!
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
    menuPrincipal();
  } else {
    console.log(
      chalk.red(
        "❌ Nombre de usuario o PIN inválido. Por favor, inténtelo de nuevo."
      )
    );
    iniciarSesion();
  }
}

function menuPrincipal() {
  console.log(`
\nMenú Principal 🏧:
1. Consultar saldo
2. Depositar dinero
3. Retirar dinero
4. Transferir dinero
5. Ver historial de transacciones
6. Cerrar sesión
7. Salir del programa`);

  const opcion = readlineSync.questionInt("Ingrese su opción: ");

  if (opcion === 1) {
    consultarSaldo();
  } else if (opcion === 2) {
    depositarDinero();
  } else if (opcion === 3) {
    retirarDinero();
  } else if (opcion === 4) {
    transferirDinero();
  } else if (opcion === 5) {
    verHistorialTransacciones();
  } else if (opcion === 6) {
    console.log(chalk.yellow("Cerrando sesión..."));
    cerrarSesion();
  } else if (opcion === 7) {
    console.log(chalk.yellow("Saliendo del programa..."));
    salirDelPrograma();
  } else {
    console.log(chalk.red("Opción inválida. Por favor, inténtelo de nuevo."));
    menuPrincipal();
  }
}

function consultarSaldo() {
  console.log(chalk.green(`Su saldo actual: $${usuarioActual.saldo}`));
  menuPrincipal();
}

function depositarDinero() {
  const montoIngresado = readlineSync.question(
    "Ingrese el monto a depositar: $"
  );

  if (montoIngresado.toLowerCase() === "salir") {
    console.log(chalk.yellow("Saliendo del programa..."));
    menuPrincipal();
  }

  const monto = parseInt(montoIngresado);

  if (isNaN(monto)) {
    console.log(
      chalk.red(
        '❌ Entrada inválida. Por favor, ingrese un número válido o "salir".'
      )
    );
    menuPrincipal();
    return;
  }

  if (monto <= 0) {
    console.log(chalk.red("❌ Monto inválido. Depósito fallido."));
    menuPrincipal();
    return;
  }

  usuarioActual.saldo += monto;
  usuarioActual.transacciones.push({
    tipo: "Depósito",
    monto,
    fecha: new Date(),
  });
  console.log(chalk.green("√ Depósito exitoso."));
  menuPrincipal();
}

function retirarDinero() {
  const montoIngresado = readlineSync.question("Ingrese el monto a retirar: $");

  if (montoIngresado.toLowerCase() === "salir") {
    console.log(chalk.yellow("Saliendo del programa..."));
    menuPrincipal();
  }

  const monto = parseFloat(montoIngresado);

  if (isNaN(monto) || monto <= 0) {
    console.log(chalk.red("❌ Monto inválido. Retiro fallido."));
    menuPrincipal();
    return;
  }

  if (monto > usuarioActual.saldo) {
    console.log(chalk.red("❌ Saldo insuficiente."));
  } else {
    usuarioActual.saldo -= monto;
    usuarioActual.transacciones.push({
      tipo: "Retiro",
      monto,
      fecha: new Date(),
    });
    console.log(chalk.green("√ Retiro exitoso."));
  }

  menuPrincipal();
}

function transferirDinero() {
  function formatiereFormularfeld(label, wert) {
    const maxLabelLänge = 22; // Maximale Länge für das Label
    const labelMitPadding = label + ":".padEnd(maxLabelLänge - label.length);
    return `| ${labelMitPadding} ${wert.padEnd(40 - maxLabelLänge, "_")}   |`;
  }

  const nombreUsuarioDestino = readlineSync.question(
    "Ingrese el nombre de usuario del destinatario: "
  );

  if (nombreUsuarioDestino.toLowerCase() === "salir") {
    console.log(chalk.yellow("Saliendo del programa..."));
    menuPrincipal();
    return;
  }

  const destinatario = usuarios.find(
    (usuario) => usuario.nombreUsuario === nombreUsuarioDestino
  );

  if (!destinatario) {
    console.log(chalk.red("Destinatario no encontrado."));
    menuPrincipal();
    return;
  }

  const motivo = readlineSync.question(
    "Ingrese el motivo de la transferencia: "
  );
  const montoIngresado = readlineSync.question(
    "Ingrese el monto a transferir: $"
  );

  if (montoIngresado.toLowerCase() === "salir") {
    console.log(chalk.yellow("Saliendo del programa..."));
    menuPrincipal();
    return;
  }

  const monto = parseFloat(montoIngresado);

  if (isNaN(monto) || monto <= 0) {
    console.log(chalk.red("Monto inválido. Transferencia fallida."));
    menuPrincipal();
    return;
  }

  if (monto > usuarioActual.saldo) {
    console.log(chalk.red("Saldo insuficiente."));
    menuPrincipal();
    return;
  }

  const spinner = createSpinner("Transfiriendo dinero...").start();

  setTimeout(() => {
    usuarioActual.saldo -= monto;
    destinatario.saldo += monto;

    usuarioActual.transacciones.push({
      tipo: "Transferencia (salida)",
      monto: -monto,
      fecha: new Date(),
      destinatario: nombreUsuarioDestino,
      motivo: motivo,
    });

    destinatario.transacciones.push({
      tipo: "Transferencia (entrada)",
      monto: +monto,
      fecha: new Date(),
      remitente: usuarioActual.nombreUsuario,
      motivo: motivo,
    });

    spinner.stop();

    const formular = [
      `Transferir dinero:`,

      `  __________________________________________________ `,
      `//                                                  \\  `,
      `|   Formulario de Transferencia                       |`,
      `|____________________________________________________|`,
      formatiereFormularfeld(
        "Nombre de usuario del destinatario",
        nombreUsuarioDestino
      ),
      `|                                                    |`,
      formatiereFormularfeld("Propósito de la transferencia", motivo),
      `|                                                    |`,
      formatiereFormularfeld(
        "Cantidad de la transferencia",
        "$" + monto.toFixed(2)
      ),
      `|____________________________________________________|`,
      `|                                                    |`,
      `| [Enviar]                                           |`,
      `|____________________________________________________|`,
    ];

    console.log(chalk.green("Transferencia exitosa."));
    console.log(formular);
    menuPrincipal();
  }, 2000);
}

function verHistorialTransacciones() {
  console.log(chalk.green("\nHistorial de transacciones:"));
  usuarioActual.transacciones.forEach((transaccion) => {
    console.log(
      `${transaccion.fecha} - ${transaccion.tipo}: $${transaccion.monto}`
    );
  });
  menuPrincipal();
}
