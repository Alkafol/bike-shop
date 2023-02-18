let form = document.getElementById("favourites_form")

form.onsubmit = function() {
    let form_input = document.getElementById("item").value

    create_block(form_input)
    localStorage.setItem(form_input, "")

    form.reset()
    return false
}

window.onload = function(){ //ensures the page is loaded before functions are executed.
    for (let i = 0; i < localStorage.length; i++) {
        create_block(localStorage.key(i))
    }
}

function create_block(form_input){
    let delete_icon = document.createElement('img');
    delete_icon.src = "../images/delete-icon.svg"
    let new_favourite_block = document.createElement("div")
    new_favourite_block.classList.add("new_favourite_block")
    let new_favourite = document.createElement("p")
    new_favourite.classList.add("new_favourite_p")
    let new_favourite_name = document.createTextNode(form_input)

    new_favourite_block.appendChild(new_favourite)
    new_favourite.appendChild(new_favourite_name)
    new_favourite_block.appendChild(delete_icon)
    delete_icon.classList.add("favourites_delete_button")

    delete_icon.onclick = function(){
        localStorage.removeItem(form_input)
        new_favourite_block.remove()
        delete_icon.remove()
    }

    let favourites_list = document.getElementById("favourite_list")
    favourites_list.appendChild(new_favourite_block)
}

