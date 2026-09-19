import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="shell inner-page about-page">
      <header className="page-hero compact">
        <p className="kicker">About this experiment</p>
        <h1>I don’t know yet.<br /><em>That’s the point.</em></h1>
      </header>
      <div className="about-grid">
        <article className="about-story">
          <p className="lede">Quantum by Chance is my attempt to learn a difficult subject without hiding the learning process.</p>
          <p>The internet is full of finished explanations: the clean summary, the confident thread, the diagram where every arrow behaves. They’re useful. But they can make it hard to see how understanding actually forms — unevenly, through wrong turns, revised metaphors, and questions that get better before they get answered.</p>
          <p>So this is a public field notebook. I’ll share what clicks, name what doesn’t, trace claims back to evidence, and revise old notes when my thinking changes.</p>
          <blockquote>“Understanding is not a binary state. It is a practice.”</blockquote>
          <h2>What you can expect</h2>
          <ul>
            <li>Plain-language explanations that admit where analogies break</li>
            <li>Enough math to make the ideas more precise, never just more impressive</li>
            <li>Open questions separated from things I personally haven’t learned yet</li>
            <li>Visible revisions, sources, and uncertainty</li>
          </ul>
        </article>
        <aside className="about-aside">
          <div className="portrait-placeholder"><span>S</span><i>learning<br />in public</i></div>
          <p className="hand-note">Hi, I’m Sophie.</p>
          <p>I’m following curiosity into the quantum world and making the map I wish I had at the start.</p>
          <Link href="/learn" className="button button-primary">Learn alongside me <ArrowRight size={16} /></Link>
          <a className="github-link" href="https://github.com/sophie2chance2/quantumbychance" target="_blank" rel="noreferrer"><Code2 size={16} /> This site is open source</a>
        </aside>
      </div>
    </div>
  );
}
