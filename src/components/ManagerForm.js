import { Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ManagerForm = () => {

    const [addFormData, setAddFormData] = useState({
        id: uuidv4(),
        first_name: '',
        last_name: '',
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
                <Button
                    style={{marginTop: '10px'}} 
                    variant='contained' 
                    type='submit' 
                    onClick={async () => {
                        const send = addFormData;
                        await fetch('/managers', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(send)
                        })
                    }}>Add Manager</Button>
            </form>
        </Container>
    );    
};