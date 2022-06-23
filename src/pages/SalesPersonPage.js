import React, { useState, useEffect } from 'react';
import { SalesPersons } from "../components/SalesPersons";
import { SalesPersonForm } from "../components/SalesPersonForm";

function SalesPersonPage() {

    const [salesPersons, setSalesPersons] = useState([]);

    useEffect(() => {
        fetch("/salespersons").then(response => 
            response.json().then(data => {
                setSalesPersons(data);
            })
        );
    }, []);

    return (
        <div style={{
            marginTop: '50px'
            }}>
            <SalesPersonForm onNewSalesPerson={salesPerson => setSalesPersons(currentSalesPersons => [...currentSalesPersons, salesPerson])} />
            <SalesPersons salesPersons={salesPersons} /> 
        </div>
    )
}

export default SalesPersonPage;