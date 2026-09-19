import type { Metadata } from "next";
import { ArrowUpRight, CircleDot, Orbit, Waves } from "lucide-react";

export const metadata: Metadata = { title: "Open questions" };

const questions = [
  { n: "01", title: "Where will useful quantum advantage show up first?", text: "Not theoretical advantage. Not a benchmark designed for the machine. A problem someone genuinely needs solved, where quantum changes the practical answer.", tag: "application", scope: "field question", state: "collecting evidence", icon: Orbit },
  { n: "02", title: "How much error correction is enough?", text: "The theory says fault tolerance is possible. The engineering question is how many physical qubits, how clean, and at what cost for a useful logical one.", tag: "hardware", scope: "field question", state: "following", icon: CircleDot },
  { n: "03", title: "What does a quantum state represent?", text: "Is the wavefunction a real physical object, information about a system, or something else? The math works while the interpretation keeps arguing.", tag: "foundations", scope: "field question", state: "sitting with it", icon: Waves },
  { n: "04", title: "Which quantum claims deserve our confidence?", text: "Between real progress, press-release optimism, and the difficulty of comparing machines, what evidence should a careful learner demand?", tag: "epistemology", scope: "my inquiry", state: "developing a rubric", icon: Orbit },
];

export default function QuestionsPage() {
  return (
    <div className="shell inner-page">
      <header className="page-hero question-hero">
        <div><p className="kicker">The honest frontier</p><h1>Questions with<br /><em>no neat ending.</em></h1></div>
        <p>Some are open to the whole field. Others are simply open to me. Keeping both visible is part of learning well.</p>
      </header>
      <section className="question-list">
        {questions.map(({ n, title, text, tag, scope, state, icon: Icon }) => (
          <article key={n}>
            <span className="question-number">{n}</span>
            <div className="question-art"><Icon size={32} /></div>
            <div><div className="question-labels"><small>{tag}</small><small>{scope}</small><small>{state}</small></div><h2>{title}</h2><p>{text}</p></div>
            <button aria-label={`Open question: ${title}`}><ArrowUpRight size={20} /></button>
          </article>
        ))}
      </section>
      <aside className="permission-slip"><span>Permission slip</span><p>You do not have to collapse uncertainty into confidence just to keep moving.</p></aside>
    </div>
  );
}
