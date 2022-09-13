function calcular() {
var cal = document.getElementById (`txtn`)
var res = document.getElementById (`seltab`)
var n = Number(cal.value)


    if (cal.value.length == 0){ //comprimento em digitos
    window.alert (`Erro, Digite um numero`)

    }else {

   res.innerHTML = (``)  // se nao apaga msg 'reset'

    for (var c = 0 ; c <= 10 ; c++ ) { // enquanto
 
    var item = document.createElement (`option`)
    item.text = `${n} x ${c} = ${n*c}`
    res.appendChild(item)
    

}    
}
} 

