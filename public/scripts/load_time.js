(() => {
    let loadingStartTime = Date.now()
    window.addEventListener('load', () => {
        let loadingEndTime = Date.now()
        let loadingTime = loadingEndTime - loadingStartTime

        let div = document.createElement('div')
        div.style.margin= '5px 0 5px 25px'

        let pageLoadTime = document.createTextNode(`Client load time is ${loadingTime} ms`)
        div.appendChild(pageLoadTime)
        document.getElementById("footer_section").appendChild(div)
    })
})()