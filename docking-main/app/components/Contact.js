import React from 'react'
import {FaEnvelope, FaLocationArrow, FaPhoneAlt} from 'react-icons/fa';
import { MdLockOutline} from 'react-icons/md';


function page() {
  return (
   
        <main className='flex flex-col items-center justify-center  w-full  text-center py-2 bg-[#faf7f2] '>

                {/* wraper div */}
            <div className='flex flex-col md:flex-row   justify-center  w-full p-16 '>

                        
                                <div className=' w-[50%]  p-6 rounded bg-primary'>
                   
                                    <div className='py-10'>
                                        <h2 className='md:text-3xl text-2xl font-bold text-optional mb-2'>Send us a message</h2>
                                        <p className="  mb-4 mt-6 px-12">
                                                We would love to hear from you! Fill out the form below and we'll
                                        get back to you as soon as possible.
                                    </p>

                                    <div className='border-2 w-10 border-optional inline-block mb-8'></div>
                                
                                  
                                   
                                     <div className='flex flex-col items-center '>

                                            <div className='bg-[#edf2f7] w-[70%] p-2 flex items-center mb-3s mb-3'>
                                    
                                            <input type='name' name='name' placeholder='Name' className='bg-[#edf2f7] outline-none text-sm flex-1  '/>
                                            </div>
                                            <div className='bg-[#edf2f7] w-[70%] p-2 flex items-center  mb-4'>
                                        
                                            <input type='email' name='email' placeholder='Email' className='bg-[#edf2f7] outline-none text-sm flex-1  '/>
                                            </div>
                                            <div className='bg-[#edf2f7] w-[70%] p-2 flex items-center mb-4'>
                                        
                                        <input type='Ämne' name='email' placeholder='Ämne' className='bg-[#edf2f7] outline-none text-sm flex-1  '/>
                                        </div>

                                            <div className='bg-[#edf2f7] w-[70%]  p-2 flex items-center '>
                                          
                                            </div>
                                            <div className='bg-[#edf2f7] w-[70%] p-2 flex items-center mb-3s mb-3'>
                                            <textarea
                                                id="message"
                                                className="bg-[#edf2f7] outline-none text-sm flex-1 "
                                                rows="4"
                                                placeholder="Write your message"
                                            ></textarea>
                                            </div>
                                           
                                            
                                            <a href='#' className='border-2 mt-8 border-optional hover:border-primary text-optional rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-[#1a1a64] hover:text-primary '>Sign In</a>


                                        </div>
                            </div>
                        </div>

                    {/* sign up section */}
                    <div className='w-full md:w-[40%] bg-[#4343cf]  text-primary rounded  md:rounded-tr-2xl md:rounded-br-2xl py-16'>
                    <p className='mb-10'>Contacts us</p>
                    <h2 className='text-3xl font-bold mb-2  '>We are here for you</h2>
                    <div className='border-2 w-10 border inline-block  '></div>
                    <p className='mb-10 mt-8'>Fill up personal information and and start journey with us!</p>
                    <div clas>
                    
                    <div className='flex flex-col items-center mb-10'><spam className="flex flex-row px-2  ">

                    <FaPhoneAlt className='mt-2'/>   <h2 className='text-xl font-semibold'>&nbsp; - Telefone:</h2></spam>
                    <h3><a href="tel:090-123456">090-123456</a></h3>
                    </div>
                    <div className='flex flex-col items-center mb-10'><spam className="flex flex-row px-2   "><FaEnvelope className='mt-2'/>   <h2 className='text-xl font-semibold'>&nbsp; - Email:</h2></spam>
                    <a href="mailto:ursziakan@gmail.com">
    <h3>ursziakan@gmail.com</h3>
  </a>
                    </div>
                    <div className='flex flex-col items-center mb-10 '><spam className="flex flex-row px-2   pt-6 "><FaLocationArrow className='mt-2'/>   <h2 className='text-xl font-semibold'>&nbsp; -     Location</h2></spam>
                  <h3>Lorem ipsum Lorem 234 Umeå</h3>
                    </div>
                    </div>
   
                   

                </div>
            </div>

        </main>



   
  )
}

export default page