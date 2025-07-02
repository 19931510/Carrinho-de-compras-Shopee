//adicionar item no carrnho
function addItem(userCart, item) {
    if (!Array.isArray(userCart) || !item?.name) return;
    const index = userCart.findIndex((p) => p.name === item.name);
    if (index > -1) {
        userCart[index].quantity += item.quantity;
    } else {
        userCart.push(item);
    }
}

//remover item do carrinho

function removeItem(userCart, item) {
    if (!Array.isArray(userCart) || !item?.name) return;
    const index = userCart.findIndex((p) => p.name === item.name);
    if (index === -1) {
        console.log("Item not found in cart");
        return;
    }
    if (userCart[index].quantity > 1) {
        userCart[index].quantity -= 1;
    } else {
        userCart.splice(index, 1);
    }
}

//display

function displayCart(userCart) {
    console.log("Shopee Cart Items:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$: ${item.price} - ${item.quantity}, Subtotal: ${item.subtotal()}`);
    });
}


//deletar um item
function deleteItem(userCart, name) {
    if (!Array.isArray(userCart) || !name) return;
    const index = userCart.findIndex(item => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    } else {
        console.log(`Item ${name} not found in cart.`);
    }
}

// Calcular o total do carrinho

function calculateTotal(userCart) {
    console.log("Shopee cart total is:");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nTotal: ${result}`);
}

export {
    addItem,
    removeItem,
    deleteItem,
    calculateTotal,
    displayCart
}
