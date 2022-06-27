import React, { useState, useEffect } from 'react';
import { Products } from "../components/Products";
import { ProductForm } from "../components/ProductForm";

function ProductPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products").then(response => 
            response.json().then(data => {
                setProducts(data);
            })
        );
    }, []);

    return (
        <div style={{
            marginTop: '50px'
            }}>
            <ProductForm />
            <Products products={products} />
        </div>
    )
}

export default ProductPage;