let counter = 1
let current_page = 1

window.onload = function () {
    let preloader = document.getElementById("preloader")
    preloader.style.display = "none"
    let button_space = document.getElementById("button_space")
    let next_button = document.createElement("button")
    next_button.classList.add("review_uploading_button")
    next_button.textContent = "Подгрузить отзывы"
    button_space.appendChild(next_button)

    next_button.onclick = function () {
        if (counter > 6) {
            next_button.style.display = "none"
        }
        preloader.style.display = "block"
        get_review()
        let prev_rev = document.getElementById("review_container" + (current_page).toString())
        current_page = counter
        if (prev_rev != null) {
            prev_rev.style.display = "none"
        }
        let button_number = document.createElement("button")
        button_number.classList.add("review_buttons")
        button_number.textContent = counter.toString()
        button_space.appendChild(button_number)

        button_number.onclick = function () {
            let target_page = button_number.innerText
            let current_page_element = document.getElementById("review_container" + (current_page).toString())
            current_page_element.style.display = "none"

            let target_page_element = document.getElementById("review_container" + (target_page).toString())
            target_page_element.style.display = "block"
            current_page = target_page
        }
    }
}

function get_review() {
    let preloader = document.getElementById("preloader")
    let reviews = document.getElementById("reviews")
    let random_id = Math.floor(Math.random() * (500 - 1)) + 1
    let url = "https://jsonplaceholder.typicode.com/comments/" + random_id
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            preloader.style.display = "none"
            let review_container = document.createElement("div")
            review_container.classList.add("review_container")
            let name = document.createElement("p")
            let email = document.createElement("p")
            let body = document.createElement("p")
            name.innerHTML = "Имя: " + `${data.name}`
            email.innerHTML = "E-mail: " + `${data.email}`
            body.innerHTML = `${data.body}`

            review_container.appendChild(name)
            review_container.appendChild(email)
            review_container.appendChild(body)
            review_container.setAttribute("id", "review_container" + counter.toString());
            reviews.appendChild(review_container)
            counter++
        }).catch(function () {
            let message = document.createElement("p")
            let review_container = document.createElement("div")
            review_container.classList.add("review_container")

            message.innerHTML = "Упс.. Не удалось подгрузить этот отзыв"
            review_container.appendChild(message)
        });
}
