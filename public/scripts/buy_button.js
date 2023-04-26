const source = document.querySelector("#buy_button").innerHTML;
Handlebars.compile(source);
const buyButtonElement = document.querySelector("#buy_button");

buyButtonElement.addEventListener('click', () => {
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

    fetch(window.location.origin + '/sales/create_sale', {
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
});