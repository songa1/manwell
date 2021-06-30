import React from 'react'
import {Typography} from '@material-ui/core'

function Register(){
    return (
        <div>
            <form>
                <Typography style={{textAlign: 'center'}}>Create a new account</Typography>
                <hr></hr>
                <label for="name">Name</label>
                <input type="text" id="name"></input>
                <label for="email">Email</label>
                <input type="email" id="email"></input>
                <label for="password">Password</label>
                <input type="password" id="password"></input>
                <label for="passwordTwo">Password</label>
                <input type="password" id="passwordTwo"></input>
                <button className="btnb">Create</button>
            </form>
        </div>
    )
}

export default Register;