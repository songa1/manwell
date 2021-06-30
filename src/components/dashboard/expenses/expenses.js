import React, {useState} from 'react'
import NavBar from '../navbar';
import {Typography, Button, TextField} from '@material-ui/core'
import MaterialTable from 'material-table'
import moment from 'moment'
import Footer from '../footer';

function Expenses(){
    const rows = [
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "120,000Rwf", description: "I bought a new computer"
        },
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "120,000Rwf", description: "I bought a new computer"
        },
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "120,000Rwf", description: "I bought a new computer"
        },
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "120,000Rwf", description: "I bought a new computer"
        },
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "120,000Rwf", description: "I bought a new computer"
        },
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "120,000Rwf", description: "I bought a new computer"
        },
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "120,000Rwf", description: "I bought a new computer"
        },
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "120,000Rwf", description: "I bought a new computer"
        },
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "120,000Rwf", description: "I bought a new computer"
        },
        {
            date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'), amount: "120,000Rwf", description: "I bought a new computer"
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
            field: 'description', 
            title: 'Description', 
            width: "33%", 
            headerClassName: 'super-app-theme--header', 
        }
    ];
    return (
        <div>
            <NavBar/>
            <div className="income-container">
                <div className='stat-title'>
                    <Typography style={{color: '#3065B5', fontWeight: 'bold'}} variant="h4">Add new expense</Typography>
                </div>
                <div className='income'>
                    
                    <div>
                        <div style={{width: '100%', display: 'grid', gridTemplateColumns: '50% 50%'}}>
                            <div>
                                <label>Date</label>
                                <input type="date" style={{width: '99%', padding: '10px', margin: '5px 0', outline: '0'}}></input>
                            </div>
                            <div>
                                <label>Amount</label>
                                <input type="amount" style={{width: '99%', padding: '10px', margin: '5px 0', outline: '0'}}></input>
                            </div>
                        </div>
                        <label for="comment">Description (how you used money)</label>
                        <textarea label="Add comment" style={{width: "100%", margin: "5px 0", outline: '0', padding: "10px"}} rows={4} id="comment"/>
                        <Button variant="contained" color="primary">Add</Button>
                    </div>
                </div>
                <div className="income-summary" style={{margin: '10px 0'}}>
                    <Typography style={{color: '#3065B5', fontWeight: 'bold'}} variant="h6">Expense records</Typography>
                    <MaterialTable
                        data={rows} columns={columns}
                        options={{toolbar: false, sorting: true}}
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

export default Expenses;