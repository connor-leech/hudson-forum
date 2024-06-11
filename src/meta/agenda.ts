interface AgendaItem {
  time: string;
  events: {
    title: string;
    speakers?: string[];
  }[];
}

export const agenda: AgendaItem[] = [
  {
    time: "8:30 AM",
    events: [
      {
        title: "Check-in / Breakfast",
      },
    ],
  },
  {
    time: "9:00 AM",
    events: [
      {
        title: "Welcome and Opening Remarks",
      },
      {
        title: "Keynote",
        speakers: ["Ingrid Daubechies"],
      },
      {
        title: "Quantum Computing session",
        speakers: [
          "Jerry Chow",
          "Sarah Sheldon",
          "Michael Biercuk",
          "Travis Humble",
          "Sabrina Maniscalco",
        ],
      },
      {
        title: "Break",
      },
      {
        title: "Genetic Engineering session",
        speakers: ["Fyodor Urnov", "Mandana Arbab", "Sek Kathiresan"],
      },
    ],
  },
  {
    time: "12:30 PM",
    events: [
      {
        title: "Networking Lunch and Site Tours",
      },
      {
        title: "Keynote",
        speakers: ["Yann LeCun"],
      },
      {
        title: "AI for Science session",
        speakers: [
          "Sriram Raghavan",
          "David Cox",
          "Shirley Ho",
          "Surya Ganguli",
          "Tess Smidt",
          "Alex Rives",
        ],
      },
      {
        title: "Break",
      },
      {
        title: "Neurotechnology session",
        speakers: ["Rafa Yuste", "Eddie Chang"],
      },
      {
        title: "The Future of Computing",
        speakers: ["Darío Gil"],
      },
    ],
  },
  {
    time: "5:30 PM",
    events: [
      {
        title: "Closing and Thank You",
      },
    ],
  },
  {
    time: "5:30 – 7:30 PM",
    events: [
      {
        title: "Networking Reception",
      },
    ],
  },
];
