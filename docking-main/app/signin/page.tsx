"use client"
import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import Modal from '../components/Modal';
import Cookies from 'universal-cookie';
import { AiFillEye } from 'react-icons/ai';
import { useSession } from '../context/SessionContext';

const Page = () => {
    const cookies = new Cookies();
    const navigate = useRouter();
    const session = useSession();
    const [alreadyLoggedIn, setAlreadyLoggedIn] = useState(false)
    useEffect(() => {
        if (session?.session) {
            setAlreadyLoggedIn(true);
        }
    }, [])

    const [userName, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const handleSubmission = async (e: FormEvent) => {
        e.preventDefault(); // Prevent form submission and page refresh
        try {
            const response = await fetch('https://localhost:7064/api/Users/AuthenticateUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    userName,
                    password
                })
            });

            if (response.ok) {
                const responseBody = await response.json();
                const sessionToken: string = responseBody.content.accessToken;
                cookies.set('jwt_authorization', sessionToken)
                session?.setSession(sessionToken)
                setShowModal(true);
                setTimeout(() => {
                    setShowModal(false);
                }, 2000);

                navigate.replace('/');

            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <main className='overflow-x-hidden flex flex-col items-center justify-center w-full flex-1 text-center min-h-screen py-2 bg-[#faf7f2]   '>
            <div className="relative h-[400px] flex bg-cover bg-center text-primary opacity-90" style={{ backgroundImage: "url('/images/docks.jpg')" }}>
                <div className="absolute inset-0 bg-optional opacity-60"></div> {/* Semi-dark overlay */}
                <div className="relative w-screen z-10 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-4">Login Page</h1>
                    {/* <p className="text-lg w-[50%] text-center">
                        Providing Docking Leasing and Rental Services in Umeå. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p> */}
                </div>
            </div>
            <form onSubmit={handleSubmission} className='z-10 mt-[-20%]'>
                <div className='bg-primary flex flex-col md:flex-row rounded-2xl shadow-2xl my-20  md:w-full md:max-w-4xl '>
                    {/* sign in section */}
                    <div className='w-full md:w-3/5 p-5 '>
                        <div className='font-bold text-center md:text-left'>
                            <span className='text-newback'>Company</span>Name
                        </div>
                        <div className='py-10'>
                            <h2 className='md:text-3xl text-2xl font-bold text-optional mb-2'>Sign in to Account</h2>
                            <div className='border-2 w-10 border-optional inline-block mb-2'></div>
                            <div className='flex justify-center my-2'>
                                <a href='#' className='border-2 border-[#edf2f7] rounded-full mx-1 p-2'>
                                    <FaFacebookF className='text-sm' />
                                </a>
                                <a href='#' className='border-2 border-[#edf2f7] rounded-full mx-1 p-2 '>
                                    <FaGoogle className='text-sm' />

                                </a>

                                <a href='#' className='border-2 border-[#edf2f7] p-2 rounded-full mx-1'>
                                    <FaLinkedinIn className='text-sm' />

                                </a>
                            </div>
                            <p className='text-[#4a5568] my-3 mt-4 md:mt-0'> Or use your E-mail account</p>

                            <div className='flex flex-col items-center '>

                                <div className='bg-[#edf2f7] w-64 p-2 flex items-center mb-3s mb-3'>
                                    <FaEnvelope className='text-[#a0aec0] mr-2' />
                                    <input type='email' name='email' placeholder='Email' onChange={e => setEmail(e.target.value)} className='bg-[#edf2f7] outline-none text-sm flex-1  ' />
                                </div>

                                <div className='bg-[#edf2f7] w-64 p-2 flex items-center '>
                                    <MdLockOutline className='text-[#a0aec0] mr-2' />
                                    <input
                                        type={`${showPassword ? 'text' : 'password'}`}
                                        name='password' placeholder='Password' onChange={e => setPassword(e.target.value)} className='bg-[#edf2f7] outline-none text-sm flex-1' />
                                    <button onClick={() => setShowPassword(!showPassword)}>
                                        <AiFillEye className='text-[#a0aec0] mr-2' />
                                    </button>
                                </div>

                                <div className='flex w-64 mb-5 justify-between mt-2 md:mt-0'>
                                    <label className='flex items-center text-xs'><input type='checkbox' name='remember' className='mr-1' />Remember me</label>
                                    <a href="#" className='text-xs'>Forgot Password</a>
                                </div>

                                <button className='border-2 border-optional text-optional rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-optional hover:text-primary ' type="submit">
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* sign up section */}
                    <div className='w-full md:w-2/5 bg-[#1a1a64]  text-primary rounded  md:rounded-tr-2xl md:rounded-br-2xl py-36 px-12'>
                        <p>Sign up Section</p>
                        <h2 className='text-3xl font-bold mb-2 '>Hello, David</h2>
                        <div className='border-2 w-10 inline-block mb-2 '></div>
                        <p className='mb-10'>Fill up personal information and and start journey with us!</p>
                        <Link href='/signup' className='border-2 border-primary rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-primary hover:text-optional '>Sign Up</Link>

                    </div>
                </div>
            </form>
            {showModal && (
                <Modal
                    title="Redirecting.."
                    content="You are logged in successfully. "
                    setShowModal={setShowModal}
                />
            )}
        </main>
    );
};

export default Page;