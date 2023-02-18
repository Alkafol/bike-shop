let button = document.createElement('button')
button.textContent = 'Нажми и испытай удачу'
button.style.height = '50px'

let sticking_place = document.getElementById('header_section')
sticking_place.appendChild(button)

button.onclick = function (){
    let random_value = Math.floor(Math.random() * (100 - 1)) + 1
    if (random_value < 50){
        alert('Эээх.. На этот раз ничего :(')
    }
    else {
        alert('Отлично! Вы выиграли хорошее настроение!')
    }
}

