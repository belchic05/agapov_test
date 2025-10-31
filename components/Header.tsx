"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { NAV } from "@/lib/content";

export default function Header(){
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b" style={{borderColor:"var(--line)"}}>
      <div className="container-12 flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Логотип" className="h-7 w-auto" />
          <span className="sr-only">OBA Platform</span>
        </Link>
        <nav className="hidden md:flex items-center gap-5">
          {NAV.map(i=> <a key={i.href} href={i.href} className="text-sm hover:underline">{i.label}</a>)}
        </nav>
        <motion.a href="#contact" className="btn btn-primary text-sm" initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{duration:.2}}>Запросить демо</motion.a>
      </div>
    </header>
  )
}
