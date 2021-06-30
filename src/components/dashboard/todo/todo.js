import React, {useState} from 'react'
import NavBar from '../navbar';
import {Typography, Select, MenuItem, Button, FormControlLabel, Checkbox} from '@material-ui/core'
import Footer from '../footer'

function Todo(){
    const [time, setTime] = useState('Today')
    return (
        <div>
            <NavBar/>
            <div className="stat-container">
                <div className='stat-title'>
                    <Typography style={{color: '#3065B5', fontWeight: 'bold'}} variant="h4">Activity checker</Typography>
                    <Select value={time} variant="outlined" onChange={(e)=> setTime(e.target.value)}>
                        <MenuItem value={"Today"}>Today</MenuItem>
                        <MenuItem value={"Yesterday"}>Yesterday</MenuItem>
                        <MenuItem value={"Archives"}>Archives</MenuItem>
                    </Select>
                </div>
                <div className="activities">
                    <div style={{backgroundColor: "#3065B5"}}>
                        <Typography variant="h6">Pending Activities</Typography>
                        <ol>
                            <li>Bought phone</li>
                            <li>Went to Nyungwe</li>
                            <li>Won my race</li>
                            <li>Joined the competition</li>
                            <li>Sports</li>
                        </ol>
                        <Button variant="contained" color="primary">Add new</Button>
                    </div>
                    <div style={{backgroundColor: "rgb(182, 33, 33)"}}>
                        <Typography variant="h6">Activities Done</Typography>
                        <div>
                            <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
                        </div>
                        <Button variant="contained" color="primary">Edit</Button>
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

export default Todo;