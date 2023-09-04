import React from 'react'
import { FaFacebookF, FaLinkedinIn,  FaGoogle, FaEnvelope } from 'react-icons/fa';
import { MdLockOutline} from 'react-icons/md';
import Image from 'next/image'


function page() {
  return (
    
   
        <main className='flex flex-col items-center justify-center w-[100%] flex-1 px-6 md:px-20  min-h-screen py-2   '>
        <div className="relative h-[400px] flex bg-cover bg-center text-primary opacity-90" style={{ backgroundImage: "url('/images/docks.jpg')" }}>
  <div className="absolute inset-0 bg-optional opacity-60"></div> {/* Semi-dark overlay */}
  <div className="relative  z-10 flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-4">Login Page</h1>
    <p className="text-lg w-[50%] text-center">
      Providing Docking Leasing and Rental Services in Umeå. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
  </div>
</div>


                {/* wraper div */}
            <div className='bg-primary flex flex-col md:flex-row rounded-2xl shadow-2xl  w-[100%] '>

                            {/* sign in section */}
                        <div className='w-full md:w-[60%] px-20 py-8'>
                           

                            <div className=' '>
                        
                                <h2 className='md:text-3xl text-2xl font-bold text-newback  '>Providing Large Docks
                                  Rental For A Perfect</h2>

                                    <div className='flex justify-center items-center'>
                                    <div className='border-2 w-10 border-newback inline-block justify-center'></div>
                                    </div>

                                <p className='text-[#4a5568] mt-8 text-justify '> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                 <div className='flex flex-col text-left mt-6 '>
                                     <h2 className='md:text-2xl text-xl font-bold text-newback mb-2'>Our Docking Charges</h2></div>
                                <div > 
                                <ul class="list-none">
  <li class="relative">
    <span class="absolute left-0 top-0 ml-3">&#10148;</span>
    <span class="ml-12">Item 1 write some thing important</span>
  </li>
  <li class="relative">
    <span class="absolute left-0 top-0 ml-3">&#10148;</span>
    <span class="ml-12">Item 2 write some thing important</span>
  </li>
  <li class="relative">
    <span class="absolute left-0 top-0  ml-3">&#10148;</span>
    <span class="ml-12">Item 3 write some thing important</span>
  </li>
</ul>

                                    <a href='#' className='border-2 border-[#48bb78] mt-6 text-primary bg-[#48bb78] rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-primary hover:text-[#48bb78] '>Sign In</a>
                                   </div>
                                        
                            </div>
                        </div>

                    {/* sign up section */}
                    <div className='w-full md:w-[40%]  bg-newback text-primary rounded  md:rounded-tr-2xl md:rounded-br-2xl '>
                    <img src="./images/docks.jpg"    className="h-[100%] w-full object-cover rounded" alt="Image Description"/>
           
                </div>
            </div>

        </main>



   
  )
}

export default page