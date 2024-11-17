const priceTotal = document.getElementById("priceTotal");
const addPrice = document.getElementById("addPrice");
const price1 = document.getElementById("price1");
const undertale = {
    'name': "Undertale",
    'platform': 'PC',
    'price': 4.99
}

addPrice.addEventListener("click", () => {
    let price = 0;
    price += price1;
    priceTotal.textContent = price;
})