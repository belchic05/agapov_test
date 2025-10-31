"use client";
import { STAKEHOLDERS } from "@/lib/content";
import { useState } from "react";
import { motion } from "framer-motion";
export default function StakeholdersTabs(){
  const [key, setKey] = useState(STAKEHOLDERS[0].key);
  const active = STAKEHOLDERS.find(s => s.key === key)!;
  return (
    <div>
      <h2 className="font-display text-2xl mb-4">Решения</h2>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-1 flex md:flex-col gap-2 overflow-x-auto">
          {STAKEHOLDERS.map(s => (
            <button key={s.key} onClick={()=>setKey(s.key)} className={`btn btn-ghost whitespace-nowrap ${key===s.key ? "ring-2 ring-[color:var(--accent-to)]":""}`}>
              {s.label}
            </button>
          ))}
        </div>
        <motion.div key={active.key} className="md:col-span-3 card p-6" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.2}}>
          <ul className="space-y-2 list-disc pl-5">
            {active.points.map(p => <li key={p} className="text-sm">{p}</li>)}
          </ul>
          <div className="mt-4"><a href="#contact" className="btn btn-primary">{active.cta}</a></div>
        </motion.div>
      </div>
    </div>
  )
}
