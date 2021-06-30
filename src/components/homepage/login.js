import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import {Button, Typography, TextField} from '@material-ui/core'

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    let history = useHistory();
    const handleLogin = (e) => {
        e.preventDefault();
        if(password !== 'pass'){
            setMessage('Password incorrect')
        }else {
            const data = {email, password}
            localStorage.setItem('security', data)
            history.push(`/stats`);
        }
    }
    return (
        <div>
            <form>
                <Typography style={{textAlign: 'center'}}>Login to your account</Typography>
                <hr></hr>
                <label>Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{width:'100%'}} placeholder="Email"></input>
                <label>Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{width:'100%'}} placeholder='*****************'></input>
                {message && <p style={{color: 'red'}}>{message}</p>}
                <button onClick={handleLogin} className='btnb'>Login</button>
            </form>
        </div>
    )
}

export default Login;