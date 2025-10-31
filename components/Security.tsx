"use client";
import { SECURITY } from "@/lib/content";
export default function Security(){
  return (
    <div>
      <h2 className="font-display text-2xl mb-6">Безопасность</h2>
      <ul className="list-disc pl-5 space-y-2 text-sm">
        {SECURITY.map(s => <li key={s}>{s}</li>)}
      </ul>
    </div>
  )
}
