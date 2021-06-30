import React, {useState} from 'react'
import NavBar from '../navbar';
import {Typography, Select, MenuItem, Button} from '@material-ui/core'
import Footer from '../footer'

function Stats(){
    const [time, setTime] = useState('7')
    return (
        <div>
            <NavBar/>
            <div className="stat-container">
                <div className='stat-title'>
                    <Typography style={{color: '#3065B5', fontWeight: 'bold'}} variant="h4">Statistics</Typography>
                    <Select value={time} variant="outlined" onChange={(e)=> setTime(e.target.value)}>
                        <MenuItem value={7}>7 days</MenuItem>
                        <MenuItem value={28}>28 days</MenuItem>
                        <MenuItem value={365}>365 days</MenuItem>
                    </Select>
                </div>
                <div className='stats'>
                    <div style={{display: 'grid', gridTemplateColumns: '100%', justifyContent:"center", alignItems: 'center'}}>
                        <Typography><b>Total Income:</b> 200000</Typography>
                        <Typography><b>Total Expenses:</b> 200000</Typography>
                        <Typography><b>Total Profit:</b> 0</Typography>
                        <Typography><b>Total Loss:</b> 0</Typography>
                    </div>
                    <div>
                        <label for="comment">Add comment</label>
                        <textarea label="Add comment" style={{width: "100%", margin: "5px 0", outline: '0', padding: "10px"}} rows={4} id="comment"/>
                        <Button variant="contained" color="primary">Save</Button>
                    </div>
                </div>
                <div className="balance">
                        <Typography style={{padding: "15px", textAlign: "center", color: "#3065B5"}}>Current balance: 4500 RWF</Typography>
                </div>
                <div className="activities">
                    <div style={{backgroundColor: "#3065B5"}}>
                        <Typography variant="h6">Activities achieved</Typography>
                        <ol>
                            <li>Bought phone</li>
                            <li>Went to Nyungwe</li>
                            <li>Won my race</li>
                            <li>Joined the competition</li>
                            <li>Sports</li>
                        </ol>
                        <Button variant="contained" color="primary">More tasks</Button>
                    </div>
                    <div style={{backgroundColor: "rgb(182, 33, 33)"}}>
                        <Typography variant="h6">Activities failed</Typography>
                        <ol>
                            <li>To buy a house</li>
                            <li>To become a millionaire</li>
                            <li>To win the compentition</li>
                            <li>Marriage</li>
                            <li>Graduating</li>
                            <li>Learn piano</li>
                        </ol>
                        <Button variant="contained" color="primary">Why?</Button>
                    </div>
                    <div style={{backgroundColor: "green"}}>
                        <Typography variant="h6">Tips to improve</Typography>
                        <ol>
                            <li><b>Set goals correctly</b> Set goals that are achievable and measurable. Use the SMART method when setting goals. In essence, make sure the goals you set are Specific, Measurable, Attainable, Relevant, and Timely.</li>
                            <li><b>Prioritize wisely</b> Prioritize tasks based on importance and urgency.</li>
                            <li><b>Set a time limit to complete a task</b> Setting time constraints for completing tasks helps you be more focused and efficient.</li>
                            <li><b>Take a break between tasks</b>  Allow some downtime between tasks to clear your head and refresh yourself. Consider grabbing a brief nap, going for a short walk, or meditating.</li>
                            <li><b>Organize yourself</b> Utilize your calendar for more long-term time management.</li>
                            <li><b>Remove non-essential tasks/activities</b></li>
                            <li><b>Plan ahead</b></li>
                        </ol>
                        <Button variant="contained" color="primary">Read More</Button>
                    </div>
                </div>
                <hr style={{color: '#3065B5'}}></hr>
                <Footer/>
            </div>
        </div>
    )
}

export default Stats;