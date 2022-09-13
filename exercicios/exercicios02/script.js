

function verificar() {
var data = new Date() // variavel comando de data atual
var ano = data.getFullYear() // variavel comando de ano com 4 digitos
var fano = window.document.getElementById(`txtano`) // variavel caixa de texto
var res = window.document.querySelector(`div#res`) // variavel div resultado

    if (fano.value.length == 0 || Number(fano.value) > ano) { // se a caixa de texto do ano tiver em branco
    window.alert (`Erro, verificar os dados e tente novamente`) //manda alerta de msg

    } else {// se nao
    var fsex = window.document.getElementsByName(`radsex`)//informação dos botoes de sexo
    var idade = ano - Number(fano.value)//idade da variavel ano atual - variavel digitada na caixa de texto
    var gereno = `` //variavel com string de gereno qualquer
    var img = document.createElement(`img`) //variavel de criação de img por JS
    img.setAttribute('id', 'foto') //chamar img por ID e a foto

    if (fsex[0].checked) { // se sexo tiver na primeira linha "homem" ATENÇÃO
        genero = 'homem'

    if (idade >= 0 && idade < 10) { //menor que 10 ATENÇÃO NO IF E NO ELSE

         img.setAttribute(`src`,'nenemh.png' ) //aparecer foto nenem

    } else if (idade < 21) {

         img.setAttribute(`src`,'menino.png' )

    } else if (idade <50) {      

        img.setAttribute(`src`,'homem.png' )

    } else {

        img.setAttribute(`src`,'velho.png' )
    }
        
    } else  { //ATENÇÃO NO IF ELSE

       genero = `mulher`

    if (idade >= 0 && idade < 10) { //ATENÇÃO NO IF E ELSE
       
        img.setAttribute(`src`,'nenemu.png' )

    } else if (idade < 21) {
      
        img.setAttribute(`src`,'menina.png' )

    } else if (idade <50) {
     
        img.setAttribute(`src`,'mulher.png' )

    } else {
        
        img.setAttribute(`src`,'velha.png' )
    }
}
    res.style.textAlign = 'center' //resposta no centro
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img) // resposta da imagem

}

}