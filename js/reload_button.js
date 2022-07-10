const d = document

export default function reloadPage(btnreload){
    d.addEventListener('click', e => {

        if(e.target.matches(btnreload)){
            location.reload()
        }
    })
}