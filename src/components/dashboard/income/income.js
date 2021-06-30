import React, {useState} from 'react'
import NavBar from '../navbar';
import {Typography, Button, TextField} from '@material-ui/core'
import MaterialTable from 'material-table'
import moment from 'moment'
import Footer from '../footer';

function Income(){
    const [date, setDate] = useState();
    const [amount, setAmount] = useState();
    const [source, setSource] = useState();
    const rows = [
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "12,000Rwf", source: "I got paid for the computer I fixed"
        },
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "12,000Rwf", source: "I got paid for the computer I fixed"
        },
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "12,000Rwf", source: "I got paid for the computer I fixed"
        },
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "12,000Rwf", source: "I got paid for the computer I fixed"
        },
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "12,000Rwf", source: "I got paid for the computer I fixed"
        },
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "12,000Rwf", source: "I got paid for the computer I fixed"
        },
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "12,000Rwf", source: "I got paid for the computer I fixed"
        }
    ];
    const columns = [
        { 
            field: 'date', 
            title: 'Date', 
            width: "33%", 
            headerClassName: 'super-app-theme--header', 
        },
        { 
            field: 'amount', 
            title: 'Amount', 
            width: "33%", 
            headerClassName: 'super-app-theme--header', 
        },
        { 
            field: 'source', 
            title: 'Source of income', 
            width: "33%", 
            headerClassName: 'super-app-theme--header', 
        }
    ];
    const handleAdd = (e) => {
        e.preventDefault();
        const data = {date, amount, source}
        rows.push(data);
    }
    return (
        <div>
            <NavBar/>
            <div className="income-container">
                <div className='stat-title'>
                    <Typography style={{color: '#3065B5', fontWeight: 'bold'}} variant="h4">Add new income</Typography>
                </div>
                <div className='income'>
                    
                    <div>
                        <div style={{width: '100%', display: 'grid', gridTemplateColumns: '50% 50%'}}>
                            <div>
                                <label>Date</label>
                                <input type="date" style={{width: '99%', padding: '10px', margin: '5px 0', outline: '0'}} value={date} onChange={(e) =>setDate(e.target.value)}></input>
                            </div>
                            <div>
                                <label>Amount</label>
                                <input type="amount" style={{width: '99%', padding: '10px', margin: '5px 0', outline: '0'}} value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
                            </div>
                        </div>
                        <label for="comment">Source of income</label>
                        <textarea style={{width: "100%", margin: "5px 0", outline: '0', padding: "10px"}} rows={4} id="comment" value={source} onChange={(e)=>setSource(e.target.value)}/>
                        <Button variant="contained" color="primary" onClick={handleAdd}>Add</Button>
                    </div>
                </div>
                <div className="income-summary" style={{margin: '10px 0'}}>
                    <Typography style={{color: '#3065B5', fontWeight: 'bold'}} variant="h6">Income records</Typography>
                    <MaterialTable
                        data={rows} columns={columns}
                        options={{toolbar: false, sorting: false}}
                        style={{width: '100%'}}
                        actions={[
                            {
                              icon: 'delete',
                              tooltip: 'Delete event',
                              onClick: (event, rowData) => {
                              }
                            },
                            {
                                icon: 'edit',
                                tooltip: 'Edit event',
                                onClick: (event, rowData) => {
                                }
                              }
                          ]}
                    />
                </div>
                <hr></hr>
                <Footer/>
            </div>
        </div>
    )
}

export default Income;