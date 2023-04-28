const source = document.querySelector("#buy_button").innerHTML;
Handlebars.compile(source);
const buyButtonElement = document.querySelector("#buy_button");

window.onload = function (){
    sendMessageWithAmount(0)
}

const salesSocket = io();

function send(message) {
    console.log("Message sent")
    salesSocket.emit('msgToServer', message);
}

async function getProductSales(productId) {
    return await fetch(window.location.origin + '/sales/get_all_by_product/' + productId).then(res => {return res});
}

async function sendMessageWithAmount(productId){
    let response = await getProductSales(productId)
    const json_response = await response.json()
    console.log(json_response)

    const amount = json_response.length
    console.log(amount)

    send(amount)
}

async function handleButtonClick() {
    const productId = buyButtonElement.dataset.productId;
    const finalPrice = buyButtonElement.dataset.finalPrice;
    const saleDate = new Date();
    const formattedSaleDate = saleDate.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    console.log("productId " + productId + "finalPrice " + finalPrice)

    await fetch(window.location.origin + '/sales/create_sale', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: 1,
            product_id: Number(productId),
            final_price: Number(finalPrice),
            amount: 1,
            sale_time: String(formattedSaleDate)
        })
    });

    await sendMessageWithAmount(productId)
}

buyButtonElement.addEventListener('click', () => handleButtonClick());

salesSocket.on('msgToClient', (message) => {
    console.log("Message received")
    createMessage(message)
});

function createMessage(message) {
    const textNode = document.createTextNode("Куплено " + message + " раз")
    const pNode = document.createElement('p');
    pNode.appendChild(textNode)
    pNode.id = "sales_amount"
    if (buyButtonElement.parentElement.querySelector("#sales_amount") != null) {
        buyButtonElement.parentElement.querySelector("#sales_amount").remove()
    }
    buyButtonElement.parentElement.appendChild(pNode)
}
