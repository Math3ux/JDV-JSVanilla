document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })

})

function handleClick(event) {

    let square = event.target
    let position = square.id;
    let jogadorVencedor

    if (handleMove(position)) {
        setTimeout(() => {
            if (playerTime == 0) {
                jogadorVencedor = 'primeiro jogador'
            } else {
                jogadorVencedor = 'segundo jogador'
            }
            alert(`Vencedor foi o ${jogadorVencedor}`)
        }, 15)

    }

    updateSquares()
}

function updateSquares() {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position]

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}