import axios from "axios";
const fetchTickets = async (originLocation, destinationLocation, departureDate, returnDate, adults) => {
    try {
        const response = await axios.get(`http://localhost:3001/tickets`, {
            params: {
                originLocationCode: originLocation,
                destinationLocationCode: destinationLocation,
                departureDate: departureDate,
                returnDate: returnDate,
                adults: adults,
            },
            withCredentials: true,
        });
        return response.data;
    }
    catch (error) {
        console.error("Error fetching tickets:", error);
    }
};
export default fetchTickets;
