

function playCalculator(victory, defeat) {
    return victory - defeat; 
}

let rankeadas = playCalculator(100, 7)

if (rankeadas < 10) {
    let nivel = "Ferro";
    console.log(`O heóri tem saldo de ${rankeadas} e está no nível ${nivel}!`);
} else if (rankeadas >= 11 && rankeadas <= 20) {
    let nivel = "Bronze";
    console.log(`O heóri tem saldo de ${rankeadas} e está no nível ${nivel}!`);
} else if (rankeadas >= 21 && rankeadas <= 50) {
    let nivel = "Prata";
    console.log(`O heóri tem saldo de ${rankeadas} e está no nível ${nivel}!`);
} else if (rankeadas >= 51 && rankeadas <= 80) {
    let nivel = "Ouro";
    console.log(`O heóri tem saldo de ${rankeadas} e está no nível ${nivel}!`);
} else if (rankeadas >= 81 && rankeadas <= 90) {
    let nivel = "Diamante";
    console.log(`O heóri tem saldo de ${rankeadas} e está no nível ${nivel}!`);
} else if (rankeadas >= 91 && rankeadas <= 100) {
    let nivel = "Lendário";
    console.log(`O heóri tem saldo de ${rankeadas} e está no nível ${nivel}!`);
} else if (rankeadas >= 101) {
    let nivel = "Imortal";
    console.log(`O heóri tem saldo de ${rankeadas} e está no nível ${nivel}!`);
} else {
    console.log("Informações inválidas!")
}