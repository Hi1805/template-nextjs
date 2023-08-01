import BarChart from '@/components/BarChart/BarChart';

const example = () => {
  return (
    <BarChart
      dataBar1={[1, 2, 3, 5]}
      dataBar2={[1, 2, 3, 5]}
      dataLine={[9, 8, 7, 6]}
      labels={['hello', 'world']}
    />
  );
};

export default example;
