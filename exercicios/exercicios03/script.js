function confirma() {

var n1 = document.getElementById (`n1`)
var n2 = document.getElementById (`n2`)
var p1 = document.getElementById ('p1')
var res = document.getElementById (`res`)

if (Number(n1.value.length) == 0 || Number(n2.value.length == 0) || Number(p1.value.length == 0) ) {
    window.alert `Erro, existe algum campo em branco`
}else {
}

var i = Number(n1.value)
var f = Number(n2.value)
var p = Number(p1.value)

    for ( var c = i, c >= f , c += p ) {



    } res.innerHTML += (`${c}`)


}