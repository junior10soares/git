

var primeiro = document.getElementById(`h1`)
var segundo = document.getElementById(`res`)
var data = new Date()
var hora = data.getHours()
var minuto = new Date ()
var minutos = minuto.getMinutes()
hora = 20
primeiro.innerHTML = (`Agora sao ${hora} horas e ${minutos} minutos`)
var img = document.createElement(`img`)
img.setAttribute (`id`,`foto`)

if (hora > 0 && hora < 12) {
    //bom dia
    img.setAttribute (`src`,`fotomanha.png`)
    primeiro.innerHTML += (`, bom dia !!!`)
    window.document.body.style.background = `yellow`

}else if (hora > 12 && hora < 19) {
    //boa tarde
    img.setAttribute (`src`,`fototarde.png`)
    primeiro.innerHTML += (`, boa tarde ...`)
    window.document.body.style.background = `red`

}else {
    //boa noite
    img.setAttribute (`src`,`fotonoite.png`)
    primeiro.innerHTML += (`, boa noite...`)
    window.document.body.style.background = `black`


} segundo.appendChild(img)
 
