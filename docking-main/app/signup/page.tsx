"use client"
import Link from 'next/link';
import React, { SyntheticEvent, useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [companyId, setCompanyId] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault(); // Prevent form submission and page refresh

        try {
            const response = await fetch('http://localhost:7064/api/Users/RegisterUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password,
                    firstName,
                    lastName,
                    gender,
                    address,
                    userAvatar
                    
                })
            });

            if (response.ok) {
                // Handle successful registration here
                console.log('Registration successful');

                // Use .json() to parse the response body as JSON
                const responseBody = await response.json();
                console.log(responseBody);
            } else {
                // Handle failed registration here
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <main className='flex flex-col items-center justify-center w-full flex-1 text-center min-h-screen py-2 bg-[#faf7f2]'>
            <div className="relative h-[400px] flex bg-cover bg-center text-primary opacity-90" style={{ backgroundImage: "url('/images/docks.jpg')" }}>
                {/* ... Rest of the overlay and content */}
            </div>
            <form onSubmit={submit}>
                <div className='bg-primary flex flex-col md:flex-row rounded-2xl shadow-2xl my-20 md:w-full md:max-w-4xl'>
                    <div className='w-full md:w-3/5 p-5 '>
                        <div className='font-bold text-center md:text-left'>
                            <span className='text-newback'>Company</span>Name
                        </div>
                        <div className='py-10'>
                            <h2 className='md:text-3xl text-2xl font-bold text-optional mb-2'>Sign Up</h2>
                            <div className='border-2 w-10 border-optional inline-block mb-2'></div>
                            <div className='flex flex-col items-center '>
                                <div className='bg-[#edf2f7] w-64 p-2 flex items-center mb-3'>
                                    <FaEnvelope className='text-[#a0aec0] mr-2'/>
                                    <input type='email' name='email' placeholder='Email' onChange={e => setEmail(e.target.value)} className='bg-[#edf2f7] outline-none text-sm flex-1' />
                                </div>
                                <div className='bg-[#edf2f7] w-64 p-2 flex items-center '>
                                    <MdLockOutline  className='text-[#a0aec0] mr-2'/>
                                    <input type='password' name='password' placeholder='Password'  onChange={e => setPassword(e.target.value)} className='bg-[#edf2f7] outline-none text-sm flex-1' />
                                </div>
                                {/* Additional input fields */}
                                <input type='text' name='firstName' placeholder='First Name' onChange={e => setFirstName(e.target.value)} className='bg-[#edf2f7] outline-none text-sm w-64 p-2 mt-3' />
                                <input type='text' name='lastName' placeholder='Last Name' onChange={e => setLastName(e.target.value)} className='bg-[#edf2f7] outline-none text-sm w-64 p-2 mt-3' />
                                <input type='text' name='gender' placeholder='Gender' onChange={e => setGender(e.target.value)} className='bg-[#edf2f7] outline-none text-sm w-64 p-2 mt-3' />
                                <input type='text' name='address' placeholder='Address' onChange={e => setAddress(e.target.value)} className='bg-[#edf2f7] outline-none text-sm w-64 p-2 mt-3' />
                                <input type='text' name='userAvatar' placeholder='User Avatar' onChange={e => setUserAvatar(e.target.value)} className='bg-[#edf2f7] outline-none text-sm w-64 p-2 mt-3' />
                                <input type='text' name='companyId' placeholder='Company ID' onChange={e => setCompanyId(e.target.value)} className='bg-[#edf2f7] outline-none text-sm w-64 p-2 mt-3' />
                                <button className='border-2 border-optional text-optional rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-optional hover:text-primary' type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-2/5 bg-[#1a1a64] text-primary rounded md:rounded-tr-2xl md:rounded-br-2xl py-36 px-12'>
                        {/* ... Rest of the sign up section */}
                    </div>
                </div>
            </form>
        </main>
    );
};

export default Page;
