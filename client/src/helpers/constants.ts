import { HotelDataItem, TicketsDataItem } from "@store/types";

const symbolT = "T";
const wordTimeInsteadT = " Time ";
const DEBOUNCE_HERO_DELAY_MS = 650;
const userToken = "userToken";

const messages = {
  NOT_AUTHORIZED: "You need a token for this page. Please login or sign up!",
  LOGIN_SUCCESS: "You have successfully logged in!",
};

const simpleRequestMessages = {
  BAD_REQUEST: "Failed to fetch please try again later.",
  SUCCESS_REQUEST: "Loaded successfully!",
};

const darkPurpleColor = "#301934";
const lightBlueColor = "#40E0D0";

export const mockTicketsData: TicketsDataItem[] = [
  {
    id: "TICKET_001",
    instantTicketingRequired: true,
    isUpsellOffer: false,
    itineraries: [
      {
        duration: "PT2H30M",
        segments: [
          {
            id: "SEG_001",
            number: "101",
            carrierCode: "AA",
            duration: "PT2H30M",
            numberOfStops: 0,
            blacklistedInEU: false,
            aircraft: { code: "738" },
            departure: {
              iataCode: "JFK",
              terminal: "4",
              at: "2026-03-01T08:00:00",
            },
            arrival: {
              iataCode: "ORD",
              terminal: "2",
              at: "2026-03-01T10:30:00",
            },
            operating: { carrierCode: "AA" },
          },
        ],
      },
    ],
  },
];
const mockHotels: HotelDataItem[] = [
  {
    available: true,
    hotel: {
      chainCode: "HC01",
      cityCode: "NYC",
      dupeId: "D001",
      hotelId: "H001",
      latitude: 40.7128,
      longitude: -74.006,
      name: "Grand Central Hotel",
      type: "HOTEL",
    },
    offers: [
      {
        checkInDate: "2026-01-10",
        checkOutDate: "2026-01-12",
        commission: { percentage: "10" },
        guests: { adults: 2 },
        id: "O001",
        policies: {
          cancellations: [
            {
              description: { text: "Free cancellation up to 24 hours before check-in" },
              type: "FREE_CANCELLATION",
            },
          ],
        },
        paymentType: "Prepaid",
        price: {
          base: "200.00",
          currency: "USD",
          taxes: [{ code: "TAX1", amount: "20.00", currency: "USD", included: true }],
          total: "220.00",
        },
        rateCode: "RC01",
        rateFamilyEstimated: { code: "EST01", type: "STANDARD" },
        room: {
          description: { lang: "en", text: "Standard double room with city view" },
          type: "DOUBLE",
          typeEstimated: { bedType: "DOUBLE", beds: 1, category: "STANDARD" },
        },
        self: "/offers/O001",
        variations: {
          average: { base: "200.00" },
          changes: [
            { startDate: "2026-01-10", endDate: "2026-01-11", total: "100.00" },
            { startDate: "2026-01-11", endDate: "2026-01-12", total: "120.00" },
          ],
        },
      },
    ],
  },
  {
    available: true,
    hotel: {
      chainCode: "HC02",
      cityCode: "NYC",
      dupeId: "D002",
      hotelId: "H002",
      latitude: 40.73061,
      longitude: -73.935242,
      name: "Riverside Inn",
      type: "HOTEL",
    },
    offers: [
      {
        checkInDate: "2026-01-10",
        checkOutDate: "2026-01-12",
        commission: { percentage: "12" },
        guests: { adults: 2 },
        id: "O002",
        policies: {
          cancellations: [
            {
              description: { text: "Non-refundable" },
              type: "NON_REFUNDABLE",
            },
          ],
        },
        paymentType: "Pay at hotel",
        price: {
          base: "150.00",
          currency: "USD",
          taxes: [{ code: "TAX1", amount: "15.00", currency: "USD", included: true }],
          total: "165.00",
        },
        rateCode: "RC02",
        rateFamilyEstimated: { code: "EST02", type: "STANDARD" },
        room: {
          description: { lang: "en", text: "Cozy room with river view" },
          type: "TWIN",
          typeEstimated: { bedType: "TWIN", beds: 2, category: "STANDARD" },
        },
        self: "/offers/O002",
        variations: {
          average: { base: "150.00" },
          changes: [
            { startDate: "2026-01-10", endDate: "2026-01-11", total: "80.00" },
            { startDate: "2026-01-11", endDate: "2026-01-12", total: "85.00" },
          ],
        },
      },
    ],
  },
  {
    available: true,
    hotel: {
      chainCode: "HC03",
      cityCode: "NYC",
      dupeId: "D003",
      hotelId: "H003",
      latitude: 40.748817,
      longitude: -73.985428,
      name: "Empire Suites",
      type: "HOTEL",
    },
    offers: [
      {
        checkInDate: "2026-01-10",
        checkOutDate: "2026-01-12",
        commission: { percentage: "15" },
        guests: { adults: 2 },
        id: "O003",
        policies: {
          cancellations: [
            {
              description: { text: "Free cancellation within 48 hours" },
              type: "FREE_CANCELLATION",
            },
          ],
        },
        paymentType: "Prepaid",
        price: {
          base: "300.00",
          currency: "USD",
          taxes: [{ code: "TAX1", amount: "30.00", currency: "USD", included: true }],
          total: "330.00",
        },
        rateCode: "RC03",
        rateFamilyEstimated: { code: "EST03", type: "STANDARD" },
        room: {
          description: { lang: "en", text: "Luxury suite with city skyline view" },
          type: "SUITE",
          typeEstimated: { bedType: "KING", beds: 1, category: "DELUXE" },
        },
        self: "/offers/O003",
        variations: {
          average: { base: "300.00" },
          changes: [
            { startDate: "2026-01-10", endDate: "2026-01-11", total: "150.00" },
            { startDate: "2026-01-11", endDate: "2026-01-12", total: "180.00" },
          ],
        },
      },
    ],
  },
  // 6 more hotels for 9 total
  {
    available: true,
    hotel: {
      chainCode: "HC04",
      cityCode: "NYC",
      dupeId: "D004",
      hotelId: "H004",
      latitude: 40.761581,
      longitude: -73.977708,
      name: "Central Park Hotel",
      type: "HOTEL",
    },
    offers: [
      {
        checkInDate: "2026-01-10",
        checkOutDate: "2026-01-12",
        commission: { percentage: "8" },
        guests: { adults: 2 },
        id: "O004",
        policies: {
          cancellations: [
            {
              description: { text: "Free cancellation up to 24 hours before check-in" },
              type: "FREE_CANCELLATION",
            },
          ],
        },
        paymentType: "Pay at hotel",
        price: {
          base: "180.00",
          currency: "USD",
          taxes: [{ code: "TAX1", amount: "18.00", currency: "USD", included: true }],
          total: "198.00",
        },
        rateCode: "RC04",
        rateFamilyEstimated: { code: "EST04", type: "STANDARD" },
        room: {
          description: { lang: "en", text: "Standard room with park view" },
          type: "DOUBLE",
          typeEstimated: { bedType: "DOUBLE", beds: 1, category: "STANDARD" },
        },
        self: "/offers/O004",
        variations: {
          average: { base: "180.00" },
          changes: [
            { startDate: "2026-01-10", endDate: "2026-01-11", total: "90.00" },
            { startDate: "2026-01-11", endDate: "2026-01-12", total: "108.00" },
          ],
        },
      },
    ],
  },
  {
    available: true,
    hotel: {
      chainCode: "HC05",
      cityCode: "NYC",
      dupeId: "D005",
      hotelId: "H005",
      latitude: 40.706192,
      longitude: -74.00916,
      name: "Brooklyn Bridge Hotel",
      type: "HOTEL",
    },
    offers: [
      {
        checkInDate: "2026-01-10",
        checkOutDate: "2026-01-12",
        commission: { percentage: "10" },
        guests: { adults: 2 },
        id: "O005",
        policies: {
          cancellations: [
            {
              description: { text: "Non-refundable" },
              type: "NON_REFUNDABLE",
            },
          ],
        },
        paymentType: "Prepaid",
        price: {
          base: "220.00",
          currency: "USD",
          taxes: [{ code: "TAX1", amount: "22.00", currency: "USD", included: true }],
          total: "242.00",
        },
        rateCode: "RC05",
        rateFamilyEstimated: { code: "EST05", type: "STANDARD" },
        room: {
          description: { lang: "en", text: "Deluxe double room with city view" },
          type: "DOUBLE",
          typeEstimated: { bedType: "KING", beds: 1, category: "DELUXE" },
        },
        self: "/offers/O005",
        variations: {
          average: { base: "220.00" },
          changes: [
            { startDate: "2026-01-10", endDate: "2026-01-11", total: "110.00" },
            { startDate: "2026-01-11", endDate: "2026-01-12", total: "132.00" },
          ],
        },
      },
    ],
  },
  {
    available: true,
    hotel: {
      chainCode: "HC06",
      cityCode: "NYC",
      dupeId: "D006",
      hotelId: "H006",
      latitude: 40.748441,
      longitude: -73.985664,
      name: "Times Square Suites",
      type: "HOTEL",
    },
    offers: [
      {
        checkInDate: "2026-01-10",
        checkOutDate: "2026-01-12",
        commission: { percentage: "12" },
        guests: { adults: 2 },
        id: "O006",
        policies: {
          cancellations: [
            {
              description: { text: "Free cancellation within 24 hours" },
              type: "FREE_CANCELLATION",
            },
          ],
        },
        paymentType: "Pay at hotel",
        price: {
          base: "260.00",
          currency: "USD",
          taxes: [{ code: "TAX1", amount: "26.00", currency: "USD", included: true }],
          total: "286.00",
        },
        rateCode: "RC06",
        rateFamilyEstimated: { code: "EST06", type: "STANDARD" },
        room: {
          description: { lang: "en", text: "Suite with city skyline view" },
          type: "SUITE",
          typeEstimated: { bedType: "KING", beds: 1, category: "DELUXE" },
        },
        self: "/offers/O006",
        variations: {
          average: { base: "260.00" },
          changes: [
            { startDate: "2026-01-10", endDate: "2026-01-11", total: "130.00" },
            { startDate: "2026-01-11", endDate: "2026-01-12", total: "156.00" },
          ],
        },
      },
    ],
  },
];

export {
  symbolT,
  wordTimeInsteadT,
  DEBOUNCE_HERO_DELAY_MS,
  userToken,
  messages,
  simpleRequestMessages,
  darkPurpleColor,
  lightBlueColor,
  mockHotels,
};
