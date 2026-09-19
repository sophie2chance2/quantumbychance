import type { Metadata } from "next";
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
      <section className="thesis-strip">
        <span>Current working thesis</span>
        <p>Quantum computing’s near-term story may be less about replacing classical machines and more about learning which representations nature lets us manipulate efficiently.</p>
        <small>Confidence: forming · Revised Sep 19</small>
      </section>
      <div className="filter-row" aria-label="Note filters"><button className="selected">All thinking</button><button>Working theses</button><button>Reactions</button><button>Changed my mind</button></div>
      <div className="notes-grid notes-all">{notes.map((note) => <NoteCard note={note} key={note.slug} />)}</div>
    </div>
  );
}
