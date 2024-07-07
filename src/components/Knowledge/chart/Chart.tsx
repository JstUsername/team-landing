import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { chartConfig, data } from '../constants';

const Chart: FC = () => {
  const plugin = {
    id: 'increase-legend-spacing',
    beforeInit(chart: any) {
      const originalFit = chart.legend.fit;
      chart.legend.fit = function fit() {
        originalFit.bind(chart.legend)();
        this.height += 16;
      };
    },
  };

  return <Line height={200} data={data} plugins={[plugin]} options={chartConfig} />;
};

export default Chart;
