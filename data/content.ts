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
];

export const pathSteps = [
  { number: "01", label: "Orient", title: "Why quantum?", text: "Start with the problems classical computers struggle to represent — and what quantum machines promise, cautiously." },
  { number: "02", label: "Foundations", title: "Meet the qubit", text: "Build intuition for states, amplitudes, phase, and measurement before the notation starts to pile up." },
  { number: "03", label: "Patterns", title: "Circuits & entanglement", text: "See how simple gates combine into behaviors that have no comfortable classical equivalent." },
  { number: "04", label: "Reality check", title: "Noise & hardware", text: "Connect the clean diagrams to fragile physical systems, error correction, and today’s real limitations." },
  { number: "05", label: "Frontier", title: "Algorithms & questions", text: "Explore where advantage may live — and which claims are still hypotheses, engineering goals, or hype." },
];
