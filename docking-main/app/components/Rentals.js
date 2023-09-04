import React from 'react'
import { FaFacebookF, FaLinkedinIn,  FaGoogle, FaEnvelope } from 'react-icons/fa';
import { MdLockOutline} from 'react-icons/md';
import Image from 'next/image'


function Rentals() {
  return (
   
        <main className='flex flex-col items-center bg-[#faf7f2]   justify-center w-[100%] flex-1     min-h-screen py-2' >
 
                {/* wraper div */}
            <div className='flex flex-col md:flex-row  w-[100%] p-8  px-28 py-20'  >

                            {/* sign in section */}
                        <div className='w-full md:w-[50%]  py-8'>
                           

                            <div className=' pr-16'>
                        
                                <h2 className='md:text-3xl text-2xl font-bold text-optional  '>Providing Large Docks
                                  Rental For A Perfect</h2>

                                    <div className='flex justify-center items-center '>
                                    <div className='border-2 w-10 border-optional inline-block justify-center'></div>
                                    </div>

                                <p className='text-optional mt-8 text-justify '> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                 <div className='flex flex-col text-left mt-6 '>
                                     <h2 className='md:text-2xl text-xl font-bold mb-2'>Our Docking Charges</h2></div>
                                <div > 
                                <ul class="list-none">
                             <li class="relative">
                                             <span className="absolute left-0 top-0 ml-3">&#10148;</span>
                                    <span className="ml-12 ">Item 1 write some thing important</span>
                                          </li>
                                      <li class="relative">
                                       <span className="absolute left-0 top-0 ml-3">&#10148;</span>
                                      <span class="ml-12">Item 2 write some thing important</span>
                                            </li>
                              <li class="relative">
                                <span className="absolute left-0 top-0 ml-3">&#10148;</span>
                                <span class="ml-12">Item 3 write some thing important</span>
                              </li>
                                        </ul>

                                    <a href='#' className='border-2 mt-6 text-primary bg-[#1a1a64] rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-primary hover:text-optional '>Sign In</a>
                                   </div>
                                        
                            </div>
                        </div>

                    {/* sign up section */}
                    <div className='w-full md:w-[50%]  bg-newback text-primary rounded  md:rounded-tr-2xl md:rounded-br-2xl '>
                    <img src="./images/docks.jpg"    className="h-[100%] w-full object-cover rounded" alt="Image Description"/>
           
                </div>
            </div>

        </main>



   
  )
}

export default Rentals