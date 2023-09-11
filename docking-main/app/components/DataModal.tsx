import { Dispatch, FormEvent, SetStateAction } from "react";

interface ModalProps {
    property: property
    setShowModal: (showModal: boolean) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    setProperty: Dispatch<SetStateAction<property>>
    loading: boolean
    response: {
        message: string,
        ok: boolean
    }
};

export default function DataModal(props: ModalProps) {
    const { property: { address, location, rentPerMonth, status, spaceNumber, addedDate, available }, handleSubmit, setProperty, setShowModal, loading, response } = props;
    const buttonContent = loading ? 'Adding...' : 'Add Product';
    const buttonClass = loading ? 'bg-gray-900' : 'bg-[#1a1a64]';
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" style={{opacity: 0.75}}></div>
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none" style={{ background: 'white' }}>
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Add New Leasing
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)} >
                                <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    x
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        {(response.message.length && !response.ok) ? <p className="relative p-6 flex-auto">{response.message}</p> : (
                            <>
                                <div className="relative p-6 flex-auto">
                                    {(response.message.length > 1 && response.ok) && (
                                        <div className="bg-green-500 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md w-full" role="alert">
                                            <p className="font-bold">Success!</p>
                                            <p className="text-sm">Your product has been added sucessfully.</p>
                                        </div>
                                    )}
                                    <h2>Add Product</h2>
                                </div>
                                <form className="w-full max-w-lg px-4" onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                Name
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-first-name"
                                                type="text"
                                                placeholder="Name"
                                                required
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">
                                                Address
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-address"
                                                type="text"
                                                value={address}
                                                onChange={e => setProperty({ ...props.property, address: e.target.value })}
                                                placeholder="Address"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-location">
                                                Location
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-location"
                                                type="text"
                                                value={location}
                                                required
                                                placeholder="123 Main Street"
                                                onChange={e => setProperty({ ...props.property, location: e.target.value })}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-rent">
                                                Rent per month
                                            </label>
                                            <input
                                                required
                                                defaultValue="1"
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-rent"
                                                type="number"
                                                value={rentPerMonth}
                                                min={1}
                                                onChange={e => setProperty({ ...props.property, rentPerMonth: Number(e.target.value) })}
                                                placeholder="Rent per month"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-4">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-space-number">
                                                Space Number
                                            </label>
                                            <input
                                                required
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-space-number"
                                                type="text"
                                                value={spaceNumber}
                                                onChange={e => setProperty({ ...props.property, spaceNumber: e.target.value })}
                                                placeholder="Space Number"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center mb-6">
                                        <label className="md:w-1/3 block text-gray-500 font-bold">
                                            <input
                                                checked={status}
                                                onChange={e => setProperty({ ...props.property, status: e.target.checked })}
                                                className="mr-2 leading-tight"
                                                type="checkbox"
                                            />
                                            <span className="text-sm">
                                                Available
                                            </span>
                                        </label>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}> Close </button>

                                        <button type='submit' className={`${buttonClass} active:bg-[#1a1a1a] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`} style={{ color: "rgb(148, 163, 184)" }} disabled={loading}>{buttonContent}</button>
                                    </div>
                                </form>
                            </>)}
                    </div>
                </div>
            </div >
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
