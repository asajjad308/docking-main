'use client'
import React,{useState} from 'react';
import propertyData from '../data/page';


function Leases () {
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
  return <>
    <div className=" flex w-full mx-auto justify-center flex-col ">

<div className="relative h-[400px] flex bg-cover bg-center text-primary opacity-90" style={{ backgroundImage: "url('/images/docks.jpg')" }}>
  <div className="absolute inset-0 bg-optional opacity-60"></div> {/* Semi-dark overlay */}
  <div className="relative  z-10 flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-4">Docks Leasing Page</h1>
    <p className="text-lg w-[50%] text-center">
      Providing Docking Leasing and Rental Services in Umeå. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
  </div>
</div>

    <div className='mt-[5%] mb-[2%] '><h1 className='flex justify-left ml-[15%] text-2xl font-bold'> Dockning Avilable Leases in Umeå</h1>
    <p className='flex justify-left ml-[15%] w-[40%] text-lg '>Explore available rental docking spaces for your convenience. write abaout some rules and regulation or procedure</p>
    </div>


    <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
       Add New Leasing
      </button>
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
                    Modal Title
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
            <form onSubmit={handleSubmit}>
                <label>
                    Address:
                    <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
                </label>
                <br />
                <label>
                    Location:
                    <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
                </label>
                <br />
                <label>
                    Rent Per Month:
                    <input type="number" value={rentPerMonth} onChange={e => setRentPerMonth(Number(e.target.value))} />
                </label>
                <br />
                <label>
                    Space Number:
                    <input type="text" value={spaceNumber} onChange={e => setSpaceNumber(e.target.value)} />
                </label>
                <br />
                <label>
                    Status:
                    <input type="checkbox" checked={status} onChange={e => setStatus(e.target.checked)} />
                </label>
                <br />
                <label>
                    Contract Date:
                    <input type="text" value={contractDate} onChange={e => setContractDate(e.target.value)} />
                </label>
                <br />
                <label>
                    Available:
                    <input type="checkbox" checked={available} onChange={e => setAvailable(e.target.checked)} />
                </label>
                <br />
                <label>
                    Added Date:
                    <input type="text" value={addedDate} onChange={e => setAddedDate(e.target.value)} />
                </label>
                <br />
                <button type="submit">Add Product</button>
            </form>
        </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
               
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    <div className='flex justify-center mb-[8%] mt-[2%]'>
  
      <table className="w-[70%]   ">
        <thead className="">
          <tr className="bg-[#ebe5e5]   ">
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
    </div>
    </>
};
export default Leases 