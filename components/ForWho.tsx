"use client";
import { FORWHO } from "@/lib/content";
import { motion } from "framer-motion";

export default function ForWho(){
  return (
    <div>
      <h2 className="font-display text-2xl mb-6">Для кого мы</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {FORWHO.map(card => (
          <motion.div key={card.title} className="card p-5" initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.2}}>
            <h3 className="font-display font-semibold">{card.title}</h3>
            <p className="mt-1 text-sm">{card.text}</p>
            <a href="#platform" className="btn btn-ghost mt-3">{card.cta}</a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
