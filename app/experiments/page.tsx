import type { Metadata } from "next";
import { ArrowUpRight, Beaker, CircleCheck, FlaskConical } from "lucide-react";

export const metadata: Metadata = { title: "Experiment log" };

const experiments = [
  { date: "SEP 2026", number: "EXP. 003", title: "Making a Bell pair on real hardware", setup: "Two qubits · H gate · CNOT · 4,096 shots", result: "The expected 00 and 11 outcomes dominated, with a small but visible population in 01 and 10.", thought: "The ‘wrong’ outcomes made the idea more concrete, not less. Entanglement is the model; calibration, readout error, and decoherence are the encounter with matter.", color: "violet", status: "reproduced" },
  { date: "AUG 2026", number: "EXP. 002", title: "Watching interference disappear", setup: "Mach–Zehnder simulation · which-path detector toggled", result: "Adding path information removed the interference pattern, even before inspecting the stored result.", thought: "The key shift for me: it is not human awareness that matters. It is whether the alternatives remain physically indistinguishable enough to interfere.", color: "coral", status: "simulated" },
  { date: "AUG 2026", number: "EXP. 001", title: "A tiny Deutsch–Jozsa circuit", setup: "3 qubits · balanced and constant oracles · simulator", result: "One oracle query separated the promised function types in the idealized problem.", thought: "Elegant, but a warning against confusing query advantage with practical advantage. The promise built into the problem is doing real work.", color: "mint", status: "reproduced" },
];

export default function ExperimentsPage() {
  return (
    <div className="shell inner-page">
      <header className="page-hero experiment-hero">
        <div><p className="kicker">Evidence before adjectives</p><h1>The experiment<br /><em>log.</em></h1></div>
        <p>I reproduce small experiments to find the seam between the beautiful model and the stubborn physical result.</p>
      </header>
      <div className="experiment-principle"><FlaskConical size={20} /><p><strong>What counts here?</strong> Something I ran, reproduced, or examined closely enough to state the setup, result, and what changed in my thinking.</p></div>
      <section className="experiment-list">
        {experiments.map((experiment) => (
          <article key={experiment.number} className={`experiment-card ${experiment.color}`}>
            <div className="experiment-side"><span>{experiment.date}</span><b>{experiment.number}</b><Beaker size={27} /></div>
            <div className="experiment-body">
              <div className="experiment-heading"><div><small><CircleCheck size={12} /> {experiment.status}</small><h2>{experiment.title}</h2></div><button aria-label={`Open ${experiment.title}`}><ArrowUpRight size={19} /></button></div>
              <div className="experiment-detail"><div><span>Setup</span><p>{experiment.setup}</p></div><div><span>What happened</span><p>{experiment.result}</p></div></div>
              <blockquote><span>My read</span>{experiment.thought}</blockquote>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
