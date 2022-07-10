const d = document
const w = window

export default function scrollTopButton(btnUp){
    const $scrollBtn = d.querySelector(btnUp)

    w.addEventListener('scroll', e => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop

        if(scrollTop > 600){
            $scrollBtn.classList.remove('hidden')
        }else {
            $scrollBtn.classList.add('hidden')
        }
    })

    d.addEventListener('click', e => {
        if(e.target.matches(btnUp) || e.target.matches(`${btnUp} *`)){ // la segunda expresión es para que la acción también sea tomada por la flecha cuando se le de click
            console.log('gola')
            w.scrollTo({
                behavior: 'smooth',
                top: '0'
            })
        }
    })
}