const inventory = [
    { name: 'Espresso', price: 3, quantity: 10 }, //creating an  an Inventory Array of Product Objects with name, price and quantity
    { name: 'Latte', price: 4, quantity: 5 },
    { name: 'Cappuccino', price: 4, quantity: 6 },
    { name: 'Mocha', price: 5, quantity: 4 }
];

//Creating an Orders Array of Order Objects
const orders = [    //empty array to contain orders
 
]; 

//Creating a Function to Place an Order

function placeOrder(customer, orderedItems) {  //accepts the customer name and an array of ordered items

    let ordered = [];
    orderedItems.forEach(item => {
        let product = inventory.find(product => product.name == item.name)
        if (product.quantity >= item.quantity) { //Check if there are enough products in stock for each item in the order

            product.quantity -= item.quantity

            ordered.push({
                name: product.name,
                quantity: item.quantity
            });
            
        }
    })


const newOrder = { //Adding a new order to the orders array with the status set to "Pending".
    
    customer,
    items: ordered,
    status: 'Pending'
}

orders.push(newOrder)




}