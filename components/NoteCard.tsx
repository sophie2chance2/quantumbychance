import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Note } from "@/data/content";

const statusLabels = { clearer: "clicking", "still-fuzzy": "still fuzzy", new: "new note" };

export default function NoteCard({ note }: { note: Note }) {
  return (
    <article className={`note-card ${note.color}`}>
      <div className="note-art" aria-hidden="true"><span /><i /><b>{note.color === "violet" ? "ψ" : note.color === "coral" ? "M" : note.color === "mint" ? "⊗" : "ε"}</b></div>
      <div className="note-body">
        <div className="note-meta"><span>{note.eyebrow}</span>{note.status && <small className={`status ${note.status}`}>● {statusLabels[note.status]}</small>}</div>
        <h3><Link href={`/notes/${note.slug}`}>{note.title}</Link></h3>
        <p>{note.description}</p>
        <div className="note-footer"><span>{note.date} · {note.readTime} read</span><Link href={`/notes/${note.slug}`} aria-label={`Read ${note.title}`}><ArrowUpRight size={18} /></Link></div>
      </div>
    </article>
  );
}
