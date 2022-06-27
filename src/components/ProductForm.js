import { Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ProductForm = () => {
    
    const [addFormData, setAddFormData] = useState({
        id: uuidv4(),
        name: '',
        manufacturer: '',
        style:'',
        purchase_price: '',
        quantity: '',
        commission_pct: ''
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
                label="Name"
                name='name'
                onChange={handleAddFormChange}
                />
                <TextField
                required
                style={{marginRight: '10px'}}
                id="outlined-required"
                label="Manufacturer"
                name='manufacturer'
                onChange={handleAddFormChange}
                />
                <TextField
                required
                style={{marginRight: '10px'}}
                id="outlined-required"
                label="Style"
                name='style'
                onChange={handleAddFormChange}
                />
                <TextField
                required
                style={{marginRight: '10px'}}
                id="outlined-required"
                label="Purchase Price"
                name='purchase_price'
                onChange={handleAddFormChange}
                />
                <TextField
                required
                style={{marginRight: '10px'}}
                id="outlined-required"
                label="Quantity"
                name='quantity'
                onChange={handleAddFormChange}
                />
                <TextField
                required
                style={{marginRight: '10px'}}
                id="outlined-required"
                label="Commission %"
                name='commission_pct'
                onChange={handleAddFormChange}
                />
                <Button
                    style={{marginTop: '10px'}} 
                    variant='contained' 
                    type='submit' 
                    onClick={async () => {
                        const send = addFormData;
                        await fetch('/products', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(send)
                        })
                    }}>Add Product</Button>
            </form>
        </Container>
    );    
};