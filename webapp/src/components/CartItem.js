import React, {useEffect, useState} from 'react';
import '../styles/CartItem.css';

function CartItem({id, image, title, price, amount, changeAmount, deleteItem}) {

    const [quantity, setQuantity] = useState(amount);

    useEffect(()=>{
      changeAmount(id, quantity)
    },[quantity]);

    return(
        <div className="cart-item">
            <img className="cart-image" src={image} alt={""} />

            <div className="item-infos">
              <span className="item-title">
                {title}
              </span>
              <span className="item-price">${price.toFixed(2)}</span>
              <div className="quantity-control">
                  <button className="control-btn" onClick={() => setQuantity(quantity - 1)}>&minus;</button>
                  <span className="centered">{quantity}</span>
                  <button className="control-btn" onClick={() => setQuantity(quantity + 1)}>&#43;</button>
              </div>
            </div>

            <div className="cart-infos">
              <button className="remove-btn" onClick={() => deleteItem(id)}>Remover do Carrinho</button>
              <div className="item-subtotal">
                <span>Subtotal do Produto</span>
                <span className="item-subtotal-valor">${(price * quantity).toFixed(2)}</span>
              </div>
            </div>

          </div>
    );
}

export default CartItem;