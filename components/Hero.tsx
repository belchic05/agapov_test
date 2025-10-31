"use client";
import { HERO } from "@/lib/content";
import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section className="section pt-16 md:pt-24" id="home">
      <div className="container-12">
        <motion.h1 className="font-display text-4xl md:text-5xl leading-tight max-w-5xl" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.2}}>
          {HERO.title}
        </motion.h1>
        <p className="mt-4 text-lg md:max-w-3xl">{HERO.subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="#contact">{HERO.ctas.primary}</a>
          <a className="btn btn-ghost" href="/one-pager.pdf" download>{HERO.ctas.ghost}</a>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-2xl">
          {HERO.metrics.map(m=> (
            <div key={m.label} className="card p-4 text-center">
              <div className="kpi text-2xl">{m.value}</div>
              <div className="text-sm mute">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
