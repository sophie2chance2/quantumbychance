import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, Layers3, Play, Star } from "lucide-react";

export const metadata: Metadata = { title: "Learning queue" };

const queue = [
  { type: "Read", icon: BookOpen, title: "Quantum: A Guide for the Perplexed", creator: "Jim Al-Khalili", why: "Probably my favorite true beginner starting point. It explains superposition, uncertainty, entanglement, and more without assuming much physics.", stage: "01 · Start here", level: "True beginner", priority: true },
  { type: "Read", icon: BookOpen, title: "In Search of Schrödinger’s Cat", creator: "John Gribbin", why: "Very readable, with the history of quantum mechanics alongside the concepts. Great for understanding why quantum theory developed.", stage: "02 · Build context", level: "History + ideas", priority: false },
  { type: "Read", icon: BookOpen, title: "Something Deeply Hidden", creator: "Sean Carroll", why: "Excellent once the basic vocabulary is familiar. It focuses on what quantum mechanics actually means, including the many-worlds interpretation.", stage: "03 · Interpret", level: "Meaning", priority: false },
  { type: "Read", icon: BookOpen, title: "QED: The Strange Theory of Light and Matter", creator: "Richard Feynman", why: "Short, surprisingly approachable, and drawn from lectures for non-specialists. A first taste of how physicists reason about quantum behavior.", stage: "04 · Reason", level: "Lectures", priority: false },
  { type: "Read", icon: BookOpen, title: "The Theoretical Minimum: Quantum Mechanics", creator: "Leonard Susskind & Art Friedman", why: "Where I’d go when it’s time to actually learn quantum mechanics rather than just learn about it. There is real math, designed for motivated non-physicists.", stage: "05 · Do the math", level: "Mathematical", priority: false },
  { type: "Watch", icon: Play, title: "Double-Slit Experiment & Wave-Particle Duality Explained in Simple Words", creator: "Science ABC · YouTube", why: "A visual first look at the double-slit experiment and the strange shift between particle-like and wave-like behavior.", stage: "Watch first", level: "Video", priority: true, url: "https://www.youtube.com/watch?v=Cc6FJXMfhew" },
];

export default function QueuePage() {
  return (
    <div className="shell inner-page">
      <header className="page-hero queue-hero">
        <div><p className="kicker">The input side</p><h1>What I’m learning<br /><em>next.</em></h1></div>
        <div className="queue-intro"><p>This is a deliberate progression, not an infinite bookmarks folder. Every item has a role in moving from intuition to real mechanics.</p><div><span>5 books</span><span>1 video</span></div></div>
      </header>
      <div className="queue-toolbar"><span>Reading arc: <strong>foundations → meaning → mathematics</strong></span><small>Curated by Sophie</small></div>
      <section className="queue-list">
        {queue.map(({ type, icon: Icon, title, creator, why, stage, level, priority, url }, index) => (
          <article key={title}>
            <div className="queue-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="queue-type"><Icon size={17} /><span>{type}</span></div>
            <div className="queue-content">
              <div className="queue-title-line"><h2>{title}</h2>{priority && <span><Star size={11} /> up next</span>}</div>
              <p className="creator">{creator}</p>
              <p><strong>Why it’s here</strong>{why}</p>
            </div>
            <div className="queue-facts"><span><Layers3 size={14} /> {stage}</span><span>{level}</span>{url ? <a href={url} target="_blank" rel="noreferrer" aria-label={`Open ${title}`}><ArrowUpRight size={18} /></a> : <i />}</div>
          </article>
        ))}
      </section>
      <aside className="queue-rule"><span>Queue rule № 1</span><p>Finishing is optional. Writing down why I stopped is not.</p></aside>
    </div>
  );
}
