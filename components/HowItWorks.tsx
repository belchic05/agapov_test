"use client";
import { motion } from "framer-motion";
function Bar({start,width}:{start:number;width:number}){
  return <div className="h-2 rounded-full bg-neutral-100 relative overflow-hidden">
    <span className="absolute top-0 h-2 rounded-full" style={{left:`${start}%`,width:`${width}%`,background:"linear-gradient(90deg,var(--accent-from),var(--accent-to))"}}/>
  </div>
}
export default function HowItWorks(){
  return (
    <div>
      <h2 className="font-display text-2xl mb-6">Как это работает</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <ol className="space-y-3 text-sm">
          <li><strong>Подключение данных</strong> из ИС исполнителей и ERP.</li>
          <li><strong>Настройка модулей</strong> — план‑факт, договоры, Гантт, контрактация.</li>
          <li><strong>Мониторинг/действия</strong> — таблица статусов, алерты, реестр причин отставаний.</li>
        </ol>
        <motion.div className="card p-5 space-y-3" initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.2}}>
          <div className="text-sm mute">Сборка</div><Bar start={10} width={40}/>
          <div className="text-sm mute">МТО</div><Bar start={30} width={30}/>
          <div className="text-sm mute">Контрактация</div><Bar start={20} width={50}/>
        </motion.div>
      </div>
    </div>
  )
}
