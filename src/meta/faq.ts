export interface FAQ {
  question: string[];
  answer: string[];
  answerElement?: string;
}

export const simpleFaqs: FAQ[] = [
  {
    question: ["What is the dress code for the event?"],
    answer: ["Business casual."],
  },
  {
    question: ["What is the registration process for the event?"],
    answer: [
      "This is an invitation-only event. Please have a valid form of ID for check in. Guest will be giving a name badge that will need to be worn while in the building.",
    ],
  },
  {
    question: ["Where does event take place?"],
    answer: [
      "IBM Thomas J. Watson Research Center",
      "1101 Kitchawan Road",
      "Yorktown Heights, NY 10598",
    ],
    answerElement: "address",
  },
  {
    question: ["How do I drive to the", "Hudson Forum?"],
    answer: [
      'If using a GPS device, type "IBM Watson Research Center." This will take you directly to the entrance gate. If you are staying in New York City, plan for about one hour driving time by car.',
    ],
  },
  {
    question: ["Where do I park?"],
    answer: ["Signs will direct you to the Hudson Forum parking area."],
  },
  {
    question: ["Will there be a shuttle from my hotel?"],
    answer: [
      "There will be a shuttle from the three preferred hotels: Westchester Marriott, Sheraton Tarrytown Hotel, and The Opus Westchester. The shuttles will depart the hotels at 7:45am & 8:00am. Shuttle leads will be in the lobby of each hotel to direct guest to the shuttles. Return shuttles will begin at 5:00pm and the last shuttle will be departing the reception at 7:30pm.",
    ],
  },
];

export const simpleFaqs2: FAQ[] = [
  {
    question: ["Will meals be provided?"],
    answer: [
      "A full breakfast will be provided starting at 8:00am, lunch at approximately 12:30, and food will be served during the reception from 5:30 to 7:30.",
    ],
  },
];

/*
export const simpleFaqs3: FAQ[] = [
  {
    question: ["Is a prayer room available?"],
    answer: ["TBD"],
  },
  {
    question: ["Will I be able to check my bag during the event?"],
    answer: ["Yes, we will have a secure area where you can leave baggage."],
  },
  {
    question: ["Is a lactation room available?"],
    answer: [
      "There is a lactation room near the auditorium where talks will be held.",
    ],
  },
  {
    question: ["Is the event ADA compliant?"],
    answer: ["TBD"],
  },
  {
    question: ["What is the emergency contact on the day of the event?"],
    answer: ["TBD"],
  },
];
*/

interface Airport {
  name: string;
  url: string;
  away: string;
}

export const nearbyAirports: Airport[] = [
  {
    name: "Westchester County White Plains – HPN",
    url: "https://airport.westchestergov.com/",
    away: "13 miles away",
  },
  {
    name: "LaGuardia – LGA",
    url: "https://www.laguardiaairport.com/",
    away: "38 miles away",
  },
  {
    name: "John F Kennedy – JFK",
    url: "https://www.jfkairport.com/",
    away: "43 miles away",
  },
  {
    name: "Newark – EWR",
    url: "https://www.newarkairport.com/",
    away: "51 miles away",
  },
  {
    name: "Stewart International – SWF",
    url: "https://www.swfny.com/",
    away: "50 miles away",
  },
];

interface TrainStation {
  name: string;
  url: string;
  line: string;
  away: string;
}

export const closestTrainStations: TrainStation[] = [
  {
    name: "Croton-Harmon station",
    url: "https://new.mta.info/stations/croton-harmon",
    line: "Hudson Line",
    away: "~15 minute drive from the event",
  },
  {
    name: "White Plains station",
    url: "https://new.mta.info/stations/white-plains",
    line: "Harlem Line",
    away: "~25 minute drive from the event",
  },
];

interface TaxiOrLimo {
  name: string;
  tel: string;
}

export const taxisOrLimos: TaxiOrLimo[] = [
  {
    name: "Air Brook Limo",
    tel: "800 800 1990",
  },
  {
    name: "Leros Point to Point",
    tel: "800 825 3767",
  },
];

interface HotelRoomBlock {
  name: string;
  url: string;
  away: string;
}

export const reservedHotelRoomBlocks: HotelRoomBlock[] = [
  {
    name: "Hotel MTK Mount Kisco",
    url: "https://www.hilton.com/en/hotels/lgamkup-hotel-mtk-mount-kisco/",
    away: "7 miles away",
  },
  {
    name: "Sleepy Hollow Hotel & Conference Center",
    url: "https://sleepyhollowhotelny.com/",
    away: "11 miles away",
  },
  {
    name: "Courtyard by Marriott Tarrytown",
    url: "https://www.marriott.com/en-us/hotels/hpngr-courtyard-tarrytown-westchester-county/overview/",
    away: "11 miles away",
  },
  {
    name: "SpringHill Suites by Marriott Tarrytown",
    url: "https://www.marriott.com/en-us/hotels/hpntr-springhill-suites-tarrytown-westchester-county/overview/",
    away: "11 miles away",
  },
  {
    name: "Sonesta White Plains Downtown",
    url: "https://www.sonesta.com/sonesta-hotels-resorts/ny/white-plains/sonesta-white-plains-downtown",
    away: "13 miles away",
  },
];

interface DinnerPlace {
  name: string;
  url: string;
  addressLine1: string;
  addressLine2: string;
  tel: string;
}

export const dinnerPlaces: DinnerPlace[] = [
  {
    name: "Crabtree’s Kittle House and Inn",
    url: "https://www.crabtreeskittlehouse.com",
    addressLine1: "11 Kittle Road",
    addressLine2: "Chappaqua, NY 10514",
    tel: "914 666 8044",
  },
  {
    name: "The Inn at Pound Ridge",
    url: "https://www.theinnatpoundridge.com",
    addressLine1: "258 Westchester Avenue",
    addressLine2: "Pound Ridge, NY 10576",
    tel: "914 764 1400",
  },
  {
    name: "Lexington Square Cafe",
    url: "http://www.lexingtonsquarecafe.com",
    addressLine1: "510 Lexington Avenue",
    addressLine2: "Mt. Kisco, NY 10549",
    tel: "914 244 3663",
  },
  {
    name: "Morton's Steakhouse",
    url: "https://www.mortons.com/location/mortons-the-steakhouse-white-plains-ny",
    addressLine1: "5 Mamaroneck Avenue",
    addressLine2: "White Plains, NY 10601",
    tel: "914 683 6101",
  },
  {
    name: "MP Taverna",
    url: "https://www.mptaverna.com",
    addressLine1: "One Bridge Street",
    addressLine2: "Irvington, NY 10533",
    tel: "914 231 7854",
  },
  {
    name: "Mulino’s",
    url: "https://www.mulinosny.com",
    addressLine1: "99 Court Street",
    addressLine2: "White Plains, NY 10601",
    tel: "914 761 1818",
  },
  {
    name: "Red Hat on the River",
    url: "https://redhatontheriver.com",
    addressLine1: "1 Bridge Street",
    addressLine2: "Irvington, NY 10533",
    tel: "914 591 5888",
  },
  {
    name: "RiverMarket Bar & Kitchen",
    url: "https://rivermarketbarkitchen.com",
    addressLine1: "127 W Main Streett",
    addressLine2: "Tarrytown, NY 10591",
    tel: "914 631 3100",
  },
];
