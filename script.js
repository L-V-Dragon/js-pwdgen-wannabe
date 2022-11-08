let nome = prompt("Inserisci il nome");
let cognome = prompt("Inserisci il cognome");
let colore = prompt("Inserisci il tuo colore preferito");
let num1 = prompt("Inserisci un numero");
let num2 = prompt("Inserisci un altro numero");

div = num1 / num2;


console.log(
    `
        Log: ${nome}${cognome}${colore}${div}
    `
);

document.getElementById("log").innerHTML = nome+cognome+colore+div;
