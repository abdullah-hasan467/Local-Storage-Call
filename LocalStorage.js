const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} :  ${quantity}`;
    ul.appendChild(li);
}

const getStorageShoppingCard = () => {
    let cart = {};
    const storeCart = localStorage.getItem('cart');
    if (storeCart) {
        cart = JSON.parse(storeCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStorageShoppingCard();
    cart[product] = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
}


const DisplayProductFromLocalStorage=()=>{
    const savedCart = getStorageShoppingCard();
    console.log(savedCart);
    for (const product in savedCart){
        const quantity = savedCart[product]
        console.log(product,quantity);
        displayProduct(product,quantity)
    }

}

DisplayProductFromLocalStorage();
