import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, Clock3, Headphones, Play, Star } from "lucide-react";

export const metadata: Metadata = { title: "Learning queue" };

const queue = [
  { type: "Read", icon: BookOpen, title: "Quantum Computing Since Democritus", creator: "Scott Aaronson", why: "For a computer-science-first route through what makes quantum information different — and a useful skepticism filter.", time: "12 hrs", level: "Deep dive", priority: true },
  { type: "Watch", icon: Play, title: "Quantum Country", creator: "Andy Matuschak & Michael Nielsen", why: "To test whether spaced repetition helps quantum concepts become usable, not merely familiar.", time: "3 hrs", level: "Interactive", priority: true },
  { type: "Read", icon: BookOpen, title: "Quantum Computing: Progress and Prospects", creator: "National Academies", why: "A baseline for separating durable technical constraints from this year’s headlines.", time: "5 hrs", level: "Report", priority: false },
  { type: "Listen", icon: Headphones, title: "The Joy of Why: Quantum Error Correction", creator: "Quanta Magazine", why: "I want another explanation of how information survives without violating the no-cloning theorem.", time: "55 min", level: "Conversation", priority: false },
];

export default function QueuePage() {
  return (
    <div className="shell inner-page">
      <header className="page-hero queue-hero">
        <div><p className="kicker">The input side</p><h1>What I’m learning<br /><em>next.</em></h1></div>
        <div className="queue-intro"><p>This is a deliberate queue, not an infinite bookmarks folder. Every item needs a reason to be here.</p><div><span>4 queued</span><span>~21 hours</span></div></div>
      </header>
      <div className="queue-toolbar"><span>Current season: <strong>error correction & useful advantage</strong></span><small>Last tended Sep 19, 2026</small></div>
      <p className="draft-note">Starter draft · I’m replacing these prompts with exact links and firsthand notes as I work through them.</p>
      <section className="queue-list">
        {queue.map(({ type, icon: Icon, title, creator, why, time, level, priority }, index) => (
          <article key={title}>
            <div className="queue-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="queue-type"><Icon size={17} /><span>{type}</span></div>
            <div className="queue-content">
              <div className="queue-title-line"><h2>{title}</h2>{priority && <span><Star size={11} /> up next</span>}</div>
              <p className="creator">{creator}</p>
              <p><strong>Why it’s here</strong>{why}</p>
            </div>
            <div className="queue-facts"><span><Clock3 size={14} /> {time}</span><span>{level}</span><button aria-label={`Open ${title}`}><ArrowUpRight size={18} /></button></div>
          </article>
        ))}
      </section>
      <aside className="queue-rule"><span>Queue rule № 1</span><p>Finishing is optional. Writing down why I stopped is not.</p></aside>
    </div>
  );
}
