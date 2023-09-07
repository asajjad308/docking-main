'use client'
import { FormEvent, useState, useEffect } from 'react';
import propertyData from '../data/page';
import DataModal from '../components/DataModal';
import $ from 'jquery';
import 'datatables.net';
import jwt from 'jwt-decode'
import Cookies from 'universal-cookie';

function Rentals() {
  useEffect(() => {
    const dataTable = $('#myTable').DataTable();

    return () => {
      dataTable.destroy();
    }
  }, []);
  const session: User = jwt(new Cookies().get('jwt_authorization'))
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ message: '', ok: false });
  const initialPropertyState = {
    address: '',
    location: '',
    rentPerMonth: 1,
    spaceNumber: '',
    status: true,
    contractDate: '2023-08-16T14:19:03.138Z',
    available: true,
    addedDate: '2023-08-16T14:19:03.138Z'
  };
  const [property, setProperty] = useState(initialPropertyState);

  const { address, location, rentPerMonth, spaceNumber, status, contractDate, available, addedDate } = property;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse({ message: "", ok: false });
    try {
      const response = await fetch('https://localhost:7064/api/Products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: 0, address, location, rentPerMonth, spaceNumber, status, contractDate, available, addedDate })
      });

      if (response.ok) {
        setLoading(false);
        setResponse({ message: "Your product has been added successfully.", ok: true });
      } else {
        setLoading(false);
        console.error('Failed to add product');
        setResponse({ message: "There was an error in adding your product", ok: false });
      }
    } catch (error) {
      setLoading(false);
      console.error('Error while adding product:', error);
      setResponse({ message: "There was an error in adding your product", ok: false });
    }
    setProperty(initialPropertyState);
    setTimeout(() => {
      setResponse({message: '', ok: false})
    }, 2000)
  };


  return (
    <>
      <div className=" flex w-full mx-auto justify-center flex-col">
        <div className="relative h-[400px] flex bg-cover bg-center text-primary opacity-90" style={{ backgroundImage: "url('/images/docks.jpg')" }}>
          <div className="absolute inset-0 bg-optional opacity-60"></div> {/* Semi-dark overlay */}
          <div className="relative  z-10 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">Docks Rentals Page</h1>
            <p className="text-lg md:w-[50%] text-center">
              Providing Docking Leasing and Rental Services in Umeå. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center px-2 md:px-10 mt-[5%]">
          <div className='md:w-1/2 mb-4 md:mb-0'>
            <h1 className='text-2xl font-bold'> Docking Available Leases in Umeå</h1>
            <p className='md:w-1/2 text-lg '>Explore available rental docking spaces for your convenience. write abaout some rules and regulation or procedure</p>
          </div>
          <div className='md:w-1/2 flex justify-end items-end'>
            {(session?.email == 'zia@gmail.com') && (
            <button className="bg-[#1a1a64] active:bg-[#1a1a1a] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
            style={{color: "white"}} 
            type="button" onClick={() => setShowModal(true)} >Add New Rental</button>
              )}
          </div>
        </div>
        {showModal ? (
          <DataModal setProperty={setProperty} setShowModal={setShowModal} property={property} handleSubmit={handleSubmit} loading={loading} response={response} />
        ) : null
        }
        <div className='flex flex-col justify-center mb-[8%] mt-[2%] px-2 md:px-10 overflow-x-auto' style={{ maxWidth: '100vw' }}>
          <table id='myTable'>
            <thead>
              <tr className="bg-[#ebe5e5]">
                <th className="font-bold p-4">ID</th>
                <th className="font-bold">Address</th>
                <th className="font-bold">Location</th>
                <th className="font-bold">Rent/Month</th>
                <th className="font-bold">Space Number</th>
                <th className="font-bold">Contract Date</th>
                <th className="font-bold">Available</th>
              </tr>
            </thead>
            <tbody>
              {propertyData.map(({ address, location, rentPerMonth, spaceNumber, contractDate, available, id }) => (
                <tr key={id} className="bg-white border-t border-[#c0c0c0]">
                  <td className="px-4 py-2">{id}</td>
                  <td className="px-4 py-2">
                    <a href={`/property/${id}`} className="text-[#5d5df4] hover:underline" >
                      {address}
                    </a>
                  </td>
                  <td className="px-4 py-2">{location}</td>
                  <td className="px-4 py-2">{rentPerMonth}</td>
                  <td className="px-4 py-2">{spaceNumber}</td>
                  <td className="px-4 py-2">{contractDate}</td>
                  <td className="px-4 py-2">{available ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>)
};
export default Rentals;