"use client";
import { DOCS } from "@/lib/content";
import { motion } from "framer-motion";
export default function Documents(){
  return (
    <div>
      <h2 className="font-display text-2xl mb-6">Документы</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {DOCS.map(d => (
          <motion.a key={d.title} href={d.href} className="card p-5 block" initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.2}}>
            <h3 className="font-display font-semibold">{d.title}</h3>
            <p className="mt-1 text-sm">{d.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
