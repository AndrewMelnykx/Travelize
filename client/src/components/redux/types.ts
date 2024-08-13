interface AuthorizationHandlingTypes {
  isSignUpVisible: boolean;
  isLoginVisible: boolean;
}
interface DataHandlingTypes {
  departureInputData: City[];
  arrivalInputData: City[];
  hotelsData: HotelDataItem[];
  ticketsData: TicketsDataItem[];
}
interface FilterHandlingType {
  adultsOptionsSelect: AdultsSelectArray[];
  departureCityInitial: string;
  arrivalCityInitial: string;
}

interface City {
  city: string;
  country: string;
  countryCode: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  region: string;
  regionCode: string;
  regionWdId: string;
  type: string;
  wikiDataId: string;
}
interface AdultsSelectArray {
  id: string;
  value: string;
  label: string;
}

interface Hotel {
  chainCode: string;
  cityCode: string;
  dupeId: string;
  hotelId: string;
  latitude: number;
  longitude: number;
  name: string;
  type: string;
}

interface Price {
  base: string;
  currency: string;
  taxes: Tax[];
  total: string;
}

interface Tax {
  code: string;
  amount: string;
  currency: string;
  included: boolean;
}

interface CancellationPolicy {
  description: {
    text: string;
  };
  type: string;
}

interface Room {
  description: {
    lang: string;
    text: string;
  };
  type: string;
  typeEstimated: {
    bedType: string;
    beds: number;
    category: string;
  };
}

interface Offer {
  checkInDate: string;
  checkOutDate: string;
  commission: {
    percentage: string;
  };
  guests: {
    adults: number;
  };
  id: string;
  policies: {
    cancellations: CancellationPolicy[];
  };
  paymentType: string;
  price: Price;
  rateCode: string;
  rateFamilyEstimated: {
    code: string;
    type: string;
  };
  room: Room;
  self: string;
  variations: {
    average: {
      base: string;
    };
    changes: Array<{
      endDate: string;
      startDate: string;
      total: string;
    }>;
  };
}

interface HotelDataItem {
  available: boolean;
  hotel: Hotel;
  offers: Offer[];
}
interface TicketsDataItem {
  id: string;
  instantTicketingRequired: boolean;
  isUpsellOffer: boolean;
  itineraries: Itinerary[];
}

interface Itinerary {
  duration: string;
  segments: Segment[];
}

interface Segment {
  aircraft: Aircraft;
  arrival: Arrival;
  blacklistedInEU: boolean;
  carrierCode: string;
  departure: Departure;
  duration: string;
  id: string;
  number: string;
  numberOfStops: number;
  operating: OperatingCarrier;
}

interface Aircraft {
  code: string;
}

interface Arrival {
  at: string;
  iataCode: string;
  terminal: string;
}

interface Departure {
  at: string;
  iataCode: string;
  terminal: string;
}

interface OperatingCarrier {
  carrierCode: string;
}
export type {
  AuthorizationHandlingTypes,
  DataHandlingTypes,
  City,
  FilterHandlingType,
  HotelDataItem,
  TicketsDataItem,
};
