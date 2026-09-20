import type { Metadata } from "next";
import { ArrowUpRight, Beaker, Bookmark, FlaskConical } from "lucide-react";

export const metadata: Metadata = { title: "Experiment log" };

const experiments = [
  { date: "DAY 1", number: "EXP. 001", title: "The double-slit experiment", setup: "Particles sent toward two slits · interference pattern · path information introduced", result: "Without path information, an interference pattern builds up. When the path becomes knowable, that pattern changes.", thought: "This was the first experiment that pulled me down the quantum rabbit hole. It made the strangeness feel concrete while opening a much bigger question about what physicists mean by observation.", question: "What does ‘being watched’ actually mean if human attention has nothing to do with it?", color: "coral", status: "found interesting", url: "https://www.youtube.com/watch?v=Cc6FJXMfhew" },
];

export default function ExperimentsPage() {
  return (
    <div className="shell inner-page">
      <header className="page-hero experiment-hero">
        <div><p className="kicker">Evidence before adjectives</p><h1>Experiments I find<br /><em>interesting.</em></h1></div>
        <p>A curated collection of experiments that sharpen an idea, unsettle an assumption, or leave me with a better question.</p>
      </header>
      <div className="experiment-principle"><FlaskConical size={20} /><p><strong>What counts here?</strong> An experiment I want to remember because the setup, result, or implication changed how I frame the subject.</p></div>
      <section className="experiment-list">
        {experiments.map((experiment) => (
          <article key={experiment.number} className={`experiment-card ${experiment.color}`}>
            <div className="experiment-side"><span>{experiment.date}</span><b>{experiment.number}</b><Beaker size={27} /></div>
            <div className="experiment-body">
              <div className="experiment-heading"><div><small><Bookmark size={12} /> {experiment.status}</small><h2>{experiment.title}</h2></div><a href={experiment.url} target="_blank" rel="noreferrer" aria-label={`Open source for ${experiment.title}`}><ArrowUpRight size={19} /></a></div>
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
