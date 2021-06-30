import React from 'react'
import {Typography} from '@material-ui/core'

function Footer() {
    return (
        <div style={{width:"100%",display: 'grid', gridTemplateColumns: '33% 33% 33%', justifyContent: 'start', textAlign: 'center'}}>
            <Typography style={{padding: '10px', color: '#3065B5'}}>&copy; ManWell</Typography>
            <Typography style={{padding: '10px', color: '#3065B5'}}>All right reserved</Typography>
            <Typography style={{padding: '10px', color: '#3065B5'}}>support@manwell.rw</Typography>
        </div>
    )
}

export default Footer;