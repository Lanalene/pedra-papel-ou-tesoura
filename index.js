// queryselector= Retorna o primeiro elemento descendente do elemento em que a função 
//foi invocada e que corresponde aos seletores especificado.

const pedraElement = document.querySelector("button[name=pedra]")
const papelElement = document.querySelector("button[name=papel]")
const tesouraElement = document.querySelector("button[name=tesoura]")
const jogadorElement = document.querySelector("img[name=jogador]")
const botElement = document.querySelector("img[name=bot]")
const score1Element = document.querySelector("#score1")
const score2Element = document.querySelector("#score2")
const resultElement = document.querySelector("p[name=result]")
// Itens do jogo
// Sendo 1 = Pedra, 2 = Papel e 3 = Tesoura
const itens = ["Pedra", "Papel", "Tesoura"]

let contadorJogador = 1
let contadorPc = 1
// score= numero de pontos.
function alterarScore(){
    score1Element.innerHTML = `${contadorJogador}`
    score2Element.innerHTML = `${contadorPc}`
}
// Adicionando eventos de click
papelElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'images/incon-paper.png'
    switch(bot){
        case 1:
            botElement.src = 'images/incon-pedra.png'
            resultElement.innerHTML = "Resultado: É ISSO AÍ!!! :D"
            contadorJogador++
            break
        case 2:
            botElement.src = 'images/incon-paper.png'
            resultElement.innerHTML = "Resultado: EMPATOU :("
            break
        case 3:
            botElement.src = 'images/iconn-tesoura.png'
            resultElement.innerHTML = "Resultado: Não foi dessa vez... D:"
            contadorPc++
            break
    }
    alterarScore()
})

tesouraElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'images/iconn-tesoura.png'
    switch(bot){
        case 1:
            botElement.src = 'images/incon-paper.png'
            resultElement.innerHTML = "Resultado: Parabéns!!! :D"
            contadorJogador++
            break
        case 2:
            botElement.src = 'images/incon-pedra.png'
            resultElement.innerHTML = "Resultado: Você Perdeu... D:"
            contadorPc++
            break
        case 3:
            botElement.src = 'images/iconn-tesoura.avif'
            resultElement.innerHTML = "Resultado: EMPATOU... :("
            break
    }
    alterarScore()
})

pedraElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'images/incon-pedra.png'
    switch(bot){
        case 1:
            botElement.src = 'images/incon-pedra.png'
            resultElement.innerHTML = "Resultado: EMPATOU... :("
            
            break
        case 2:
            botElement.src = 'images/incon-paper.png'
            resultElement.innerHTML = "Resultado: Você Perdeu... D:"
            contadorPc++
            break
        case 3:
            botElement.src = 'images/iconn-tesoura.png'
            resultElement.innerHTML = "Resultado: Você venceu!!!:D"
            contadorJogador++
            break
    
    }
    alterarScore()
})