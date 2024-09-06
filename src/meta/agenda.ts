interface AgendaItem {
  time: string;
  events: {
    title: string;
    speakers?: string[];
    description?: string[];
  }[];
}

export const agenda: AgendaItem[] = [
  {
    time: "8:00 AM",
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
    ]
  },
  {
    time: "9:15 AM",
    events: [
      { 
        title: "Keynote: Mathematics IS everywhere!",
        speakers: ["Speaker: Ingrid Daubechies"],
        description: ["The presentation will review many examples, from the speaker's own career as well as in the fields of focus for this year's Hudson Forum, illustrating the continuing importance of mathematics in science, technology and culture."]
      },
    ]
  },
  {
    time: "10:00 AM",
    events: [
      {
        title: "Quantum Computing: From Utility-Scale Quantum Computing to Quantum-Centric Supercomputing",
        speakers: [
          "Jerry Chow",
          "Sarah Sheldon",
          "Michael Biercuk",
          "Travis Humble",
          "Sabrina Maniscalco",
        ],
        description: ["Following an overview of the state of the art in quantum computing, the panel will discuss quantum algorithm development and near-term use cases with potential for quantum advantage. Quantum computers are becoming a tool for scientific discovery, and experimentation on today’s systems is charting the path towards commercial value."],
      },
    ]
  },
  {
    time: "11:00 AM",
    events: [
      {
        title: "Break",
      },
    ]
  },
  {
    time: "11:20 AM",
    events: [
      {
        title: "Gene-Edited Human Beings Are a Clinical Reality. What Happens Next?",
        speakers: ["Fyodor Urnov", "Mandana Arbab", "Sek Kathiresan"],
      },
    ],
  },
  {
    time: "12:10 PM",
    events: [
      {
        title: "Networking Lunch and Site Tours",
      },
    ]
  },
  {
    time: "1:35 PM",
    events: [
      {
        title: "Keynote: Human-Level AI",
        speakers: ["Yann LeCun"],
        description: ["There are four essential characteristics of human intelligence that current AI systems don’t possess: reasoning, planning, persistent memory, and understanding the physical world. Once we have systems with such capabilities, it will still take a while before we bring them up to human level."],
      },
    ]
  },
  {
    time: "2:20 PM",
    events: [
      {
        title: "AI for Science",
        speakers: [
          "David Cox",
          "Shirley Ho",
          "Surya Ganguli",
          "Tess Smidt",
          "Alex Rives",
        ],
        description: ["AI is revolutionizing science, opening new vistas for discovery across a range of fields, from biology to astrophysics. The panel will explore how recent AI advances are shaping the nature of scientific inquiry today, and project forward to the opportunities that lie ahead."],
      },
    ]
  },
  {
    time: "3:15 PM",
    events: [
      {
        title: "Break",
      },
    ]
  },
  {
    time: "3:35 PM",
    events: [
      {
        title: "Neurotechnology: Deciphering and Manipulating Brain Activity",
        speakers: ["Rafa Yuste", "Eddie Chang"],
        description: ["We will discuss recent advances in neurotechnology, reviewing successes in the decoding of inner language, emotions, and facial gestures from humans, as well as the increasing potential for mental augmentation."],
      },
    ]
  },
  {
    time: "4:20 PM",
    events: [
      {
        title: "What’s Next in Computing",
        speakers: ["Darío Gil"],
        description: ["We are living a special time in computing, a time when innovations in semiconductors continue to reduce energy consumption or enable more sophisticated calculations, when unprecedented levels of community activity are defining the future of AI as one based on open innovation, and when the accelerated growth of quantum computing is starting to demonstrate utility well beyond small experiments. Join me in an exploration of where each of these technologies is going this decade and what awaits at their intersection."],
      },
    ],
  },
  {
    time: "4:40 PM",
    events: [
      {
        title: "Hosts' Closing and Thank You",
      },
    ],
  },
  {
    time: "4:45 PM",
    events: [
      {
        title: "A brief diversion",
      },
    ],
  },
  {
    time: "5:10 PM",
    events: [
      {
        title: "Program concludes",
      },
    ],
  },
  {
    time: "5:30 PM",
    events: [
      {
        title: "Networking Reception begins",
      },
    ],
  },
  {
    time: "7:30 PM",
    events: [
      {
        title: "Event concludes",
      },
    ],
  },
];
