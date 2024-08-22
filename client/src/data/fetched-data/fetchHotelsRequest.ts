import axios from "axios";

const fetchHotels = async (cityName: string, adultsValue: string) => {
  try {
    const response = await axios.get(`https://travelize-backend.onrender.com/hotels`, {
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
