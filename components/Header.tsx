"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["/learn", "Learning path"],
  ["/queue", "Next up"],
  ["/notes", "Thinking"],
  ["/experiments", "Experiments"],
  ["/questions", "Questions"],
  ["/about", "About"],
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Quantum by Chance home">
        <span className="brand-mark" aria-hidden="true"><i /><i /></span>
        <span>Quantum <em>by Chance</em></span>
      </Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={open ? "nav-open" : ""}>
        {links.map(([href, label]) => (
          <Link key={href} href={href} className={pathname === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
