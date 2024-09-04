interface Hotel {
  image: string;
  name: string;
  addressLine1: string;
  addressLine2: string;
  tel: string;
  nightlyRate: string;
  description: string;
  bookingLink: string;
  bookingDeadline?: string;
}

export const hotels: Hotel[] = [
  {
    image: "/reserved-hotels/sheraton-tarrytown-hotel.webp",
    name: "Sheraton Tarrytown Hotel",
    addressLine1: "600 White Plains Road",
    addressLine2: "Tarrytown, New York 10591",
    tel: "914 332 7900",
    nightlyRate: "$175",
    description:
      "Located in Tarrytown, the Sheraton Hotel offers modern common areas and onsite Starbucks. This hotel is 20 minutes from the Hudson Forum at the IBM Watson Research Center. Shuttle service will be provided to and from the hotel on Tuesday, September 10. Shuttles will depart at 7:40 am & 8:00 am.",
    bookingLink:
      "https://www.marriott.com/event-reservations/reservation-link.mi?id=1716993819464&key=GRP&app=resvlink",
    bookingDeadline: "by September 5",
  },
  {
    image: "/reserved-hotels/westchester-marriott.webp",
    name: "Westchester Marriott",
    addressLine1: "670 White Plains Road",
    addressLine2: "Tarrytown, New York 10591",
    tel: "914 631 2200",
    nightlyRate: "$186",
    description:
      "Located in Tarrytown, the recently renovated Marriott hotel thoughtfully considered each detail in the design and has onsite Ruth’s Chris Steak House. This hotel is 20 minutes from the Hudson Forum at the IBM Watson Research Center. Shuttle service will be provided to and from the hotel on Tuesday, September 10. Shuttles will depart at 7:40 am & 8:15 am.",
    bookingLink:
      "https://www.marriott.com/event-reservations/reservation-link.mi?id=1717074063620&key=GRP&app=resvlink",
    bookingDeadline: "by August 30",
  },
  {
    image: "/reserved-hotels/the-opus-westchester-autograph-collection.webp",
    name: "The Opus Westchester, Autograph collection",
    addressLine1: "3 Renaissance Square",
    addressLine2: "White Plains, New York 10601",
    tel: "914 946 5500",
    nightlyRate: "$415",
    description:
      "Part of the Autograph collection, the Opus Westchester is located in White Plains. This hotel is 20 minutes from the Hudson Forum at the IBM Watson Research Center. Shuttle service will be provided to and from the hotel on Tuesday, September 10. Shuttles will depart at 7:30 am & 7:50 am",
    bookingLink:
      "mailto:hudson.forum@ibm.com",
      bookingDeadline: "by contacting us at hudson.forum@ibm.com.",
  },
];

interface AdditionalHotel {
  name: string;
  url: string;
  away: string;
}

export const additionalHotels: AdditionalHotel[] = [
  {
    name: "The Castle Hotel and Spa",
    url: "https://www.castlehotelandspa.com/",
    away: "14 miles away",
  },
  {
    name: "The Abbey Inn & Spa",
    url: "https://www.theabbeyinn.com/",
    away: "14 miles away",
  },
  {
    name: "Crabtree's Kittle House",
    url: "https://www.crabtreeskittlehouse.com/",
    away: "6 miles away",
  },
];
