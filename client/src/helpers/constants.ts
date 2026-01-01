import { TicketsDataItem } from "@store/types";

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
  {
    id: "TICKET_002",
    instantTicketingRequired: false,
    isUpsellOffer: true,
    itineraries: [
      {
        duration: "PT5H15M",
        segments: [
          {
            id: "SEG_002",
            number: "455",
            carrierCode: "UA",
            duration: "PT5H15M",
            numberOfStops: 0,
            blacklistedInEU: false,
            aircraft: { code: "320" },
            departure: {
              iataCode: "LAX",
              terminal: "7",
              at: "2026-03-02T09:00:00",
            },
            arrival: {
              iataCode: "DEN",
              terminal: "B",
              at: "2026-03-02T12:15:00",
            },
            operating: { carrierCode: "UA" },
          },
        ],
      },
    ],
  },
  {
    id: "TICKET_003",
    instantTicketingRequired: true,
    isUpsellOffer: false,
    itineraries: [
      {
        duration: "PT7H45M",
        segments: [
          {
            id: "SEG_003",
            number: "890",
            carrierCode: "DL",
            duration: "PT7H45M",
            numberOfStops: 0,
            blacklistedInEU: false,
            aircraft: { code: "763" },
            departure: {
              iataCode: "SFO",
              terminal: "2",
              at: "2026-03-03T07:30:00",
            },
            arrival: {
              iataCode: "JFK",
              terminal: "4",
              at: "2026-03-03T15:15:00",
            },
            operating: { carrierCode: "DL" },
          },
        ],
      },
    ],
  },
  {
    id: "TICKET_004",
    instantTicketingRequired: false,
    isUpsellOffer: false,
    itineraries: [
      {
        duration: "PT1H20M",
        segments: [
          {
            id: "SEG_004",
            number: "210",
            carrierCode: "B6",
            duration: "PT1H20M",
            numberOfStops: 0,
            blacklistedInEU: false,
            aircraft: { code: "E90" },
            departure: {
              iataCode: "BOS",
              terminal: "C",
              at: "2026-03-04T14:00:00",
            },
            arrival: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-03-04T15:20:00",
            },
            operating: { carrierCode: "B6" },
          },
        ],
      },
    ],
  },
  {
    id: "TICKET_005",
    instantTicketingRequired: true,
    isUpsellOffer: true,
    itineraries: [
      {
        duration: "PT9H10M",
        segments: [
          {
            id: "SEG_005",
            number: "778",
            carrierCode: "AA",
            duration: "PT9H10M",
            numberOfStops: 1,
            blacklistedInEU: false,
            aircraft: { code: "789" },
            departure: {
              iataCode: "SEA",
              terminal: "N",
              at: "2026-03-05T06:45:00",
            },
            arrival: {
              iataCode: "MIA",
              terminal: "D",
              at: "2026-03-05T15:55:00",
            },
            operating: { carrierCode: "AA" },
          },
        ],
      },
    ],
  },
  {
    id: "TICKET_006",
    instantTicketingRequired: false,
    isUpsellOffer: false,
    itineraries: [
      {
        duration: "PT3H50M",
        segments: [
          {
            id: "SEG_006",
            number: "332",
            carrierCode: "AA",
            duration: "PT3H50M",
            numberOfStops: 0,
            blacklistedInEU: false,
            aircraft: { code: "321" },
            departure: {
              iataCode: "DFW",
              terminal: "C",
              at: "2026-03-06T11:10:00",
            },
            arrival: {
              iataCode: "LGA",
              terminal: "B",
              at: "2026-03-06T15:00:00",
            },
            operating: { carrierCode: "AA" },
          },
        ],
      },
    ],
  },
  {
    id: "TICKET_007",
    instantTicketingRequired: true,
    isUpsellOffer: false,
    itineraries: [
      {
        duration: "PT4H30M",
        segments: [
          {
            id: "SEG_007",
            number: "640",
            carrierCode: "DL",
            duration: "PT4H30M",
            numberOfStops: 0,
            blacklistedInEU: false,
            aircraft: { code: "739" },
            departure: {
              iataCode: "ATL",
              terminal: "S",
              at: "2026-03-07T13:00:00",
            },
            arrival: {
              iataCode: "PHX",
              terminal: "3",
              at: "2026-03-07T17:30:00",
            },
            operating: { carrierCode: "DL" },
          },
        ],
      },
    ],
  },
  {
    id: "TICKET_008",
    instantTicketingRequired: false,
    isUpsellOffer: true,
    itineraries: [
      {
        duration: "PT6H00M",
        segments: [
          {
            id: "SEG_008",
            number: "521",
            carrierCode: "WN",
            duration: "PT6H00M",
            numberOfStops: 0,
            blacklistedInEU: false,
            aircraft: { code: "73H" },
            departure: {
              iataCode: "ORD",
              terminal: "5",
              at: "2026-03-08T10:00:00",
            },
            arrival: {
              iataCode: "LAS",
              terminal: "1",
              at: "2026-03-08T13:00:00",
            },
            operating: { carrierCode: "WN" },
          },
        ],
      },
    ],
  },
  {
    id: "TICKET_009",
    instantTicketingRequired: true,
    isUpsellOffer: false,
    itineraries: [
      {
        duration: "PT2H10M",
        segments: [
          {
            id: "SEG_009",
            number: "903",
            carrierCode: "DL",
            duration: "PT2H10M",
            numberOfStops: 0,
            blacklistedInEU: false,
            aircraft: { code: "220" },
            departure: {
              iataCode: "MCO",
              terminal: "B",
              at: "2026-03-09T16:40:00",
            },
            arrival: {
              iataCode: "ATL",
              terminal: "S",
              at: "2026-03-09T18:50:00",
            },
            operating: { carrierCode: "DL" },
          },
        ],
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
};
