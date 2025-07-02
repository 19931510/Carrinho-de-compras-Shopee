import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];


console.log('===============================');
console.log(' Welcome to your Shoppe Cart! ');
console.log('===============================\n');

//create 
const item1 = await createItem('hair jumbo', 29.99, 3);
const item2 = await createItem('hair clip', 9.99, 1);
const item3 = await createItem('hair gel', 19.99, 3);

//add
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

console.log('\n--- Cart after adding items ---');
await cartService.displayCart(myCart);

//Remove
console.log('\n--- Cart after removing 1x hair jumbo ---');
await cartService.removeItem(myCart, item1);
await cartService.displayCart(myCart);

//del
console.log('\n--- Cart after deleting hair jumbo and hair clip ---');
await cartService.deleteItem(myCart, item1.name);
await cartService.deleteItem(myCart, item2.name);
await cartService.displayCart(myCart);

console.log('\n--- Final Cart Total ---');
await cartService.calculateTotal(myCart);