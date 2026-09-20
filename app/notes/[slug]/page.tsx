import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Lightbulb, RefreshCcw } from "lucide-react";
import { notes } from "@/data/content";

export function generateStaticParams() { return notes.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  return { title: note?.title ?? "Note" };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  if (!note) notFound();

  if (slug === "day-one-what-are-particles-doing") {
    return (
      <article className="article-page shell">
        <Link href="/notes" className="back-link"><ArrowLeft size={16} /> All thinking</Link>
        <header>
          <p className="kicker">{note.eyebrow}</p>
          <h1>{note.title}</h1>
          <p className="article-dek">{note.description}</p>
          <div className="article-meta"><span>{note.date}</span><span>{note.readTime} read</span><span>Understanding: just beginning</span></div>
        </header>
        <div className="day-one-figure" aria-label="An abstract double-slit interference pattern">
          <div className="slit-source">•</div><div className="slit-wall"><i /><i /></div><div className="wave-lines"><i /><i /><i /><i /><i /></div>
          <span>particle?</span><span>wave?</span><small>Day 1 mental model — very much under construction</small>
        </div>
        <div className="article-layout">
          <aside className="toc"><span>In this note</span><a href="#baseline">The messy baseline</a><a href="#rabbit-hole">Down the rabbit hole</a><a href="#teenager">The elusive teenager</a><a href="#bigger">Bigger than qubits</a></aside>
          <div className="prose day-one-prose">
            <p className="lede">Day 1 of learning quantum, and I’m feeling a bit—pun entirely intended—overwhelmed by what I’ve gotten myself into.</p>
            <p>I don’t have a background in physics. At the moment, pure curiosity is doing all the driving, and I feel very far outside my usual realm.</p>

            <h2 id="baseline">The messy baseline</h2>
            <p>My starting mental map is mostly a pile of intriguing fragments: light can behave like a wave and a particle; parallel universes appear in at least one interpretation of quantum mechanics; and quantum computers are often mentioned in the same breath as supercomputers, even though I’m beginning to understand that they are not simply faster versions of the same thing.</p>
            <div className="revision"><RefreshCcw size={18} /><p><strong>A note to future me</strong>These are first impressions, not conclusions. Many-worlds is an interpretation, “being watched” means physical measurement rather than human attention, and a quantum computer is not just a very powerful classical computer.</p></div>

            <h2 id="rabbit-hole">Down the double-slit rabbit hole</h2>
            <p>My first real rabbit hole has been the double-slit experiment. Of everything I watched, <a href="https://www.youtube.com/watch?v=Cc6FJXMfhew" target="_blank" rel="noreferrer">Science ABC’s explanation of wave-particle duality</a> was the most helpful. The experiment is simple enough to describe and difficult enough to absorb: the pattern changes depending on whether information about the particle’s path is available.</p>
            <p>That gap—between being able to repeat the sentence and actually understanding what it means—feels like the place where the learning is going to happen.</p>

            <h2 id="teenager">The elusive teenager</h2>
            <p>Coming from the AI world, I have a natural inclination to anthropomorphize my technology. Right now, quantum particles feel a little like elusive teenagers: their behavior changes when you check on them, the adults disagree about what it all means, and nobody seems entirely sure what they’re doing when you’re not looking.</p>
            <blockquote>I know the metaphor breaks almost immediately. That may be exactly why it is useful to write it down.</blockquote>
            <p>The phrase “when you’re not looking” is already suspicious. It makes measurement sound psychological, as though a particle cares about a human observer. What I need to understand next is what physicists actually mean by observation, interaction, and information—and where those ideas differ.</p>

            <h2 id="bigger">Bigger than qubits</h2>
            <p>Something tells me I’m going to learn much more than qubits and superposition through this process. I’m going to learn about the limits of analogy, the difference between a model and reality, and how science handles questions that resist ordinary language.</p>
            <p>I may have arrived here through computing. But already, quantum feels like an invitation to look again at the rest of the world.</p>

            <div className="next-note"><span>Question I’m carrying forward</span><Link href="/questions">What does “observation” physically mean in quantum mechanics? <ArrowRight size={17} /></Link></div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="article-page shell">
      <Link href="/notes" className="back-link"><ArrowLeft size={16} /> All field notes</Link>
      <header>
        <p className="kicker">{note.eyebrow}</p>
        <h1>{note.title}</h1>
        <p className="article-dek">{note.description}</p>
        <div className="article-meta"><span>{note.date}</span><span>{note.readTime} read</span><span>Last revised Sep 19</span></div>
      </header>
      <div className={`article-figure ${note.color}`}><span>|0〉</span><div><i /><i /><b>ψ</b></div><span>|1〉</span><small>A state is not hiding a classical answer from us.</small></div>
      <div className="article-layout">
        <aside className="toc"><span>In this note</span><a href="#intuition">The tempting intuition</a><a href="#breaks">Where it breaks</a><a href="#working">My working model</a></aside>
        <div className="prose">
          <p className="lede">The first explanation many of us hear is that a classical bit is a coin lying heads or tails, while a qubit is a coin spinning in the air.</p>
          <h2 id="intuition">The tempting intuition</h2>
          <p>It is a friendly place to begin. Before measurement, we cannot point to one definite classical outcome. After measurement, we get one. The spinning coin gives our everyday brains something to hold.</p>
          <div className="callout"><Lightbulb size={20} /><p><strong>What the analogy gets right</strong>There is a meaningful difference between the state before measurement and the definite result we record afterward.</p></div>
          <h2 id="breaks">Where it quietly breaks</h2>
          <p>A spinning coin still has a definite physical orientation at every instant. We may not know it, but the coin does. A qubit’s state is not generally understood as a hidden classical value waiting for us to reveal it.</p>
          <p>The state also contains <em>phase</em>. Phase has no good equivalent in the coin story, yet it is what lets amplitudes interfere — reinforcing some outcomes and cancelling others. Lose phase and we lose much of what makes a quantum computation quantum.</p>
          <blockquote>Superposition is not just uncertainty about an answer. It is a state that can interfere with itself.</blockquote>
          <h2 id="working">My current working model</h2>
          <p>I picture a qubit as a direction in a two-dimensional complex space. The coefficients tell us how strongly the state points toward the basis states, and their relationship — including phase — determines what future operations can do.</p>
          <p>That is less instantly visual than a coin. It is also more honest. The Bloch sphere helps recover a picture, as long as we remember it is a map of state parameters, not a tiny ball physically rotating inside the machine.</p>
          <div className="revision"><RefreshCcw size={18} /><p><strong>Revision note</strong>I used to say “a qubit is both 0 and 1.” I now avoid that phrase because it hides amplitudes and encourages a classical either/or picture.</p></div>
          <div className="next-note"><span>Next connection</span><Link href="/notes/measurement-is-not-just-looking">Measurement is not just ‘looking’ <ArrowRight size={17} /></Link></div>
        </div>
      </div>
    </article>
  );
}
