import { FaMap, FaPrint } from "react-icons/fa";
import propertyData from "../../data/page";

type Props = {
    params: {
        id: number
    }
};
function Property({ params: { id } }: Props) {
    const property = propertyData.filter(prop => prop.id == id);

    return (
        <section className="body-font" style={{ color: "rgb(75 85 99)" }}>
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Nydalavägen</h1>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-2/3 w-full">
                        <div className="h-full bg-gray-100 p-8 rounded">
                            <h3 className="leading-relaxed mb-6 border-b border-b-gray-400 pb-3">Apply for this project</h3>
                            <p className="mb-4">To register interest for this object certain criteria needs to be fulfilled.</p>
                            <div className="flex justify-between mb-5">
                                <cite>- Måste bo i området</cite>
                                <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Apply</button>
                            </div>
                            <p>Residents has the possibility to rent a car park per household in the neighbourhood. Sign up for out parking queue by contacting customer center. Our parkings are primarily for our residents which means they are not rentable for you without an apartment contract. If there is a surplus of parkings in one area, there might be a chance to rent a parking even though you are not resident, enquiries are handled by our customer center. According to Swedish tax regulations, we as a company are obliged to add tax (25 percent) to the rent of parking unless the parking contract is connected to an apartment or premises contract. Tax is added under the following circumstances: If you rent a car park through our parking company AB Bostaden parkering i Umeå. If you do not have an apartment or premises contract with us. If the parking spot isn't close by your apartment or premise. If the contracted apartment or premise and the parking is owned by different companies (AB Bostaden i Umeå, Prominensen AB and AB Lokalen i Umeå).</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full flex justify-center">
                        <div className="p-8 rounded flex items-start space-x-4">
                            <div className="flex flex-col space-y-4 justify-center">
                                <button className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    <FaMap className="h-8 w-8" />
                                </button>
                                <p className="text-center">MAP</p>
                            </div>
                            <div className="flex flex-col space-y-4 justify-center">
                                <button className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    <FaPrint className="h-8 w-8" />
                                </button>
                                <p className="text-center">FACTS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="md:w-2/3 w-full">
                        <div className="h-full p-8 rounded">
                            <h3 className="font-bold text-2xl mb-6 border-b border-b-gray-400 pb-3">Information</h3>
                            <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                                <div className="p-2 w-full">
                                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">1320W eluttag för motorvärmare, timer- och temperaturstyrning.</span>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">Endast för boende i samma område.</span>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">Parkeringsplats utan tak.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="my-4 bg-gray-100 p-4 rounded flex items-center mx-auto pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                    <img src="https://www.bostaden.umea.se/Global/DisplayMultimedia.ashx?guid=30695410-7757-4bc6-9326-25e521e65e4b" alt="" />
                                </div>
                                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Berghem</h2>
                                    <p className="leading-relaxed text-base">På Berghem hittar du vår boendeform Seniorboende plus på Axtorpsvägen 3. Där bor du i ett bra läge med fin utsikt samtidigt som det finns möjlighet till social samvaro med dina grannar.</p>
                                    <a className="cursor-pointer hover:underline mt-3 text-indigo-500 inline-flex items-center">Read more about the area
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full flex justify-center">
                        <div className="flex flex-col items-start">
                            <div className="bg-red-500 text-white rounded p-4 my-4">
                                <ul>
                                    <li>Access: <span className="font-bold">Now</span></li>
                                    <li className="mb-3">Available from: <span className="font-bold">Now</span></li>
                                    <li>The object will be available for applications
                                    until a certain number of applicants have been reached.</li>
                                </ul>
                            </div>
                            <div className="bg-gray-100 rounded p-4 w-full">
                                <p className="font-bold border-b pb-3 text-2xl mb-2">Facts:</p>
                                <ul className="flex flex-col space-y-3">
                                    <li>Area: <span className="font-bold"><a className="font-bold hover:underline cursor-pointer">Berghem</a></span></li>
                                    <li>Address: <span className="font-bold">Nydalavägen</span></li>
                                    <li>Object No.: <span className="font-bold"><a className="font-bold hover:underline cursor-pointer">2701501000023</a></span></li>
                                    <li>Plats nr: <span className="font-bold">501 23</span></li>
                                    <li>Type: <span className="font-bold">Motorvärmarplats</span></li>
                                    <li>Rent: <span className="font-bold">550 SEK</span></li>
                                    <li>Fastighet: <span className="font-bold">Målet 1</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Property