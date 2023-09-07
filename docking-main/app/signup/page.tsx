"use client"
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

import Modal from '../components/Modal';
const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [showModal, setShowModal] = useState(false);

    const submit = async (e: FormEvent) => {
        e.preventDefault(); // Prevent form submission and page refresh
        try {
            const response = await fetch('https://localhost:7064/api/Users/RegisterUser', {
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
                const responseBody = await response.json();
                setShowModal(true);
                setTimeout(() => {
                    setShowModal(false);
                }, 2000);
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <main className='overflow-x-hidden flex flex-col items-center justify-center w-full flex-1 text-center min-h-screen py-2 bg-[#faf7f2]'>
            <div className="w-screen justify-center relative h-[400px] flex bg-cover bg-center text-primary opacity-90" style={{ backgroundImage: "url('/images/docks.jpg')" }}>
                <div className="absolute inset-0 bg-optional opacity-60"></div> {/* Semi-dark overlay */}
                <div className="relative  z-10 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-4">Registration Page</h1>
                    {/* <p className="md:text-lg md:w-[50%] text-center">
                        Providing Docking Leasing and Rental Services in Umeå. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p> */}
                </div>
            </div>
            <form onSubmit={submit} className='mt-[-20%] z-10' >
                <div className='bg-primary flex flex-col md:flex-row rounded-2xl shadow-2xl my-20  md:w-full md:max-w-4xl '>
                    {/* sign in section */}
                    <div className='w-full md:w-4/5 p-5'>
                        <div className='font-bold text-center md:text-left'>
                            <span className='text-newback'>Company</span>Name
                        </div>
                        <div className='py-10'>
                            <h2 className='md:text-3xl text-2xl font-bold text-optional mb-2'>Register Yourself</h2>
                            <div className='border-2 w-10 border-optional inline-block mb-2'></div>
                            <div className='flex flex-col justify-center'>
                                <div className='flex space-x-2 w-full'>
                                    <div className='bg-[#edf2f7] w-64 p-2 flex items-center '>
                                        <FaEnvelope className='text-[#a0aec0] mr-2' />
                                        <input type='email' name='email' placeholder='Email' onChange={e => setEmail(e.target.value)} className='bg-[#edf2f7] rounded outline-none text-sm flex-1' />
                                    </div>
                                    <div className='bg-[#edf2f7] w-64 p-2 flex items-center '>
                                        <MdLockOutline className='text-[#a0aec0] mr-2' />
                                        <input type='password' name='password' placeholder='Password' onChange={e => setPassword(e.target.value)} className='bg-[#edf2f7] rounded outline-none text-sm flex-1' />
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row space-x-2'>
                                    <input type='text' name='firstName' placeholder='First Name' onChange={e => setFirstName(e.target.value)} className='bg-[#edf2f7] outline-none text-sm w-64 p-2 mt-3' />
                                    <input type='text' name='lastName' placeholder='Last Name' onChange={e => setLastName(e.target.value)} className='bg-[#edf2f7] rounded outline-none text-sm w-64 p-2 mt-3' />
                                </div>
                                <div className='flex flex-col md:flex-row space-x-2'>
                                    <input type='text' name='gender' placeholder='Gender' onChange={e => setGender(e.target.value)} className='bg-[#edf2f7] rounded outline-none text-sm w-64 p-2 mt-3' />
                                    <input type='text' name='address' placeholder='Address' onChange={e => setAddress(e.target.value)} className='bg-[#edf2f7] rounded outline-none text-sm w-64 p-2 mt-3' />
                                </div>
                                <div className='flex flex-col md:flex-row space-x-2'>
                                    <input type='text' name='userAvatar' placeholder='User Avatar' onChange={e => setUserAvatar(e.target.value)} className='bg-[#edf2f7] rounded outline-none text-sm w-64 p-2 mt-3' />
                                </div>
                                <div className='flex justify-center'>
                                <button className='mt-5 border-2 border-optional text-optional rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-optional hover:text-primary' type="submit">
                                    Sign Up
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-2/5 bg-[#1a1a64]  text-primary rounded  md:rounded-tr-2xl md:rounded-br-2xl py-36 px-12'>
                        <h2 className='text-3xl font-bold mb-2 '>Hello, David</h2>
                        <div className='border-2 w-10 inline-block mb-2 '></div>
                        <p className='mb-10'>Already a member? Click below to sign in</p>
                        <Link href='/signin' className='border-2 border-primary rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-primary hover:text-optional '>Sign In</Link>

                    </div>
                </div>
            </form>
            {
                showModal && (
                    <Modal
                        title="Registration Successful"
                        content="You are registered successfully."
                        setShowModal={setShowModal}
                    />
                )
            }
        </main >
    );
};

export default Page;