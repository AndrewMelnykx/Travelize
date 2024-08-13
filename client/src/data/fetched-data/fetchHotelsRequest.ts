import axios from "axios";

const fetchHotels = async (cityName: string, adultsValue: string) => {
  try {
    const response = await axios.get(`http://localhost:3001/hotels`, {
      params: {
        destination: cityName.toString(),
        adults: adultsValue.toString(),
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
  }
};

export default fetchHotels;
