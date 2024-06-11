export interface Speaker {
  name: string;
  desc: string;
  photo: string;
  photoPosition?: string;
}

export const speakers: Speaker[] = [
  {
    name: "Eddie Chang",
    desc: "Chair of the Department of Neurological Surgery, University of California San Francisco; and Professor of Neurological Surgery at UCSF Weill Institute for Neurosciences",
    photo: "/speakers/eddie-chang.webp",
  },
  {
    name: "David Cox",
    desc: 'VP, AI Models; IBM Director, MIT-IBM <span class="no-wrap">Watson AI Lab</span>',
    photo: "/speakers/david-cox.webp",
  },
  {
    name: "Jay Gambetta",
    desc: "IBM Fellow and VP of IBM Quantum",
    photo: "/speakers/jay-gambetta.webp",
  },
  {
    name: "Surya Ganguli",
    desc: "Associate Professor of Applied Physics, Senior Fellow at the Stanford Institute for HAI and Associate Professor, by courtesy, of Neurobiology, Electrical Engineering, and Computer Science. Venture Partner at a16z",
    photo: "/speakers/surya-ganguli.webp",
  },
  {
    name: "Darío Gil",
    desc: "IBM Senior Vice President and Director of Research",
    photo: "/speakers/dario-gil.webp",
  },
  {
    name: "Yann LeCun",
    desc: "VP & Chief AI Scientist at Meta and Silver Professor at NYU",
    photo: "/speakers/yann-lecun.webp",
  },
  {
    name: "Sriram Raghavan",
    desc: "Vice President, IBM Research AI",
    photo: "/speakers/sriram-raghavan.webp",
    photoPosition: "top",
  },
  {
    name: "Tess Smidt",
    desc: "X-Window Consortium Career Development Assistant Professor, Dep’t of Electrical Engineering and Computer Science, MIT",
    photo: "/speakers/tess-smidt.webp",
  },
  {
    name: "Tatiana Toro",
    desc: "Director of the Simons Laufer Mathematical Sciences Institute (SLMath) and Professor of Mathematics in the Department of Mathematics at University of Washington",
    photo: "/speakers/tatiana-toro.webp",
    photoPosition: "0 15%",
  },
  {
    name: "Fyodor Urnov",
    desc: "Professor of Molecular Therapeutics, Molecular and Cell Biology Department, UC Berkeley Director, Innovative Genomics Institute - Danaher Beacon for CRISPR Cures",
    photo: "/speakers/fyodor-urnov.webp",
  },
  {
    name: "Rafael Yuste",
    desc: "Professor of Biological Sciences and Director of the Neurotechnology Center at Columbia University. He is also Chairman of the Neurorights Foundation.",
    photo: "/speakers/rafael-yuste.webp",
  },
];
