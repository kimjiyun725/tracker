import React, { useState, useEffect } from 'react';
import { Managers } from "../components/Managers";
import { ManagerForm } from "../components/ManagerForm";
function ManagerPage() {

    const [managers, setManagers] = useState([]);

    useEffect(() => {
        fetch("/managers").then(response => 
            response.json().then(data => {
                setManagers(data);
            })
        );
    }, []);

    return (
        <div style={{
            marginTop: '50px'
            }}>
            <ManagerForm />
            <Managers managers={managers} /> 
        </div>
    )
}

export default ManagerPage;