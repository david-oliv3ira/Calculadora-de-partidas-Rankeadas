const nome = "David";
const vitoria = 200
const derrota = 5
const saldoVitorias = vitoria - derrota;

function apurador(vitoria, derrota) {

    const saldo = vitoria - derrota;   
    
    if (vitoria <= 10) {
        resultado = "Ferro";
    } else if (vitoria >= 11 && vitoria <= 20) {
        resultado = "Bronze";
    } else if (vitoria >= 21 && vitoria <= 50) {
        resultado = "Prata";
    } else if (vitoria >= 51 && vitoria <= 80) {
        resultado = "Ouro";
    } else if (vitoria >= 81 && vitoria <= 90) {
        resultado = "Diamante";
    } else if (vitoria >= 91 && vitoria <= 100) {
        resultado = "Lendário";
    } else if (vitoria >= 101) {
        resultado = "Imortal";
    }
    return resultado;
    }
    
const saldoRankeadas = apurador (vitoria, derrota);

console.log(`O Herói ${nome} tem saldo de vitórias de ${saldoVitorias} está no nível ${saldoRankeadas}`)