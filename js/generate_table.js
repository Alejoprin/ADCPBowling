export default function generateTable(mainRequirements_button){
    const d = document
    
    d.addEventListener('click', (e) => {
        if(e.target.matches(mainRequirements_button)) {
            const $template  = d.getElementById('template_wrapper').content
            const $fragment = d.createDocumentFragment()
            const $button = d.querySelector('.mainRequirements_button')
            const $mainTable = d.querySelector('.mainTable')
            const $inputNumberLines = d.getElementById('inputNumberLines').value
            const $inputNumberPlayers = d.getElementById('inputNumberPlayers').value
            const $button_calculate = d.querySelector('.button_calculate')
            
            if (!(validarNumeroJugadores($inputNumberPlayers))){
                return alert('El número de jugadores no puede ser menor a 1')
            }
            
            const $title = d.createElement('h4')
            $title.textContent = 'Jugadores'
        
            for (let i = 1; i <= $inputNumberPlayers; i++) {        
                let $clone = d.importNode($template, true)
                $fragment.appendChild($clone)
            }
        
            $mainTable.appendChild($fragment)
            $mainTable.prepend($title)
            $button.disabled = true
        
            lines($inputNumberLines, $inputNumberPlayers)
        
            $button_calculate.style.visibility = 'visible'
        }
    })
}

function validarNumeroJugadores(cantidad) {
    return(cantidad < 1) 
        ? false
        : true
}

function lines(cantidad, jugadores) {
    const $ancla = document.querySelectorAll('.inputLines_wrapper')
    
    for (let i = 0; i < jugadores; i++) {
        for (let y = 0; y < cantidad; y++){
            const $inputline = document.createElement('input')
            $inputline.setAttribute('type', 'number')
            $inputline.classList.add(`player-${i}`)
            $ancla[i].appendChild($inputline)
        }
    }
}