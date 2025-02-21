import React from 'react';
import { MetricsDisplay } from '@uprootiny/visualization/MetricsDisplay.jsx';

export const DataFlow = () => {
  return (
    <div className="data-flow">
      <h2>Data Pipeline Status</h2>
      <MetricsDisplay />
    </div>
  );
};
