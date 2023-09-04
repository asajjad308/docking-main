'use client'
import { useState } from 'react';
import propertyData from '../data/page';


function Leases() {
  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [rentPerMonth, setRentPerMonth] = useState(0);
  const [spaceNumber, setSpaceNumber] = useState('');
  const [status, setStatus] = useState<boolean>(true);
  const [contractDate, setContractDate] = useState<string>('2023-08-16T14:19:03.138Z');
  const [available, setAvailable] = useState<boolean>(true);
  const [addedDate, setAddedDate] = useState<string>('2023-08-16T14:19:03.138Z');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://localhost:7064/api/Products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: 0,
          address,
          location,
          rentPerMonth,
          spaceNumber,
          status,
          contractDate,
          available,
          addedDate
        })
      });

      if (response.ok) {
        console.log('Product added successfully');
        // You can handle success or navigation here
      } else {
        console.error('Failed to add product');
        // You can handle failure here
      }
    } catch (error) {
      console.error('Error while adding product:', error);
    }
  };
  return (
    <div className=" flex w-full mx-auto justify-center flex-col">
      <div className="relative h-[400px] flex bg-cover bg-center text-primary opacity-90" style={{ backgroundImage: "url('/images/docks.jpg')" }}>
        <div className="absolute inset-0 bg-optional opacity-60"></div> {/* Semi-dark overlay */}
        <div className="relative  z-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Docks Leasing Page</h1>
          <p className="text-lg md:w-[50%] text-center">
            Providing Docking Leasing and Rental Services in Umeå. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center md:px-10 mt-[5%]">
        <div>
          <h1 className='text-2xl font-bold'> Docking Available Leases in Umeå</h1>
          <p className='w-1/2 text-lg '>Explore available rental docking spaces for your convenience. write abaout some rules and regulation or procedure</p>
        </div>
        <div className='w-1/2 flex justify-end items-end'>
          <button className="bg-[#1a1a64] text-white active:bg-[#1a1a1a] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            onClick={() => setShowModal(true)} >
            Add New Leasing
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add New Leasing
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>
                    <h2>Add Product</h2>
                  </div>
                </div>
                <form className="w-full max-w-lg px-4" onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Location
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={location} onChange={e => setLocation(e.target.value)} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Rent per month
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-rent" type="number" value={rentPerMonth} onChange={e => setRentPerMonth(Number(e.target.value))} placeholder="Rent per month" />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={spaceNumber} onChange={e => setSpaceNumber(e.target.value)} placeholder="Space Number" />
                    </div>
                    {/* <div className="w-full md:w-1/2 px-3">
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Address" />
                    </div> */}
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <label className="md:w-3/3 block text-gray-500 font-bold">
                      <input checked={status} onChange={e => setStatus(e.target.checked)} className="mr-2 leading-tight" type="checkbox" />
                      <span className="text-sm">
                        Available
                      </span>
                    </label>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)} >
                      Close
                    </button>
                    <button type='submit' className='bg-[#1a1a64] text-white active:bg-[#1a1a1a] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>Add Product</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null
      }
      <div className='flex flex-col justify-center mb-[8%] mt-[2%] px-10'>
        <table>
          <thead className="">
            <tr className="bg-[#ebe5e5]">
              <th className=" font-bold p-4">ID</th>
              <th className=" font-bold">Address</th>
              <th className=" font-bold">Location</th>
              <th className=" font-bold">Rent/Month</th>
              <th className="font-bold">Space Number</th>
              <th className="font-bold">Contract Date</th>
              <th className="font-bold">Available</th>
            </tr>
          </thead>
          <tbody>
            {propertyData.map((property) => (
              <tr
                key={property.id}
                className="bg-white border-t border-[#c0c0c0]"
              >
                <td className="px-4 py-2">{property.id}</td>
                <td className="px-4 py-2">
                  <a
                    href={`/property/${property.id}`}
                    className="text-[#5d5df4] hover:underline"
                  >
                    {property.address}
                  </a>
                </td>
                <td className="px-4 py-2">{property.location}</td>
                <td className="px-4 py-2">{property.rentPerMonth}</td>
                <td className="px-4 py-2">{property.spaceNumber}</td>
                <td className="px-4 py-2">{property.contractDate}</td>
                <td className="px-4 py-2">{property.available ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div >)
};
export default Leases 
