// function MultiplicaNumeros() {
//     let n1 = 2;
//     let n2 = 3;

//     console.log(n1 * n2);
//     // + (sonma) - (subtração)
//     // * (multiplicação) / (divisão)
//     // ^ (potencia) % (sobra de divisão)
// }

// MultiplicaNumeros();

// function MultiplicaComParametros(v1, v2) {
//     console.log(v1 , " x " , v2 , " = ", v1 * v2)
// }

// MultiplicaComParametros(6, 9);
// MultiplicaComParametros(2, 2);
// MultiplicaComParametros(6, 7);

// function EquacaoDeBurrinho(x, y, z) {
//     let resultado = (x + y) / z;
//     return resultado;
// }

// console.log(EquacaoDeBurrinho(2,3,5));


const EquacaoDeTontinho = (x, y, z, w) => {
    return (x+y)*(z+w)/2;
}

console.log("O resultado é: ", EquacaoDeTontinho(3,5,8,13));
