import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import "../styles/Login.css";

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        let user = localStorage.getItem('user');
        if (!user) return;
        user = JSON.parse(user);

        if(user.id){
            history.push('/profile');
        }
    }, []);

    async function handleSubmit(event){
        event.preventDefault();
        if(email && password.length >= 6){
            const res = await fetch("http://localhost:8081/user/auth", {
                method: 'POST',
                headers: [
                    ["Content-Type", "application/json"],
                ],
                body: JSON.stringify({email: email, password: password})
            });
            if (res.status === 200){
                const user = await res.json();
                localStorage.setItem('user', JSON.stringify(user));
                history.push('/home');
            } else {
                alert("Login incorreto");
                console.log(res);
            }
        }
    }

    return(
        <main id="main-login" className="centered">
            <form id="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">EMAIL</label>
                <input className="form-user-input" type="email" name="email" id="login-email" onChange={e => setEmail(e.target.value)}/>

                <label htmlFor="password">SENHA</label>
                <input className="form-user-input" type="password" name="password" id="login-password" onChange={e => setPassword(e.target.value)}/>

                <input className="form-user-input" type="submit" value="Entrar" />

                <div>
                    <Link to={'/signup'} className="login-signup-button">Ou clique aqui para se cadastrar</Link>
                </div>
            </form>

        </main>
    )
}

export default Login;