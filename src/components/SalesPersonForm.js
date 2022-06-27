import { Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const SalesPersonForm = () => {
    
    const [addFormData, setAddFormData] = useState({
        id: uuidv4(),
        first_name: '',
        last_name: '',
        address: '',
        phone: '',
        start_date: '',
        termination_date: '',
        manager: ''
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };

    return (
        <Container style={{marginTop: '10px'}} maxWidth={false}>
            <form>
                <TextField
                required
                style={{marginRight: '10px'}}
                id="outlined-required"
                label="First Name"
                name='first_name'
                onChange={handleAddFormChange}
                />
                <TextField
                required
                style={{marginRight: '10px'}}
                id="outlined-required"
                label="Last Name"
                name='last_name'
                onChange={handleAddFormChange}
                />
                <TextField
                required
                style={{marginRight: '10px'}}
                id="outlined-required"
                label="Address"
                name='address'
                onChange={handleAddFormChange}
                />
                <TextField
                required
                style={{marginRight: '10px'}}
                id="outlined-required"
                label="Phone #"
                name='phone'
                onChange={handleAddFormChange}
                />
                <TextField
                required
                style={{marginRight: '10px'}}
                id="outlined-required"
                label="Start Date"
                name='start_date'
                onChange={handleAddFormChange}
                />
                <TextField
                required
                style={{marginRight: '10px'}}
                id="outlined-required"
                label="Termination Date"
                name='termination_date'
                onChange={handleAddFormChange}
                />
                <TextField
                required
                style={{marginRight: '10px'}}
                id="outlined-required"
                label="Manager's Full Name"
                name='manager'
                onChange={handleAddFormChange}
                />
                <Button
                    style={{marginTop: '10px'}} 
                    variant='contained' 
                    type='submit' 
                    onClick={async () => {
                        const send = addFormData;
                        await fetch('/salespersons', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(send)
                        })
                    }}>Add SalesPerson</Button>
            </form>
        </Container>
    );    
};