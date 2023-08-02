
import BarChart from '@/components/BarChart/BarChart';
import React from 'react';
const example = () => {
  return (
    <div>
      <BarChart
        dataBar1={[1, 2, 3, 4]}
        dataLine={[5, 6, 7, 8, 9]}
        dataBar2={[1, 2, 3, 6]}
        labels={['hello', 'world']}
      />
    </div>
  );
};

export default example;
