

export default async function getParkingData() {
    const res = await fetch('https://thecodepulsebookingapi.azurewebsites.net/api/BoatBooking/GetAllParkings')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

