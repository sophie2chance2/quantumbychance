import type { Metadata } from "next";
import { ArrowUpRight, Beaker, CircleCheck, FlaskConical } from "lucide-react";

export const metadata: Metadata = { title: "Experiment log" };

const experiments = [
  { date: "NEXT", number: "EXP. 003", title: "Making a Bell pair on real hardware", setup: "Two qubits · H gate · CNOT · 4,096 shots", result: "How strongly do 00 and 11 dominate, and what can the ‘wrong’ outcomes reveal about this specific machine?", thought: "Working hypothesis: noise will make entanglement more concrete, not less. The circuit is the model; calibration, readout error, and decoherence are the encounter with matter.", color: "violet", status: "to reproduce" },
  { date: "NEXT", number: "EXP. 002", title: "Watching interference disappear", setup: "Mach–Zehnder simulation · which-path detector toggled", result: "What changes when path information exists—even if nobody inspects the stored result?", thought: "Working hypothesis: human awareness is irrelevant. The hinge is whether the alternatives remain physically indistinguishable enough to interfere.", color: "coral", status: "to simulate" },
  { date: "NEXT", number: "EXP. 001", title: "A tiny Deutsch–Jozsa circuit", setup: "3 qubits · balanced and constant oracles · simulator", result: "Can I reproduce the one-query separation—and identify exactly where the problem’s promise does the work?", thought: "Working hypothesis: the circuit is elegant, but query advantage here should not be casually translated into practical advantage.", color: "mint", status: "to reproduce" },
];

export default function ExperimentsPage() {
  return (
    <div className="shell inner-page">
      <header className="page-hero experiment-hero">
        <div><p className="kicker">Evidence before adjectives</p><h1>The experiment<br /><em>log.</em></h1></div>
        <p>I reproduce small experiments to find the seam between the beautiful model and the stubborn physical result.</p>
      </header>
      <div className="experiment-principle"><FlaskConical size={20} /><p><strong>What counts here?</strong> A planned test with a falsifiable hunch—or something I ran closely enough to state the setup, result, and what changed in my thinking.</p></div>
      <p className="draft-note">Starter draft · These are experiment plans and working hypotheses until I add firsthand results.</p>
      <section className="experiment-list">
        {experiments.map((experiment) => (
          <article key={experiment.number} className={`experiment-card ${experiment.color}`}>
            <div className="experiment-side"><span>{experiment.date}</span><b>{experiment.number}</b><Beaker size={27} /></div>
            <div className="experiment-body">
              <div className="experiment-heading"><div><small><CircleCheck size={12} /> {experiment.status}</small><h2>{experiment.title}</h2></div><button aria-label={`Open ${experiment.title}`}><ArrowUpRight size={19} /></button></div>
              <div className="experiment-detail"><div><span>Planned setup</span><p>{experiment.setup}</p></div><div><span>Question to test</span><p>{experiment.result}</p></div></div>
              <blockquote><span>Before I run it</span>{experiment.thought}</blockquote>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
