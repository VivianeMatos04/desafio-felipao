function partidas (vitorias, derrotas) {
    let resultado = vitorias - derrotas
    return resultado
}
function rank(){
    let resultaRank = partidas(100, 15)
    let nivel = " "
    
    if (resultadoRank <= 10){
        nivel = "Ferro"  
    } else if (resultadoRank >11, <= 20){
        nivel = "Bronze"
    }else if (resultadoRank >21, <= 50){
        nivel = "Prata"
    }else if (resultadoRank >51, <= 80){
        nivel = "Ouro"
    }else if (resultadoRank >81, <= 90){
        nivel = "Diamante" 
    }else if (resultadoRank >91, <= 100){
        nivel = "Lendário"
    }else {
        nivel = "Imortal"
    }
    return ("O Herói tem saldo de Vitórias " resultado " e esta no nível " nivel)
} 