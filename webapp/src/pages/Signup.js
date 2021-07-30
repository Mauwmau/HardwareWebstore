import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import "../styles/Signup.css";

function Signup() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    function verifyFormCondition(){
        if(!name || !email || !address || !phone || !password || !passwordConfirm){
            alert("Preencha todos os campos");
            return false
        }

        if(password !== passwordConfirm){
            alert("As senhas não são iguais, preencha corretamente para confirmar sua senha");
            return false
        }

        return true;
    }

    async function handleSubmit(event){
        event.preventDefault();
        if(verifyFormCondition()){
            const data = {
                name: name,
                email: email,
                phone: phone,
                address: address,
                password: password
            }
            const res = await fetch("http://localhost:8081/user", {
                method: 'POST',
                headers: [
                    ["Content-Type", "application/json"],
                ],
                body: JSON.stringify(data)
            });
            if (res.status === 201){
                history.push('/home');
            } else {
                alert('Não foi possivel criar uma conta, tente mais tarde');
            }
        }
    }

    return(
        <main id="main-signup" className="centered">
            <form id="login-form" onSubmit={handleSubmit}>
                <label htmlFor="name">NOME</label>
                <input className="form-user-input" type="text" name="name"  onChange={e => setName(e.target.value)}/>

                <label htmlFor="email">EMAIL</label>
                <input className="form-user-input" type="email" name="email" onChange={e => setEmail(e.target.value)}/>

                <label htmlFor="phone">TELEFONE</label>
                <input className="form-user-input" type="tel" name="phone" onChange={e => setPhone(e.target.value)}/>
    
                <label htmlFor="address">ENDEREÇO</label>
                <input className="form-user-input" type="text" name="address" onChange={e => setAddress(e.target.value)}/>


                <label htmlFor="password">SENHA</label>
                <input className="form-user-input" type="password" name="password" onChange={e => setPassword(e.target.value)}/>
               
                <label htmlFor="password">CONFIRME A SENHA</label>
                <input className="form-user-input" type="password" name="password" onChange={e => setPasswordConfirm(e.target.value)}/>

                <input className="form-user-input" type="submit" value="Cadastrar" />

            </form>

        </main>
    )
}

export default Signup;