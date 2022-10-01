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
                jogadorVencedor = 'primeiro jogador (Escudo)'
            } else {
                jogadorVencedor = 'segundo jogador (Espada)'
            }
            alert(`Vencedor foi o ${jogadorVencedor}`)
        }, 15)

    }

    updateSquare(position)
}

function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}

