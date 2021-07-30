import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

import "../styles/Profile.css";

function Profile() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    
    useEffect(()=>{
        let user = localStorage.getItem('user');
        console.log(user);

        if (user){
            user = JSON.parse(user);
            if(!user.id){
                history.push('/login');
            } else {
                setName(user.name);
                setEmail(user.email);
                setAddress(user.address);
                setPhone(user.phone);
            }
        } else {
            history.push('/login');
        }
    }, []);

    function handleLogout() {
        localStorage.removeItem('user');
        history.push('/login');
    }

    async function handleEdit() {
        let user = localStorage.getItem('user');
        user = JSON.parse(user);

        const res = await fetch("http://localhost:8081/user/" + user.id, {
                method: 'PUT',
                headers: [
                    ["Content-Type", "application/json"],
                ],
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    address: address,
                })
            });
        if(res.status === 200){
            user.name = name;
            user.email = email;
            user.phone = phone;
            user.address = address;

            localStorage.setItem('user', JSON.stringify(user));
            alert("Mudanças efetivadas com sucesso");
        } else{
            alert("Não foi possível realizar as alterações");
        }
    }

    return(
        <main id="main-profile">
            <div className="profile-user-input">
                <label htmlFor="profile-nome-input">Nome Completo</label>
                <input type="text" id="profile-nome-input" onChange={e => setName(e.target.value)} value={name}/>
            </div>
            
            <div className="profile-user-input">
                <label htmlFor="profile-email-input">Email</label>
                <input type="email" id="profile-email-input" onChange={e => setEmail(e.target.value)} value={email}/>
            </div>

            <div className="profile-user-input">
                <label htmlFor="profile-telefone-input">Telefone</label>
                <input type="tel" id="profile-telefone-input" onChange={e => setPhone(e.target.value)} value={phone}/>
            </div>

            <div className="profile-user-input">
                <label htmlFor="profile-endereco-input">Endereço</label>
                <input type="text" id="profile-endereco-input" onChange={e => setAddress(e.target.value)} value={address}/>
            </div>

            <div id="profile-buttons">
                {/* <button>Editar</button> */}
                <button onClick={handleEdit}>Salvar</button>
                <button onClick={handleLogout}>Logout</button>
            </div>

        </main>
    );
}

export default Profile;