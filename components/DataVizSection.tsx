
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'ML', value: 85 },
  { name: 'NLP', value: 75 },
  { name: 'Vision', value: 70 },
  { name: 'Big Data', value: 80 },
  { name: 'Statistiques', value: 95 },
  { name: 'Viz', value: 90 },
];

const COLORS = ['#38BDF8', '#818CF8', '#2DD4BF', '#F472B6', '#FB923C', '#A78BFA'];

const DataVizSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Focus <span className="gradient-text">Analytique</span></h2>
          <p className="text-slate-400">Répartition de mes domaines d'activité privilégiés.</p>
        </div>

        <div className="glass p-8 rounded-3xl h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #334155', borderRadius: '8px' }}
                itemStyle={{ color: '#F8FAFC' }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default DataVizSection;
