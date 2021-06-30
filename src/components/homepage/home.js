import React, {useState} from 'react'
import Login from './login';
import Register from './register'
import {Typography} from '@material-ui/core'

function Home(){
    const [login, setLogin] = useState(true)
    const [register, setRegister] = useState(false)
    const handleChange = (e) => {
        setLogin(false)
        setRegister(true)
    }
    const handleChangeTwo = (e) => {
        setRegister(false)
        setLogin(true)
    }
    return (
        <div className='container'>
            <div className='intro'>
                <Typography variant="h4">ManWell</Typography>
                <Typography>Have you been using your money carelesly or wasting your time?<br></br>Then we are here for you, because we are going to help you minimise the losses you met because of poor management. You will have a chance to keep track of your profit and losses with us.</Typography>
                {login && <button onClick={handleChange} className='btnb'>Create account</button>}
                {register && <button onClick={handleChangeTwo} className='btnb'>Login</button>}
            </div>
            <div className='forms'>
                {login && <Login/>}
                {register && <Register/>}
            </div>
        </div>
    )
}

export default Home;