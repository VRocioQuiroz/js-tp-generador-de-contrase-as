
const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const mayusc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"]
 //const mayusc = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("") TAMBIEN FUNCIONA
const minusc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const simb = ["@", "#", "%", "&", "$", "*", "!", "?", "¡", "¿"]

const $caracteres12 = $("#caracteres12")
const $caracteres9 = $("#caracteres9")
const $caracteres6 = $("#caracteres6")


const $soloLetras = $("#soloLetras")
const $soloNumeros = $("#soloNumeros")
const $todosLosCaracteres = $("#todosLosCaracteres")

const $mayusculas = $("#mayusculas")
const $minusculas = $("#minusculas")
const $numeros = $("#numeros")
const $simbolos = $("#simbolos")

const $texto = $("#texto")
const $btn = $("#btn")
const $copiar = $("#btn-copiar")
const $recargar = $("#btn-recargar")

//FUNCIONES DE CARACTERES

let caracteresSeleccionados = []

const modificarMayusculas = ()=>{
    
    if($mayusculas.checked){
       caracteresSeleccionados.push(mayusc) 
        
    }else{
       caracteresSeleccionados.splice(caracteresSeleccionados.indexOf(mayusc),1) 
    } 
}

$mayusculas.addEventListener("click", modificarMayusculas) 

/*----------------------------------------------------------------------------------*/


const modificarMinusculas = ()=>{

    if($minusculas.checked){   
       caracteresSeleccionados.push(minusc)  
    }else{
      caracteresSeleccionados.splice(caracteresSeleccionados.indexOf(minusc), 1) 
    }
}

$minusculas.addEventListener("click", modificarMinusculas)

/*----------------------------------------------------------------------------------*/

const modificarNumeros = ()=>{
  
    if($numeros.checked){
        caracteresSeleccionados.push(num)
    }else{
       caracteresSeleccionados.splice(caracteresSeleccionados.indexOf(num), 1)
    }
}

$numeros.addEventListener("click", modificarNumeros)

/*----------------------------------------------------------------------------------*/

const modificarSimbolos = ()=>{
    if($simbolos.checked){
        caracteresSeleccionados.push(simb)
    }else{
       caracteresSeleccionados.splice(caracteresSeleccionados.indexOf(simb), 1)
    }
}

$simbolos.addEventListener("click", modificarSimbolos)

/*----------------------------------------------------------------------------------*/

//EVENTOS DE REGLAS

$soloLetras.addEventListener("click", ()=>{

    caracteresSeleccionados = []
    
    $mayusculas.removeAttribute("disabled")
    $minusculas.removeAttribute("disabled")

   
    $mayusculas.checked = true
    $minusculas.checked = true

    $numeros.checked = false
    $simbolos.checked = false
    $numeros.setAttribute("disabled", "")
    $simbolos.setAttribute("disabled", "")

    modificarMayusculas()
    modificarMinusculas()

})


$soloNumeros.addEventListener("click", ()=>{
   
    caracteresSeleccionados = []

    $numeros.removeAttribute("disabled")
    $numeros.checked = true
    
    $mayusculas.checked = false
    $minusculas.checked = false
    $simbolos.checked = false
    
    $mayusculas.setAttribute("disabled", "")
    $minusculas.setAttribute("disabled", "")
    $simbolos.setAttribute("disabled", "")
    
    modificarNumeros()
    
})


$todosLosCaracteres.addEventListener("click", ()=>{
     
    caracteresSeleccionados = []

    $mayusculas.removeAttribute("disabled")
    $minusculas.removeAttribute("disabled")
    $numeros.removeAttribute("disabled")
    $simbolos.removeAttribute("disabled")

    $mayusculas.checked = true
    $minusculas.checked = true
    $numeros.checked = true
    $simbolos.checked = true

    modificarMayusculas()
    modificarMinusculas()
    modificarNumeros()
    modificarSimbolos()
   
})


/*----------------------------------------------------------------------------------*/

//FUNCIÓN DE CONTRASEÑA
 
let contraseniaGenerada = []

//caracteresSeleccionados.length

const generarContrasenia = ()=>{
   
   

   let contrasenia = caracteresSeleccionados.flat()     
   
   if ($caracteres12.checked){
        for (let index = 0; index < 12; index++) {
      
            let seleccionAleatoria = Math.floor(Math.random() * contrasenia.length)
    
            contraseniaGenerada.push(contrasenia[seleccionAleatoria])
             
    }}
    if ($caracteres9.checked){
        for (let index = 0; index < 9; index++) {
      
            let seleccionAleatoria = Math.floor(Math.random() * contrasenia.length)
    
            contraseniaGenerada.push(contrasenia[seleccionAleatoria])
             
    }}
    if ($caracteres6.checked){
        for (let index = 0; index < 6; index++) {
      
            let seleccionAleatoria = Math.floor(Math.random() * contrasenia.length)
            
            contraseniaGenerada.push(contrasenia[seleccionAleatoria])
             
    }}
     
   let contraseniaFinal =  contraseniaGenerada.join("")
  
   $texto.innerText = `${contraseniaFinal}`
   
   contraseniaGenerada = []
  
}

$btn.addEventListener("click", generarContrasenia)

/*----------------------------------------------------------------------------------*/

// FUNCIÓN COPIAR CONTRASEÑA

$copiar.addEventListener("click", ()=>{
    let copiarTexto = $texto.innerText
    navigator.clipboard.writeText(copiarTexto)
})

//FUNCIÓN GENERAR NUEVA CONTRASEÑA

$recargar.addEventListener("click", generarContrasenia)

/*----------------------------------------------------------------------------------*/

$todosLosCaracteres.click()

//ALERT

const alerta = ()=>{
    if(!$mayusculas.checked && !$minusculas.checked && !$numeros.checked && !$simbolos.checked){
        return alert("Debes seleccionar al menos un tipo de caracter")
    }
}

$btn.addEventListener("click", alerta)

