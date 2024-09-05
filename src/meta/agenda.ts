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
        title: "Keynote: Mathematics IS everywhere!",
        speakers: ["Speaker: Ingrid Daubechies"],
        description: ["The presentation will review many examples, from the speaker's own career as well as in the fields of focus for this year's Hudson Forum, illustrating the continuing importance of mathematics in science, technology and culture."]
      },
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
      {
        title: "Break",
      },
      {
        title: "Genetic Engineering session: Gene-Edited Human Beings Are a Clinical Reality. What Happens Next?",
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
        title: "Keynote: Human-Level AI",
        speakers: ["Yann LeCun"],
        description: ["There are four essential characteristics of human intelligence that current AI systems don’t possess: reasoning, planning, persistent memory, and understanding the physical world. Once we have systems with such capabilities, it will still take a while before we bring them up to human level."],
      },
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
      {
        title: "Break",
      },
      {
        title: "Neurotechnology: Deciphering and Manipulating Brain Activity",
        speakers: ["Rafa Yuste", "Eddie Chang"],
        description: ["We will discuss recent advances in neurotechnology, reviewing successes in the decoding of inner language, emotions, and facial gestures from humans, as well as the increasing potential for mental augmentation."],
      },
      {
        title: "What’s Next in Computing",
        speakers: ["Darío Gil"],
        description: ["We are living a special time in computing, a time when innovations in semiconductors continue to reduce energy consumption or enable more sophisticated calculations, when unprecedented levels of community activity are defining the future of AI as one based on open innovation, and when the accelerated growth of quantum computing is starting to demonstrate utility well beyond small experiments. Join me in an exploration of where each of these technologies is going this decade and what awaits at their intersection."],
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
