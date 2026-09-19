import Link from "next/link";
import { Code2, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer-mark">Q<span>·</span>C</p>
        <p>Made while learning, not after mastering.</p>
      </div>
      <div className="footer-links">
        <Link href="/about">About this project</Link>
        <a href="https://github.com/sophie2chance2/quantumbychance" target="_blank" rel="noreferrer"><Code2 size={16} /> View source <ArrowUpRight size={14} /></a>
      </div>
    </footer>
  );
}
