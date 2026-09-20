import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Beaker, CircleHelp } from "lucide-react";
import NoteCard from "@/components/NoteCard";
import { notes } from "@/data/content";

export const metadata: Metadata = { title: "Field notes" };

export default function NotesPage() {
  return (
    <div className="shell inner-page">
      <header className="page-hero compact">
        <p className="kicker">Thinking in progress</p>
        <h1>What I think,<br /><em>for now.</em></h1>
        <p>Reactions, working theses, and changed minds from the learning process. Each note keeps its uncertainty visible—and earns the right to evolve.</p>
      </header>
      <div className="thinking-branches">
        <Link href="/experiments"><Beaker size={20} /><span><small>Thinking through evidence</small><strong>Interesting experiments</strong></span><ArrowRight size={17} /></Link>
        <Link href="/questions"><CircleHelp size={20} /><span><small>Thinking through uncertainty</small><strong>Open questions</strong></span><ArrowRight size={17} /></Link>
      </div>
      <div className="notes-grid notes-all">{notes.map((note) => <NoteCard note={note} key={note.slug} />)}</div>
    </div>
  );
}
