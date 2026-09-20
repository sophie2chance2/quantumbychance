import type { Metadata } from "next";
import { ArrowUpRight, Waves } from "lucide-react";

export const metadata: Metadata = { title: "Open questions" };

const questions = [
  { n: "01", title: "What does ‘observation’ physically mean in quantum mechanics?", text: "The double-slit experiment makes it tempting to say particles change their behavior when they are watched. I want to understand what counts as measurement, why human attention is irrelevant, and how the availability of path information changes the result.", tag: "measurement", scope: "my question", state: "just opened", icon: Waves },
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
