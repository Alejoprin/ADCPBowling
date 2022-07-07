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

            //Coloca cada linea en el array arrLinesPerPlayer
            for (let i = 0; i < $inputNumberPlayers; i++) {    
                for (let y = 0; y < $inputNumberLines; y++) {
                    arrLinesPerPlayer[y] = $inputLines[y+aux].value
                }
                aux += parseInt($inputNumberLines)
                arrLinesTotal[i] = [...arrLinesPerPlayer]
            }         

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

            //Dibujo el rank en el document
            for (let i = 0; i < $inputNumberPlayers; i++) {
                const node = d.createElement('div')
                
                node.innerHTML = `<span>${i+1}.º</span>
                                <span>${arrPlayer[i].name}</span> 
                                <span>${arrPlayer[i].promedio}</span>`
                
                if(i === 0) node.style.backgroundColor = 'gold'

                if(i === 1) node.style.backgroundColor = 'silver'
                
                if(i === 2) node.style.backgroundColor = 'goldenrod'
                
                $fragment.appendChild(node)
            }

            $rankWrapper.appendChild($fragment)

            e.target.disabled = true
        }
    })
}