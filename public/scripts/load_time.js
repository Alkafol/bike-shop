(() => {
    let loadingStartTime = Date.now()
    window.addEventListener('load', () => {
        let loadingEndTime = Date.now()
        let loadingTime = loadingEndTime - loadingStartTime

        let div = document.createElement('div')
        div.style.marginLeft = '20px'
        div.style.marginTop = '40px'

        let pageLoadTime = document.createTextNode(`Page load time is ${loadingTime} ms`)
        div.appendChild(pageLoadTime)
        document.getElementById("footer_section").appendChild(div)
    })
})()