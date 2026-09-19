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
