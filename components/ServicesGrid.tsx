"use client";
import { SERVICES } from "@/lib/content";
import { motion } from "framer-motion";
import { LineChart, FileSpreadsheet, AlarmClock, Waypoints, Handshake, Layers3 } from "lucide-react";
const ICONS=[LineChart,FileSpreadsheet,AlarmClock,Waypoints,Handshake,Layers3];
export default function ServicesGrid(){
  return (
    <div>
      <h2 className="font-display text-2xl mb-6">Модули платформы</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {SERVICES.map((s,i)=>{
          const Icon=ICONS[i%ICONS.length];
          return (
            <motion.div key={s.title} className="card p-5" initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.2}}>
              <Icon className="w-5 h-5 mb-3" />
              <h3 className="font-display font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm">{s.text}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
