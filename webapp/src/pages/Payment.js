import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import "../styles/Payment.css"

function Payment() {
    const history = useHistory();

    const [credCard,setCredCard] = useState();
    const [pin,setPin] = useState();
    
    function handlePayment(){
        if(pin && credCard){
           console.log("PIN: " + typeof(pin)); 
           console.log("Cartao: " + typeof(credCard)); 

           let data = localStorage.getItem("cart");
           data = JSON.parse(data);

           data.forEach(produto => {
               console.log("remove stock do produto " + produto.title + " " + produto.quantity + "X")
           });

           localStorage.removeItem("cart");

           history.push('/home');
        } else {
            alert("Preencha todos os campos antes de finalizar a compra");
        }
    }

    return(
        <main id="main-payment">
            <p>Número do Cartão:</p>
			<input type="text" id="CC" name="CC" onChange={(e) => setCredCard(e.target.value)}/>
			<p>Código PIN</p>
			<input type="text" id="PIN" name="PIN"  onChange={(e) => setPin(e.target.value)}/>
			<button type="button" onClick={handlePayment}>Comprar</button> 
        </main>
    );
}

export default Payment;