import type { Metadata } from "next";
import { ArrowUpRight, Beaker, Bookmark, FlaskConical } from "lucide-react";

export const metadata: Metadata = { title: "Experiment log" };

const experiments = [
  { date: "SAVED", number: "EXP. 003", title: "Creating and measuring a Bell pair", setup: "Two qubits · H gate · CNOT · repeated measurement", result: "Measurements cluster around the correlated outcomes 00 and 11, while real hardware also exposes noise in the remaining outcomes.", thought: "What catches my attention is the seam between an immaculate circuit diagram and a physical machine. The errors are not a footnote; they are part of what the experiment teaches us.", question: "When does a noisy correlation become convincing evidence of entanglement?", color: "violet", status: "on the list" },
  { date: "SAVED", number: "EXP. 002", title: "Watching interference disappear", setup: "Mach–Zehnder interferometer · which-path information introduced", result: "The interference pattern disappears when the paths become distinguishable—even if no person looks at the path record.", thought: "I like this because it cuts through the seductive idea that consciousness causes collapse. The physical availability of information is already strange enough.", question: "Where exactly is the boundary between information existing and information being measured?", color: "coral", status: "on the list" },
  { date: "SAVED", number: "EXP. 001", title: "Testing Bell inequalities", setup: "Entangled particles · separated measurement settings · correlation test", result: "The observed correlations violate constraints satisfied by local hidden-variable theories, matching quantum predictions.", thought: "This feels philosophically enormous and experimentally disciplined at the same time: a question about the nature of reality becomes something a laboratory can constrain.", question: "What do Bell tests rule out—and which interpretations do they leave untouched?", color: "mint", status: "on the list" },
];

export default function ExperimentsPage() {
  return (
    <div className="shell inner-page">
      <header className="page-hero experiment-hero">
        <div><p className="kicker">Evidence before adjectives</p><h1>Experiments I find<br /><em>interesting.</em></h1></div>
        <p>A curated collection of experiments that sharpen an idea, unsettle an assumption, or leave me with a better question.</p>
      </header>
      <div className="experiment-principle"><FlaskConical size={20} /><p><strong>What counts here?</strong> An experiment I want to remember because the setup, result, or implication changed how I frame the subject.</p></div>
      <p className="draft-note">Starter draft · I’ll replace and expand these entries with the exact experiments, sources, and thoughts I collect.</p>
      <section className="experiment-list">
        {experiments.map((experiment) => (
          <article key={experiment.number} className={`experiment-card ${experiment.color}`}>
            <div className="experiment-side"><span>{experiment.date}</span><b>{experiment.number}</b><Beaker size={27} /></div>
            <div className="experiment-body">
              <div className="experiment-heading"><div><small><Bookmark size={12} /> {experiment.status}</small><h2>{experiment.title}</h2></div><button aria-label={`Open ${experiment.title}`}><ArrowUpRight size={19} /></button></div>
              <div className="experiment-detail"><div><span>The setup</span><p>{experiment.setup}</p></div><div><span>What happened</span><p>{experiment.result}</p></div></div>
              <blockquote><span>Why it caught my attention</span>{experiment.thought}</blockquote>
              <p className="experiment-question"><span>Question it leaves me with</span>{experiment.question}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
