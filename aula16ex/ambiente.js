let num = document.querySelector('input#fnum');
let list = document.getElementById('tablist');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n))!= -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    } else if (num.value.length == 0) {
        alert('Por favor insira um valor!')
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Por favor insira ao menos um valor antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos]< menor)
                menor = valores[pos]
        }
        media = soma/valores.length
        res.innerHTML =''
        res.innerHTML += `<p>Ao todo, temos ${tot} número cadastrados`
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior}`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}`
        res.innerHTML += `<p>A soma dos valores cadastrados foi ${soma}`
        res.innerHTML += `<p>A media dos valores cadastrados foi ${Number(media.toFixed(2))}`
    }
}