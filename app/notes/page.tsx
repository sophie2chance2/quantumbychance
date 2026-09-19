import type { Metadata } from "next";
import NoteCard from "@/components/NoteCard";
import { notes } from "@/data/content";

export const metadata: Metadata = { title: "Field notes" };

export default function NotesPage() {
  return (
    <div className="shell inner-page">
      <header className="page-hero compact">
        <p className="kicker">The notebook</p>
        <h1>Ideas in progress.<br /><em>Mess included.</em></h1>
        <p>Notes change as my understanding changes. Labels show what’s clicking, what’s fresh, and what’s still stubbornly fuzzy.</p>
      </header>
      <div className="filter-row" aria-label="Note filters"><button className="selected">All notes</button><button>Mental models</button><button>Field notes</button><button>Dispatches</button></div>
      <div className="notes-grid notes-all">{notes.map((note) => <NoteCard note={note} key={note.slug} />)}</div>
    </div>
  );
}
