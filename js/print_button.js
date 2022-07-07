export default function printRank(btnPrint){
    const d = document

    d.addEventListener('click', e => {
        if(e.target.matches(btnPrint)){
            print()
        }
    })
}