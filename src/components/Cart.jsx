import React, { useState } from 'react';
import './css/cart.css';

function Cart() {
  // Cart state
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      quantity: 2
    },
    {
      id: 2,
      name: "Product 2",
      price: 39.99,
      quantity: 1
    },
    {
        id:3,
        name:"Product 3",
        price:40.00,
        quantity:2
    }
  ]);

  // Function to update the quantity of an item
  const updateQuantity = (itemId, newQuantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeItem = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <div className="cart-container">
        <table id="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cart-summary">
          <p><strong>Total: ${totalPrice}</strong></p>
          <button 
            id="checkout"
            onClick={() => alert('Proceeding to checkout...')}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cart;