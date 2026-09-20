import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookMarked, BookOpen, Check, FlaskConical, Sigma } from "lucide-react";
import { pathSteps } from "@/data/content";

export const metadata: Metadata = { title: "Start learning" };

export default function LearnPage() {
  return (
    <div className="shell inner-page">
      <header className="page-hero compact">
        <p className="kicker">Start here</p>
        <h1>A path into quantum<br /><em>without pretending it’s easy.</em></h1>
        <p>Five stops. Each one adds a useful layer, marks the shortcuts, and leaves room for the things that remain weird.</p>
      </header>
      <div className="principles-row">
        <div><BookOpen size={20} /><span><strong>Plain language first</strong>Equations arrive with a reason.</span></div>
        <div><FlaskConical size={20} /><span><strong>Intuition, then testing</strong>Mental models are tools, not truth.</span></div>
        <div><Sigma size={20} /><span><strong>Math when useful</strong>Enough rigor to spot the hand-waving.</span></div>
      </div>
      <Link href="/queue" className="nested-route-card">
        <BookMarked size={22} />
        <span><small>Within the learning path</small><strong>See what I’m reading and watching next</strong><p>A deliberately small queue, with a reason for every item.</p></span>
        <ArrowRight size={19} />
      </Link>
      <section className="learning-path">
        {pathSteps.map((step, index) => (
          <article className="learning-step" key={step.number}>
            <div className="step-marker"><span>{step.number}</span><i /></div>
            <div className="step-main">
              <p className="kicker">{step.label}</p>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
              <div className="youll-learn"><strong>We’ll make sense of</strong><span><Check size={14} /> {[
                "What quantum computers are actually for",
                "States, amplitudes, and the Bloch sphere",
                "Gates, interference, and correlations",
                "Decoherence and fault tolerance",
                "Speedups, evidence, and honest unknowns",
              ][index]}</span></div>
              <Link className="text-link" href={index === 0 ? "/notes/qubits-are-not-spinning-coins" : "/notes"}>{index === 0 ? "Begin here" : "Preview the notes"} <ArrowRight size={16} /></Link>
            </div>
            <div className={`step-visual visual-${index + 1}`} aria-hidden="true"><span>{["Q?", "|ψ〉", "H→⊕", "ε≈0", "∑ ?"][index]}</span></div>
          </article>
        ))}
      </section>
    </div>
  );
}
