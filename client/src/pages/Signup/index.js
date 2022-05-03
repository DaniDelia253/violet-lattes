import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

function Signup() {
    const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div>

            <h2 className='pageTitle'>Signup</h2>
            <form className='pageTitle' onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                    <label className='formText mx-2' htmlFor="firstName">First Name:</label>
                    <input
                        className='formText input'
                        placeholder="First"
                        name="firstName"
                        type="firstName"
                        id="firstName"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label className='formText mx-2' htmlFor="lastName">Last Name:</label>
                    <input
                        className='formText input'
                        placeholder="Last"
                        name="lastName"
                        type="lastName"
                        id="lastName"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label className='formText mx-2' htmlFor="email">Email:</label>
                    <input
                        className='formText input'
                        placeholder="youremail@test.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label className='formText mx-2' htmlFor="pwd">Password:</label>
                    <input
                        className='formText'
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                    <div>
                        <p className="error-text small-error-text">First name, last name, valid email address, and a password with more than 4 characters are required! </p>

                    </div>
                ) : null}
                <div className="flex-row flex-end">
                    <button className='addToCartMainBtn formSubmitBtn' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
