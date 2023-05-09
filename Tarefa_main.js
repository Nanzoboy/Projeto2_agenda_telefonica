const form = document.getElementById('form')
const nome = []
const tel = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    addLinha()
    atualizaTabela()
})
function addLinha(){
    const inputName = document.getElementById('input-name')
    const inputTel = document.getElementById('input-tel')

    nome.push(inputName.value)
    tel.push(inputTel.value)

    let linha = '<tr>'
    linha += `<td>${inputName.value}</td>`
    linha += `<td>${inputTel.value}</td>`
    linha += '</tr>'

    linhas += linha

    let total = document.getElementById('qtdContato')
    total.innerHTML = nome.length

    inputName.value = ''
    inputTel.value = ''
}
function atualizaTabela(){
    const listaContatos = document.querySelector('tbody')
    listaContatos.innerHTML = linhas
}





/*function totalContatos(){
    let somaContatos = 0
    for(let i = 0; i < nome.length; i++){
        somaContatos += nome[i]
    }
    return somaContatos + nome.length
}

function qtdContatos(){
    const montante = totalContatos()
    document.getElementById('qtdContato').innerHTML = montante
}
function somar(){
    let contatos = document.getElementById('input-name').value
    let soma = 0
    for(let i = 0; i < contatos.length; i++){
        soma += parseInt(contatos[i])
    }
    document.getElementById('qtdContato').innerHTML = soma
}
*/