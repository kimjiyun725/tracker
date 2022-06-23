import { Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const SalesPersonForm = ({onNewSalesPerson}) => {
    
    const [salesPerson, setSalesPerson] = useState([]);
    const [addFormData, setAddFormData] = useState({
        first_name: '',
        last_name: '',
        address: '',
        phone: '',
        start_date: '',
        termination_date: '',
        manager:''
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        const newSalesPerson = {
            id: uuidv4(),
            first_name: addFormData.first_name,
            last_name: addFormData.last_name,
            address: addFormData.address,
            phone: addFormData.phone,
            start_date: addFormData.start_date,
            termination_date: addFormData.termination_date,
            manager: addFormData.manager
        };

        const newSalesPersons = [...salesPerson, newSalesPerson];
        setSalesPerson(newSalesPersons);
    };

    return (
        <Container style={{marginTop: '10px'}} maxWidth={false}>
            <form onSubmit={handleAddFormSubmit}>
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
                        const send = salesPerson;
                        const response = await fetch('/salespersons', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(send)
                        })
                        
                        if (response.ok) {
                            console.log('reponse worked!');
                            onNewSalesPerson(salesPerson)

                        }
                    }}>Add SalesPerson</Button>
            </form>
        </Container>
    );    
};