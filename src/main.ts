let Alter: number = 19;

for (let i = 1; i <= Alter; i++) {
    console.log(i);
}

if (Alter > 18) {
    console.log("Das Alter ist größer als 18.");
} else {
    console.log("Das Alter ist nicht größer als 18.");
}

let score: number = 0;

if (score !== 0) {
    console.log("Score ist verfügbar.");
} else {
    console.log("Das ist nicht verfügbar");
}

if (score) {
    console.log("Score wird als wahr gewertet.");
} else {
    console.log("Score wird nicht als wahr gewertet.");
}

let Benutzername: string = "";

if (Benutzername !== "") {
    console.log("Benutzername ist verfügbar.");
}

if (!Benutzername) {
    console.log("Benutzername wird als falsch bewertet.");
}

let isAdmin: boolean = false;

if (isAdmin) {
    console.log("isAdmin wird als wahr bewertet.");
} else {
    console.log("isAdmin wird nicht als wahr bewertet.");
}


if (!isAdmin) {
    console.log("isAdmin ist falsch.");
}