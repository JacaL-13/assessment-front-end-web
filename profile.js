const allBtns = document.querySelectorAll('button')

for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click', btnClicked)
}

function btnClicked(evt) {
    console.log(evt.target)
    switch (evt.target.id) {
        case 'color':
            alert('My favorite color is red.')
            break;
        case 'place':
            alert('My favorite place is the mountains.')
            break;
        case 'ritual':
            alert('My favorite ritual is meditation.')
        break;
        default:
            break;
    }
}