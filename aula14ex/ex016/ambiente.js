function contar () {
    //inicio da 1ª etapa
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let pass = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    //fim da 1ª etapa

    //inicio da 2ª etapa
    //inicio de [1]
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) { //var.value.length == 0 significa caixa de input vazia
        alert('[ERRO]! Faltam dados!')
        res.innerHTML = 'Impossível contar'
    // fim de [1]
    //inicio de [2]
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
    //fim de [2]    
    //fim da 2ª etapa
        //EXTRA: Caso o passo seja definido como 0 o programa irá exibir um alerta que o passo é inválido e considerar passo = 1
        if (p == 0) {
            window.alert('Passo inválido. Considerando Passo 1')
            p = 1
        }
        //inicio da 3ª Etapa
        if (i < f) { //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML +=` ${c} \u{1F449}`
        }
        } else { //contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    } //fim da 3ªetapa
}

/* ETAPAS:
1º receber os valores do inputHTML e colocar dentro de uma variável

2º dentro de uma estrutura condicional -
    [1] se uma das caixas não contiver dados digitados exibir mensagem de erro
    [2] Definir variaveis para receber os valores numéricos da 1º etapa 

3º: Criar uma estrutura if para contar crescente e em seguida decrescente
*/
