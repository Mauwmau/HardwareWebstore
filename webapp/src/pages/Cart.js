import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Cart.css";

import CartItem from "../components/CartItem";

function Cart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storageContent = localStorage.getItem("cart");
    if (storageContent === null) {
      return;
    }
    const cartItens = JSON.parse(storageContent);

    setItems(cartItens);
  }, []);

  function calculateTotal(){
    let obj = localStorage.getItem("cart");
    if (obj === null) {
      setTotal(0);
      return
    }
    const cart = JSON.parse(obj);

    let sum = 0;
    for (let index = 0; index < cart.length; index++) {
      const subtotal = cart[index].price * cart[index].quantity;
      sum += subtotal;
    }

    setTotal(sum);
  }

  function setAmount(productId, currentAmount) {
    let cart = items;

    for (let index = 0; index < cart.length; index++) {
      if (cart[index].id === productId) {
        if (currentAmount <= 0) {
          cart.splice(index, 1);
          setItems(items.filter((current) => {return current.id !== productId}));
        } else {
          cart[index].quantity = currentAmount;
        }
        break;
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    calculateTotal();
  }

  function removeFromCart(productId){
    let cart = items;
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].id === productId) {
        cart.splice(index, 1);
        break;
      }
      
    }
    setItems(items.filter((current) => {return current.id !== productId}));
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateTotal();
  }

  return items.length > 0 ? (
    <main id="cart-panel">
      <div id="cart-head">
        <span>TOTAL</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div id="cart-body">
        {items.map((current) => (
          <CartItem
            key={current.id}
            id={current.id}
            image={current.thumbnail}
            title={current.name}
            price={current.price}
            amount={current.quantity}
            changeAmount={setAmount}
            deleteItem={removeFromCart}
          />
        ))}
      </div>

      <div id="cart-end" className="centered">
        <Link to="/payment">Finalizar Compra</Link>
      </div>
    </main>
  ) : (
    <main id="cart-no-item" className="centered">
      <h1>Carrinho Vazio</h1>
    </main>
  );
}

export default Cart;
