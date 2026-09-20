export type Note = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  color: "violet" | "coral" | "mint" | "blue";
  status?: "clearer" | "still-fuzzy" | "new";
};

export const notes: Note[] = [
  {
    slug: "day-one-what-are-particles-doing",
    eyebrow: "Learning log 01",
    title: "Day 1: What are particles doing when we’re not looking?",
    description: "A beginner’s first encounter with the double-slit experiment, the temptation to anthropomorphize particles, and the feeling of entering a much bigger world.",
    date: "Sep 19, 2026",
    readTime: "4 min",
    color: "coral",
    status: "new",
  },
  {
    slug: "qubits-are-not-spinning-coins",
    eyebrow: "Mental model 01",
    title: "A qubit is not a coin spinning in the air",
    description: "Where the coin analogy helps, where it quietly breaks, and what a state vector adds to the picture.",
    date: "Sep 18, 2026",
    readTime: "6 min",
    color: "violet",
    status: "clearer",
  },
  {
    slug: "measurement-is-not-just-looking",
    eyebrow: "Field note 07",
    title: "Measurement is not just ‘looking’",
    description: "Trying to understand why asking a quantum system a question also changes what can be asked next.",
    date: "Sep 12, 2026",
    readTime: "8 min",
    color: "coral",
    status: "still-fuzzy",
  },
  {
    slug: "entanglement-without-telepathy",
    eyebrow: "Mental model 02",
    title: "Entanglement, without the telepathy",
    description: "Strong correlations are strange enough. We do not need to smuggle faster-than-light messages into them.",
    date: "Sep 4, 2026",
    readTime: "7 min",
    color: "mint",
    status: "clearer",
  },
  {
    slug: "why-errors-are-everywhere",
    eyebrow: "Dispatch 03",
    title: "Why quantum errors are everywhere",
    description: "Noise, decoherence, and the beautiful absurdity of correcting errors without copying the state.",
    date: "Aug 26, 2026",
    readTime: "10 min",
    color: "blue",
    status: "new",
  },
];

export const pathSteps = [
  { number: "01", label: "Orient", title: "Why quantum?", text: "Start with the problems classical computers struggle to represent — and what quantum machines promise, cautiously." },
  { number: "02", label: "Foundations", title: "Meet the qubit", text: "Build intuition for states, amplitudes, phase, and measurement before the notation starts to pile up." },
  { number: "03", label: "Patterns", title: "Circuits & entanglement", text: "See how simple gates combine into behaviors that have no comfortable classical equivalent." },
  { number: "04", label: "Reality check", title: "Noise & hardware", text: "Connect the clean diagrams to fragile physical systems, error correction, and today’s real limitations." },
  { number: "05", label: "Frontier", title: "Algorithms & questions", text: "Explore where advantage may live — and which claims are still hypotheses, engineering goals, or hype." },
];
