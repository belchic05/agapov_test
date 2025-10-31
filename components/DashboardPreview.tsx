"use client";
import { ResponsiveContainer, CartesianGrid, Tooltip, XAxis, YAxis, LineChart as RLineChart, Line, BarChart, Bar, Legend } from "recharts";
import { motion } from "framer-motion";
const delays=[{week:'W1',delay:6},{week:'W2',delay:10},{week:'W3',delay:8},{week:'W4',delay:4},{week:'W5',delay:3}];
const contracts=[{stage:'К заключению',qty:30},{stage:'Заключены',qty:35},{stage:'Проавансированы',qty:25}];
export default function DashboardPreview(){
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <motion.div className="card p-5" initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.2}}>
        <h3 className="font-display font-semibold mb-3">Динамика отставаний</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <RLineChart data={delays}>
              <CartesianGrid stroke="#E6E6E6"/><XAxis dataKey="week"/><YAxis/><Tooltip/>
              <Line type="monotone" dataKey="delay" stroke="#222" strokeWidth={2} dot={false}/>
            </RLineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
      <motion.div className="card p-5" initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.2}}>
        <h3 className="font-display font-semibold mb-3">Сводка контрактов</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={contracts}>
              <CartesianGrid stroke="#E6E6E6"/><XAxis dataKey="stage"/><YAxis/><Tooltip/><Legend/>
              <Bar dataKey="qty" fill="#FFD93D"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  )
}
