import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, ReferenceLine } from 'recharts';
import { Gen } from '../types';

interface QualityChartProps {
    allGens: Gen[];
    selectedGens: Gen[];
}

const processChartData = (allGens: Gen[], selectedGens: Gen[]) => {
    const categories = ['Refurbish', 'Baja', 'Media', 'Alta'];
    const colors = {
        'Refurbish': '#6d7bac',
        'Baja': '#c8437a',
        'Media': '#fad201',
        'Alta': '#4cad9e',
    };

    return categories.map(category => {
        const gensInCat = allGens.filter(g => g.category === category);
        const selectedInCat = selectedGens.filter(g => g.category === category);

        return {
            name: category,
            totalQuality: gensInCat.reduce((sum, g) => sum + g.quality, 0) * 1000,
            usedQuality: selectedInCat.reduce((sum, g) => sum + g.quality, 0) * 1000,
            genCount: gensInCat.length,
            fill: colors[category as keyof typeof colors],
        };
    });
};

export const QualityChart: React.FC<QualityChartProps> = ({ allGens, selectedGens }) => {
    const chartData = processChartData(allGens, selectedGens);
    const maxQuality = Math.max(...chartData.map(d => d.totalQuality)) * 1.1;

    return (
        <div style={{ width: '100%', height: 180 }}>
            <ResponsiveContainer>
                <BarChart data={chartData} margin={{ top: 15, right: 20, left: 10, bottom: 0 }} barCategoryGap="0%">
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
                    <YAxis 
                        tickFormatter={(value) => `${value / 1000000}M`}
                        domain={[0, maxQuality]}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 11 }}
                        width={40}
                    />
                    <Tooltip
                        contentStyle={{ fontSize: '12px', padding: '5px' }}
                        formatter={(value: number) => value.toLocaleString('es-ES')}
                        cursor={{fill: 'rgba(240, 240, 240, 0.5)'}}
                    />
                    
                    {chartData.map((entry, index) => (
                        entry.usedQuality > 0 && (
                             <ReferenceLine 
                                key={`ref-${index}`}
                                y={entry.usedQuality} 
                                stroke={entry.fill}
                                strokeDasharray="2 2"
                                strokeWidth={1.5}
                             />
                        )
                    ))}

                    <Bar dataKey="totalQuality" radius={[4, 4, 0, 0]}>
                         <LabelList dataKey="genCount" position="insideTop" fill="#fff" fontSize={12} formatter={(value: number) => `Gen ${value}`} />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};