if (document.location.href.indexOf("accessories") > -1) {
    accessories_button = document.getElementById('accessories_button')
    accessories_button.style.backgroundColor = '#B8D0E0'
}
else if (document.location.href.indexOf('info') > -1) {
    info_button = document.getElementById('info_button')
    info_button.style.backgroundColor = '#B8D0E0'
}
else if (document.location.href.indexOf('review') > -1){
    review_button = document.getElementById('review_button')
    review_button.style.backgroundColor = '#B8D0E0'
}
else if (document.location.pathname === '/') {
    bikes_button=document.getElementById('bikes_button')
    bikes_button.style.backgroundColor = '#B8D0E0'
}
