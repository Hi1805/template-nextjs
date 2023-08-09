'use client';
import BarChart from '@/components/BarChart/BarChart';
import { selectExamples } from '@/redux/example/example.selectors';
import { fetchExamples } from '@/redux/example/example.thunk';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import React, { useEffect } from 'react';
const Example = () => {
  const example = useAppSelector(selectExamples);
  console.log('example', example);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchExamples());
  }, []);
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

export default Example;
