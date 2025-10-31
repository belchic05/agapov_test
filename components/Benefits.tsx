"use client";
import { BENEFITS } from "@/lib/content";
import { motion } from "framer-motion";
export default function Benefits(){
  return (
    <div>
      <h2 className="font-display text-2xl mb-6">Что даёт сотрудничество</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {BENEFITS.map(b => (
          <motion.div key={b.title} className="card p-5" initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.2}}>
            <h3 className="font-display font-semibold">{b.title}</h3>
            <p className="mt-1 text-sm">{b.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
