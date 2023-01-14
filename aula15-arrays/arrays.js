let num = [5, 8, 2, 9, 3]
num.push(1)// adiciona o valor dentro dos () no final da array
num.sort() //reorganiza a array em ordem crescente de valores
console.log(num)
console.log(`O vetor tem ${num.length} posições`)



/* for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor igual a ${num[pos]}`)
}*/

/* for (let pos in num) {
    console.log(num[pos])
} método de repetição para arrays que é uma forma mais simplificada */

let pos = num.indexOf(3)
    if (pos == -1) {
        console.log('O valor não foi encontrado')
    } else {
        console.log(`O valor 3 está na posição ${pos}`)
    }
//indica a posição que o valor digitado entre parentêses se encontra. Caso o valor não seja encontrado o console irá retornar o valor de -1(que significa que o valor não foi encontrado)

