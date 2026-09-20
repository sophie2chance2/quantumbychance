"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const groups = [
  { href: "/learn", label: "Learning path", children: [["/learn", "Learning path overview"], ["/queue", "Next up"]] },
  { href: "/notes", label: "Thinking", children: [["/notes", "All thinking"], ["/experiments", "Experiments"], ["/questions", "Open questions"]] },
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
        {groups.map((group) => (
          <div className="nav-group" key={group.href}>
            <Link href={group.href} className={pathname === group.href || group.children.some(([href]) => pathname === href) ? "active" : ""} onClick={() => setOpen(false)}>{group.label} <ChevronDown size={12} /></Link>
            <div className="nav-submenu">
              {group.children.map(([href, label]) => <Link key={href} href={href} className={pathname === href ? "active-child" : ""} onClick={() => setOpen(false)}>{label}</Link>)}
            </div>
          </div>
        ))}
        <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={() => setOpen(false)}>About</Link>
      </nav>
    </header>
  );
}
