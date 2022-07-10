export default function rank(button_calculate) {
    const d = document
    
    d.addEventListener('click', (e) => {
        if(e.target.matches(button_calculate)){
            const $inputNumberLines = d.getElementById('inputNumberLines').value
            const $inputNumberPlayers = d.getElementById('inputNumberPlayers').value
            const $inputName = d.querySelectorAll('#inputName')
            const $inputHD = d.querySelectorAll('#inputHD')
            const $inputTrack = d.querySelectorAll('#inputTrack')
            const $inputLines = d.querySelectorAll('.inputLines_wrapper input')
            const $rankWrapper = d.querySelector('.rank_wrapper')
            const $fragment = d.createDocumentFragment()
            let scrt = 0
            let hdTotal = 0
            let serie = 0
            let promedio = 0

            const arrPlayer = []
            const arrLinesPerPlayer = new Array(parseInt($inputNumberLines))
            const arrLinesTotal = new Array(parseInt($inputNumberPlayers))
            let aux = 0

            //limpia el rank_wrapper
            $rankWrapper.innerHTML = ''

            //Coloca cada linea en el array arrLinesPerPlayer
            for (let i = 0; i < $inputNumberPlayers; i++) {    
                for (let y = 0; y < $inputNumberLines; y++) {
                    arrLinesPerPlayer[y] = $inputLines[y+aux].value
                }
                aux += parseInt($inputNumberLines)
                arrLinesTotal[i] = [...arrLinesPerPlayer]
            }         

            //Define la altura del juego en base a las lineas jugadas, se guarda en auxCorte
            let auxCorte
            for (let i = 0; i < $inputNumberPlayers; i++) {
                for (let y = 0; y < $inputNumberLines; y++) {
                    if(arrLinesTotal[i][y] === '') {
                        auxCorte = y 
                        break
                    }                 
                }
            }

            //Validación para deshabilitar el boton de corte cuando este completado el juego
            if(auxCorte != undefined) return alert('No puedes establecer rank a esta altura del juego, utiliza el botón "Corte"') 
            

            //Define cada dato de cada jugador menos los totales
            for (let i = 0; i < $inputNumberPlayers; i++) {
                arrPlayer[i] = {
                    name: $inputName[i].value,
                    hd: $inputHD[i].value,
                    track: $inputTrack[i].value,
                    lines: arrLinesTotal[i],
                    scrt,
                    hdTotal: $inputHD[i].value * $inputNumberLines,
                    serie,
                    promedio
                }
            }


            //Define los totales de cada jugador
            for (let i = 0; i < $inputNumberPlayers; i++) {
                for (let y = 0; y < $inputNumberLines; y++) {
                    arrPlayer[i].scrt += parseInt(arrPlayer[i].lines[y])
                }
                arrPlayer[i].serie = arrPlayer[i].hdTotal + arrPlayer[i].scrt
                arrPlayer[i].promedio = (arrPlayer[i].serie / $inputNumberLines).toFixed(2)
            }


            //Ordeno los jugadores de mayor promedio a menor
            arrPlayer.sort((a,b) => b.promedio - a.promedio)


            //La mejor linea
            let bestLine = []
            for (let i = 0; i < $inputNumberPlayers; i++) {
                bestLine[i] = [...arrPlayer[i].lines]
            }
            const bestLineMax = Math.max(...bestLine.flat())

            //Guarda los titulos de la tabla y los coloca en un fragment para despues ser añadidos en la tabla de corte
            const $template = d.querySelector('.template_rank-titles').content
            const $fragmentTitles = d.createDocumentFragment()
            let $clone = d.importNode($template, true)
            $fragmentTitles.appendChild($clone)
            
            $rankWrapper.appendChild($fragmentTitles)

            //Dibujo el rank en el document
            for (let i = 0; i < $inputNumberPlayers; i++) {
                const node = d.createElement('div')
                const nodeLines = d.createElement('div')
                let $fragment2 = d.createDocumentFragment()

                node.classList.add('rank_wrapper-player')
                nodeLines.classList.add('arrPlayer_Lines-wrapper')
                
                //creando los divs que van a contener las diferentes lineas de cada jugador
                for (let y = 0; y < $inputNumberLines; y++) {
                    const span = d.createElement('span')
                    span.textContent = `${arrPlayer[i].lines[y]}` 

                    if(arrPlayer[i].lines[y] < 200){
                        span.style.fontWeight = '400'
                    }

                    if(arrPlayer[i].lines[y] == bestLineMax){
                        span.style.color = 'red'
                    }

                    $fragment2.appendChild(span)
                }

                nodeLines.style.width = '190px'
                nodeLines.appendChild($fragment2)

                //Dibujando cada jugador con todos sus datos de juego
                node.innerHTML = `<span style='width: 34px'>${i+1}.º</span>
                                <span style='width: 190px'>${arrPlayer[i].name}</span>
                                <span style='width: 32px'>${arrPlayer[i].scrt}</span>
                                <span style='width: 24px'>${arrPlayer[i].hdTotal}</span>
                                <span style='width: 32px'>${arrPlayer[i].serie}</span>
                                <span style='width: 43px'>${arrPlayer[i].promedio}</span>`
                
                if(i === 0) node.style.backgroundColor = 'gold'

                if(i === 1) node.style.backgroundColor = 'silver'
                
                if(i === 2) node.style.backgroundColor = 'goldenrod'

                node.children[1].insertAdjacentElement('afterend', nodeLines) 
                
                $fragment.appendChild(node)
            }

            $rankWrapper.appendChild($fragment)

            e.target.disabled = true

            //deshabilitar boton Establecer Rank -H
            const $buttonCalculateWithout = d.querySelector('.button_calculate-withoutH')
            $buttonCalculateWithout.disabled = true

            //deshabilitar button_cut
            const $buttonCut = d.querySelector('.button_cut')
            $buttonCut.disabled = true

            //deshabilitar button_cut-withoutH
            const $buttonCutWithoutH = d.querySelector('.button_cut-withoutH')
            $buttonCutWithoutH.disabled = true
        }
    })
}