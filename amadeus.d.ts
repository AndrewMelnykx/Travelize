declare module "amadeus" {
  interface ClientOptions {
    clientId?: string;
    clientSecret?: string;
  }

  interface HotelOfferParams {
    cityCode: string;
    checkInDate: string;
    checkOutDate: string;
  }

  interface HotelOfferResponse {
    data: any;
  }

  class Amadeus {
    constructor(options: ClientOptions);
    referenceData: {
      locations: {
        get(params: LocationSearchParams): Promise<LocationSearchResponse>;
      };
    };

    shopping: {
      hotelOffers: {
        get(params: HotelOfferParams): Promise<HotelOfferResponse>;
      };
    };
  }

  export = Amadeus;
}
