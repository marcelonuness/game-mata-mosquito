
let altura = 0
let largura = 0
let vidas = 1
let tempo = 10
let cronometro = setInterval(function(){
	tempo -= 1
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById("cronometro").innerHTML = tempo
	}
	
}, 1000)
let nivel = window.location.search
nivel = nivel.replace('?', '')
let criaMosquitoTempo = 1500

if(nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris'){
	//750
	criaMosquitoTempo = 750
}

function ajustarTela() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustarTela()


function randomPosition() {
	let idmosquito = document.getElementById("mosquito")
	let posicaoX = Math.floor(Math.random() * largura) - 90
	let posicaoY = Math.floor(Math.random() * altura) - 90
	let mosquito = document.createElement('img')

	if (idmosquito) {
		idmosquito.remove()
		if(vidas > 3) {
			window.location.href = 'fim-de-jogo.html'
		} else {
			document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png"
			vidas++
		}
	}

	
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = randomSize() + ' ' + randomSide()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)
}

function randomSize() {
	let classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

function randomSide() {
	let classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}