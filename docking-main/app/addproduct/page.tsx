"use client"
import React, { useState, SyntheticEvent } from 'react';

const AddProductForm: React.FC = () => {
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState('');
    const [rentPerMonth, setRentPerMonth] = useState<number>(0);
    const [spaceNumber, setSpaceNumber] = useState('');
    const [status, setStatus] = useState<boolean>(true);
    const [contractDate, setContractDate] = useState<string>('2023-08-16T14:19:03.138Z');
    const [available, setAvailable] = useState<boolean>(true);
    const [addedDate, setAddedDate] = useState<string>('2023-08-16T14:19:03.138Z');

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            const bearerToken = 'yourBearerTokenHere'; // Replace with your actual bearer token
        
            const response = await fetch('https://localhost:7064/api/Products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${bearerToken}` // Include the bearer token here
                },
                body: JSON.stringify({
                    id: 0,
                    address,
                    location,
                    rentPerMonth,
                    spaceNumber,
                    status,
                    contractDate,
                    available,
                    addedDate
                })
            });
        
            if (response.ok) {
                console.log('Product added successfully');
                // You can handle success or navigation here
            } else {
                console.error('Failed to add product');
                // You can handle failure here
            }
        } catch (error) {
            console.error('Error while adding product:', error);
        }
        
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Address:
                    <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
                </label>
                <br />
                <label>
                    Location:
                    <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
                </label>
                <br />
                <label>
                    Rent Per Month:
                    <input type="number" value={rentPerMonth} onChange={e => setRentPerMonth(Number(e.target.value))} />
                </label>
                <br />
                <label>
                    Space Number:
                    <input type="text" value={spaceNumber} onChange={e => setSpaceNumber(e.target.value)} />
                </label>
                <br />
                <label>
                    Status:
                    <input type="checkbox" checked={status} onChange={e => setStatus(e.target.checked)} />
                </label>
                <br />
                <label>
                    Contract Date:
                    <input type="text" value={contractDate} onChange={e => setContractDate(e.target.value)} />
                </label>
                <br />
                <label>
                    Available:
                    <input type="checkbox" checked={available} onChange={e => setAvailable(e.target.checked)} />
                </label>
                <br />
                <label>
                    Added Date:
                    <input type="text" value={addedDate} onChange={e => setAddedDate(e.target.value)} />
                </label>
                <br />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProductForm;
