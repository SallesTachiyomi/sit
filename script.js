const fotos = document.querySelector(".fotos")
const mostrar = document.querySelector(".mostrar")
const publicacoes = document.querySelector(".publicacao")
const reels = document.querySelector(".reels")
const logar = document.querySelector(".logar")
const entrar_login = document.querySelector(".entrar_login")
var arr_fotos = ["img_1.jpg","img_2.jpg","img_3.jpg","img_4.jpg","img_5.jpg","img_6.jpg","img_7.jpg","img_8.jpg","img_9.jpg",]
for(let i = 8; i >= 0; i--){
	const foto_feed = document.createElement("div")
	fotos.append(foto_feed)
	foto_feed.setAttribute("class", "img")
	foto_feed.style.backgroundImage = "url(img/"+arr_fotos[i]+")"
	foto_feed.addEventListener("click", login)
}
reels.addEventListener("click", construir_reels)
function construir_reels(){
	fotos.style.display = "none"
}
publicacoes.addEventListener("click", construir_feed)
function construir_feed(){
	fotos.style.display = "flex"
}
function login(){
	logar.style.display = "inherit"
	entrar_login.style.display = "inherit"
}
logar.addEventListener("click", fora)
function fora(){
	logar.style.display = "none"
	entrar_login.style.display = "none"
}