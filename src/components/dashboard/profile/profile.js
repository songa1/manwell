import React, {useState} from 'react'
import NavBar from '../navbar';
import passport from '../../assets/passport.jpg'
import {Typography,TextField, Button, ButtonGroup} from '@material-ui/core'
import Footer from '../footer'

function Profile(){
    const [email, setEmail] = useState('achille@techinika.com')
    const [password, setPassword] = useState('password')
    return (
        <div>
            <NavBar/>
            <div className="profile-container">
               <div>
                    <img src={passport} style={{width: '15%', borderRadius: '50%'}}></img>
                    <Typography style={{color: '#3065B5'}}>Cishahayo Songa Achille</Typography>
                    <button style={{borderRadius: '10px', border: '1px solid #3065B5', backgroundColor:'#fff', color: '#3065B5', width: '20%', padding: '10px'}}>Personal</button>
               </div>
               <div>
                   <div>
                       <TextField type="email" label='Email' variant='outlined' style={{width: '70%', margin: '20px 0'}} value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
                   </div>
                   <div>
                       <TextField type="password" label='Password' variant='outlined' style={{width: '70%', margin: '20px 0'}} value={password} onChange={(e)=>setPassword(e.target.value)} type="password"></TextField>
                   </div>
                   <a href="#">Reset password?</a>
                   <div>
                   <ButtonGroup size="small" aria-label="small outlined button group" style={{marginTop: '20px'}}>
                        <Button variant="contained" color="primary">Save Changes</Button>
                        <Button variant="contained" color="secondary">Cancel</Button>
                    </ButtonGroup>
                   </div>
               </div>
               <hr></hr>
               <Footer/>
            </div>
        </div>
    )
}

export default Profile;