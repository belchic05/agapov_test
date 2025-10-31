"use client";
import { FAQ as DATA } from "@/lib/content";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
export default function FAQ(){
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      <h2 className="font-display text-2xl mb-6">FAQ</h2>
      <div className="divide-y" style={{borderColor:"var(--line)"}}>
        {DATA.map((item,i)=>{
          const expanded=open===i;
          return (
            <div key={i}>
              <button className="w-full flex items-center justify-between py-4 text-left" onClick={()=>setOpen(expanded?null:i)}>
                <span className="font-medium">{item.q}</span>
                <ChevronDown className={`w-5 h-5 transition ${expanded?'rotate-180':''}`} />
              </button>
              <motion.div initial={false} animate={{height:expanded?'auto':0,opacity:expanded?1:0}} transition={{duration:.2}} className="overflow-hidden">
                <div className="pb-4 text-sm">{item.a}</div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
