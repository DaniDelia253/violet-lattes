import React, { useState } from 'react';


function Commissions() {
    const [formState, setFormState] = useState({ name: '', email: '', text: '' });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        alert(`Thank you for sending your message! I will get back you you within 1 business day about your commission! Please check the following information to ensure it is correct: 
        
        name: 
        ${formState.name} 
        
        email:
        ${formState.email} 
        
        message:
        ${formState.text}`)

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
            <form onSubmit={handleFormSubmit} action="mailto:danidavis321@gmail.com">
                <div className="flex-row space-between my-3">
                    <label className='formText mx-2' htmlFor="name">Name:</label>
                    <input
                        className='formText input'
                        placeholder="name"
                        name="name"
                        type="name"
                        id="name"
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
