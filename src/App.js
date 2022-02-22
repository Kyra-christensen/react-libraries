import DataGrid from 'react-data-grid';
import data from './data';
import { generateColumns, howManyByCountry } from './data-utils';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

function App() {
  return (
    <>
      <DataGrid columns= {generateColumns(data)} rows={data} />;
      <VictoryChart domainPadding={20}>
        <VictoryAxis 
          tickValues={[0, 5, 10, 15, 20]}
          style={{
            axis: { stroke: '#E0F2F1' },
            axisLabel: { fontSize: 16 },
            ticks: { stroke: '#ccc' },
            tickLabels: { fontSize: 10, angle: 90, fill: 'lightPink', fontWeight: 'bold', verticalAnchor: 'bottom' }
          }}
        />  

        <VictoryAxis dependentAxis/>
        <VictoryBar data={howManyByCountry(data)} x='country' y='totalCount'/>
      </VictoryChart>
    </>
  );
}

export default App;
