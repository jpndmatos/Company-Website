"use client";
import React, { useEffect, useState } from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
export default function Header() {
 const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
 const [dark,setDark]=useState(false);
 useEffect(()=>{const saved=localStorage.getItem('doppel-mode'); const mode=saved || (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'); document.documentElement.dataset.mode=mode;setDark(mode==='dark');},[]);
 function toggle(){const next=!dark;setDark(next);document.documentElement.dataset.mode=next?'dark':'light';localStorage.setItem('doppel-mode',next?'dark':'light');}
 return <header className="site-header"><div className="header-inner"><Link href="#Doppel" className="wordmark" aria-label="Doppel home">doppel</Link><nav aria-label="Main navigation"><ul>{links.map(link=><li key={link.hash}><Link aria-current={activeSection===link.name?'location':undefined} href={link.hash} onClick={()=>{setActiveSection(link.name);setTimeOfLastClick(Date.now());}}>{link.name}</Link></li>)}</ul></nav><button type="button" className="theme-button" onClick={toggle} aria-pressed={dark}>{dark?'Light':'Dark'}</button></div></header>;
}
