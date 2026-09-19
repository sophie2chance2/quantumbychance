import Link from "next/link";
import { ArrowRight, Asterisk, Beaker, BookMarked, CircleHelp, MessageSquareText, Sparkles } from "lucide-react";
import NoteCard from "@/components/NoteCard";
import { notes, pathSteps } from "@/data/content";

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="kicker"><span>●</span> A public research notebook</p>
          <h1>Quantum computing,<br /><em>one confusion</em> at a time.</h1>
          <p className="hero-dek">I’m learning quantum computing in public — following the signals, testing ideas, and publishing the questions that feel worth carrying forward.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/learn">Start at the beginning <ArrowRight size={17} /></Link>
            <Link className="button button-quiet" href="/notes">Browse the notes</Link>
          </div>
        </div>

        <div className="hero-orbit" aria-label="Abstract illustration of a qubit state">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="state-dot state-zero">|0〉</div>
          <div className="state-dot state-one">|1〉</div>
          <div className="qubit-core"><span>ψ</span><small>somewhere in between</small></div>
          <p className="orbit-note">not to scale<br />(nothing is)</p>
        </div>
      </section>

      <section className="manifesto">
        <Asterisk size={28} />
        <p>This is not a course by an expert. It’s a trail of breadcrumbs from someone learning out loud — with enough structure that you can follow along.</p>
      </section>

      <section className="section shell desk-section">
        <div className="section-heading split-heading">
          <div><p className="kicker">The working desk</p><h2>See the thinking<br />as it happens.</h2></div>
          <p>Not just what I know, but how I’m choosing what to learn, what I make of it, and where it leads next.</p>
        </div>
        <div className="desk-grid">
          <Link href="/queue" className="desk-card queue-card"><BookMarked size={24} /><span>01 · Input</span><h3>Learning queue</h3><p>What I want to read, watch, and work through next — plus why it made the list.</p><b>See what’s next <ArrowRight size={15} /></b></Link>
          <Link href="/notes" className="desk-card thinking-card"><MessageSquareText size={24} /><span>02 · Synthesis</span><h3>Thinking in progress</h3><p>My reactions, emerging theses, changed minds, and the connections I’m trying to make.</p><b>Read the margins <ArrowRight size={15} /></b></Link>
          <Link href="/questions" className="desk-card questions-card"><CircleHelp size={24} /><span>03 · Inquiry</span><h3>Open questions</h3><p>The field’s unresolved edges alongside the things I personally still need to understand.</p><b>Open the ledger <ArrowRight size={15} /></b></Link>
          <Link href="/experiments" className="desk-card experiments-card"><Beaker size={24} /><span>04 · Evidence</span><h3>Experiment log</h3><p>Interesting demonstrations, papers, and results — with my read on why they matter.</p><b>Inspect the evidence <ArrowRight size={15} /></b></Link>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">A gentle route in</p>
            <h2>Your path through<br />the strange stuff.</h2>
          </div>
          <p>No physics degree required. Some curiosity helps. We’ll add the math when it earns its keep.</p>
        </div>
        <div className="path-grid">
          {pathSteps.map((step, index) => (
            <article className="path-card" key={step.number}>
              <div className="path-top"><span>{step.number}</span><small>{step.label}</small></div>
              <div className="path-symbol" aria-hidden="true">{["↗", "|ψ〉", "⊕", "≈", "?"][index]}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <Link href="/learn" aria-label={`Explore ${step.title}`}>Explore <ArrowRight size={15} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section notes-section">
        <div className="shell">
          <div className="section-heading inline-heading">
            <div><p className="kicker">Latest field notes</p><h2>Fresh from the notebook.</h2></div>
            <Link href="/notes">View all notes <ArrowRight size={16} /></Link>
          </div>
          <div className="notes-grid">
            {notes.slice(0, 3).map((note) => <NoteCard note={note} key={note.slug} />)}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="question-card">
          <div className="question-icon"><CircleHelp size={24} /></div>
          <div className="question-copy">
            <p className="kicker">Question I’m carrying this week</p>
            <h2>If quantum states can’t be copied, how does quantum error correction work?</h2>
            <p>My current understanding: we never copy the state itself. We spread its information across entangled qubits, then measure the shape of the error — not the protected information. I’m still working through what that means physically.</p>
            <Link href="/questions">Follow the thread <ArrowRight size={16} /></Link>
          </div>
          <div className="scribble" aria-hidden="true"><span>error?</span><i>→</i><strong>syndrome</strong><i>→</i><span>repair</span></div>
        </div>
      </section>

      <section className="invitation">
        <Sparkles size={24} />
        <h2>Confusion is not a detour.<br /><em>It’s the map being drawn.</em></h2>
        <p>If you’re curious, skeptical, or simply trying to keep the bras and kets straight — you’re in good company.</p>
        <Link className="button button-light" href="/about">Why I’m learning this <ArrowRight size={17} /></Link>
      </section>
    </>
  );
}
