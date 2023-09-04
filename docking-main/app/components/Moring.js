import React from 'react';

function Morning() {
  return (
    <div className="flex justify-center flex-col-reverse md:flex-row  bg-[#faf7f2]  gap-20 md:px-40 pt-20 pb-20 p-5  ">
      <div className=" flex flex-col justify-ceter w-full md:w-[50%]  ">
        <div className="  md:mt-16 ">
          <h2 className="text-2xl md:text-4xl font-bold    mt-[-10%] md:mt-0 leading-normal md:leading-10">
            Providing Large Docks <br></br> Rental For A Perfect
          </h2>
        </div>
        <div>
          <p className="text-lg font-medium mt-2 text-justify md:mt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <ul className="text-lg font-medium mt-10">
            <b>Rates</b>
            <li>Seasonal Rate (Apr 15-Oct 15): $810</li>
            <li>Monthly Rate: $265</li>
            <li>Weekly Rate: $100</li>
            <li>Daily Rate: $30</li>
            <br></br>
            <b>Details</b>
            <li>$20 discount if paid in full by March 31</li>
            <li>Payment is per slip, not by boat length</li>
          </ul>

          <button class="mt-10  px-6 py-3 text-lg font-medium text-primary bg-secondary rounded-lg shadow-md hover:bg-third transition duration-300">
            Vacant Docks
          </button>
        </div>
      </div>

      <div className="allimages main flex flex-col w-full md:w-[50%] ">
        <div className="twoimages flex flex-row justify-center w-full items-center gap-4">
          <div className="h-full w-full">
            <img src="./images/docking.webp"
              alt="Image Description"
              className="h-full object-cover rounded">
              
              </img>
          </div>
          <div className="w-1/2 ml-15   ">
            <img
              src="./images/about.jpeg"
              alt="Image Description"
              className="h-[50%] object-cover rounded"
            />
          </div>
        </div>

        <div className="w-full ml-15 mt-5 ">
          <img
            src="./images/docks.jpg"
            alt="Image Description"
            className=" h-full w-full object-cover rounded"
          />
        </div>
      </div>


      
    </div>
  );
}

export default Morning;
