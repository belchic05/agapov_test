"use client";
import { INTEGRATIONS } from "@/lib/content";
export default function Integrations(){
  return (
    <div>
      <h2 className="font-display text-2xl mb-6">Интеграции</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="text-left border-b" style={{borderColor:"var(--line)"}}><th className="py-2 pr-4">Категория</th><th className="py-2">Примеры</th></tr></thead>
            <tbody>
              {INTEGRATIONS.map((row,idx)=>(
                <tr key={idx} className="border-b" style={{borderColor:"var(--line)"}}>
                  <td className="py-2 pr-4">{row.cat}</td><td className="py-2">{row.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm mute">ERP/MES/PLM/SCM/ECM; сервисы обмена и шлюзы (REST, SOAP, файловый обмен). Поддерживаем staged‑интеграции и «песочницу».</p>
      </div>
    </div>
  )
}
