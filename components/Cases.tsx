"use client";
import { CASES } from "@/lib/content";
import { motion } from "framer-motion";
export default function Cases(){
  return (
    <div>
      <h2 className="font-display text-2xl mb-6">Кейсы</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {CASES.map(c => (
          <motion.article key={c.title} className="card p-5" initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.2}}>
            <h3 className="font-display font-semibold">{c.title}</h3>
            <p className="text-sm mt-2"><span className="font-medium">Задача:</span> {c.task}</p>
            <p className="text-sm"><span className="font-medium">Решение:</span> {c.solution}</p>
            <p className="kpi mt-2">{c.kpi}</p>
            <a href="#contact" className="btn btn-ghost mt-3">Подробнее</a>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
