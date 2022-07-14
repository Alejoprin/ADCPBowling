export default function printRank(btnPrint){
    const d = document
    const w = window
    const $btnPrint = d.querySelector(btnPrint)

    //captura el ancho de la ventana en el momento que aparece la web
    let innerW = w.innerWidth
    if( innerW < 840) {
        $btnPrint.classList.add('hidden')
    } else{
        $btnPrint.classList.remove('hidden')
    }
    
    w.addEventListener('resize', e => {
        //captura el ancho de la ventana en el momento que ajustamos
        let innerW = w.innerWidth
        
        if(innerW < 840) {
            $btnPrint.classList.add('hidden')
        } else{
            $btnPrint.classList.remove('hidden')
        }
    })


    d.addEventListener('click', e => {
        if(e.target.matches(`${btnPrint} *`)){
            print()
        }
    })
}