import React, { useState } from 'react';


function Commissions() {
    const [formState, setFormState] = useState({ name: '', email: '', text: '' });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        alert(`submit: ${formState.email} & ${formState.password} & ${formState.firstName} ${formState.lastName}`)

    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="container my-1">

            <h2 className='pageTitle'>commissions</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-3">
                    <label className='formText mx-2' htmlFor="firstName">First Name:</label>
                    <input
                        className='formText input'
                        placeholder="name"
                        name="firstName"
                        type="firstName"
                        id="firstName"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-3">
                    <label className='formText mx-2' htmlFor="email">Email:</label>
                    <input
                        className='formText input'
                        placeholder="email"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-3">
                    <label className='formText mx-2' htmlFor="lastName"></label>
                    <textarea
                        className='formText input'
                        placeholder="What would you like to request for a commission? Give me an idea and I will be in contact about the details!"
                        name="text"
                        type="text"
                        id="text"
                        rows="5"
                        cols='30'
                        onChange={handleChange}
                    />
                </div>

                <div className="flex-row flex-end">
                    <button className='addToCartMainBtn formSubmitBtn' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Commissions;
