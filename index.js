import matchCut from './js/cut.js'
import matchCutWithoutH from './js/cut_without_h.js'
import generateTable from './js/generate_table.js'
import printRank from './js/print_button.js'
import rank from './js/rank_result.js'
import rankWithoutH from './js/rank_result_without_h.js'
import reloadPage from './js/reload_button.js'
import soundEntry from './js/sound_entry.js'
import scrollTopButton from './js/up_scroll_button.js'

const d = document

//Manipulación del DOM
//Botones de calculo del rank
const $button_calculate = d.querySelector('.button_calculate')
const $button_calculateWithoutH = d.querySelector('.button_calculate-withoutH')
const $buttonCut = d.querySelector('.button_cut')
const $decoration = d.querySelector('.decoration')
const $buttonCutWithoutH = d.querySelector('.button_cut-withoutH')
$buttonCut.style.visibility = 'hidden'
$button_calculate.style.visibility = 'hidden'
$decoration.style.visibility = 'hidden'
$button_calculateWithoutH.style.visibility = 'hidden'
$buttonCutWithoutH.style.visibility = 'hidden'

//Eventos activos al momento del load de la página
d.addEventListener('DOMContentLoaded', (e) => {  
    soundEntry('./assets/bowling-strike.mp3','.main_container-button')  
    generateTable('.mainRequirements_button')
    rank('.button_calculate')
    rankWithoutH('.button_calculate-withoutH')
    printRank('.print_button')
    matchCut('.button_cut')
    matchCutWithoutH('.button_cut-withoutH')
    reloadPage('.reload_button')
    scrollTopButton('.up_button-wrapper')
})

/* class Jugador{
    constructor({nombre, hd, pista, lineas}){
        this.nombre = nombre
        this.hd = hd
        this.pista = pista
        this.lineas = lineas
        this.scrt = lineas.reduce((acum,num) => acum + num)
        this.hdTotal = this.hd * lineas.length
        this.serie = this.scrt + this.hdTotal
        this.promedio = this.serie / lineas.length

        //Validaciones - Métodos especificos
        this.validarNombre(nombre)
        this.validarHd(hd)
        this.validarPista(pista)
        this.validarLineas(lineas)
    }

    //Métodos genericos
    validarCadena(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)

        if(typeof valor !== 'string') return console.warn(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`)

        return true
    }

    validarLongitudCadena(propiedad, valor, longitud){
        if(valor.length > longitud) return console.warn(`${propiedad} "${valor}" excede el número de caracteres permitidos`)

        return true
    }

    validarNumero(propiedad, valor){
        if(!valor){
            if(valor === 0){
                true
            } else {
                return console.warn(`${propiedad} "${valor}" esta vacia`)
            }     
        } 

        if(typeof valor !== 'number') return console.warn(`${propiedad} "${valor}" ingresado, NO es un número`)

        return true
    }

    validarArreglo(propiedad, valor){
        if(!valor) return console.warn(`${propiedad}, ${valor} ingresado, no es una lista de lineas`)

        if(!(valor instanceof Array)) return console.warn(`${propiedad}, "${valor}" valor incorrecto, solo se acepta una lista de lineas`)

        if(valor.length === 0) return console.warn(`Debe colocar al menos 1 valor para evaluar`)

        for (const iterator of valor) {
            if(typeof iterator !== 'number'){
                return console.warn(`${propiedad}, "${iterator}" no es un valor númerico`)
            } 
        }

        return true
    }


    //Métodos especificos
    validarNombre(nombre){
        if(this.validarCadena('nombre', nombre)){
            this.validarLongitudCadena('nombre', nombre, 50)
        }
    }

    validarHd(hd){
        if(this.validarNumero('handicap',hd)){
            if(!/^([0-9]){1,2}$/.test(hd)) return console.warn(`El Handicap ${hd} no es valido, debe ser un número de 1 a 2 dígitos`)
        }
    }

    validarPista(pista){
        if(this.validarNumero('pista',pista)){
            if(!/^([0-9]){1,2}$/.test(pista)) return console.warn(`La pista ${hd} no es valido, debe ser un número de 1 a 2 dígitos`)
        }
    }

    validarLineas(lineas){
        if(this.validarArreglo('lineas',lineas)){
            for (const valor of lineas) {
                if(valor < 0 || valor > 300) return console.warn(`La linea ${valor} no es valido, deben ser números entre 0 y 300`)
            }
        }

        if(lineas.length < 4 || lineas.length > 6) return console.warn(`La cantidad de lineas debe estar entre 4 a 6`)
    }

}

const alejo = new Jugador({
    nombre: 'alejo',
    hd: 18,
    pista: 30,
    lineas: [201,250,233,225]            
}) */

//console.log(alejo)




