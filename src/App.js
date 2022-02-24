import DataGrid from 'react-data-grid';
import data from './data';
import { generateColumns, howManyByCountry } from './data-utils';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel, VictoryPie, VictoryLine } from 'victory';


function App() {
  const response = JSON.parse(JSON.stringify(data));
  const munged = howManyByCountry(response);
  const countryArr = [];
  const polarxy = [];

  function getxy() {
    for (let m of munged) {
      polarxy.push({ x: m.country, y: m.totalCount });
    }
    return polarxy;
  }

  function getCountries(){
    for (let m of munged) {
      countryArr.push({
        x: m.key + 1,
        y: m.totalCount,
        Label: `${m.totalCount} ${m.country}`
      });
    }
    return countryArr;
  }

  const countryNamesArr = [];
  function countryNames(){
    for (let m of munged) {
      countryNamesArr.push(m.country);
    }
    return countryNamesArr;
  }

  return (
    <>
      <DataGrid columns= {generateColumns(data)} rows={data} />;
      <VictoryChart domainPadding={20}>
        <VictoryLabel text='Total Number of Animals in Each Country' x={115} y={10}/>
        <VictoryAxis 
          tickValues={[0, 5, 10, 15, 20]}
          style={{
            axis: { stroke: '#E0F2F1' },
            axisLabel: { fontSize: 10 },
            ticks: { stroke: '#ccc' },
            tickLabels: { fontSize: 10, angle: 90, fill: 'lightPink', fontWeight: 'bold', padding: 20 }
          }}
        />  

        <VictoryAxis dependentAxis={true}
        />
        <VictoryBar data={howManyByCountry(data)} x='country' y='totalCount'/>
        
      </VictoryChart>

      <svg viewBox='0 0 450 450'>
        <VictoryPie 
          standalone={false}
          width={400} height={400}
          colorScale="warm"
          data={getCountries()}
          labels={countryNames()}
          style={{ labels: { margin: 0, fontSize: ({ text }) =>
            text.length > 10 ? 8 : 10 } }}
        
          labelPlacement={({ index }) => index + 1
            ? 'parallel'
            : 'vertical'
          }
        />
      </svg>
      

      <VictoryChart>
        <VictoryAxis 
          style={{
            axis: { stroke: '#E0F2F1' },
            axisLabel: { fontSize: 7 },
            ticks: { stroke: '#ccc' },
            tickLabels: {
              fontSize: 7,
              angle: -90,
              fontWeight: 'bold',
              textAnchor: 'bottom',
              
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{ tickLabels: { fontSize: 5 } }}
        />
        <VictoryLine data={getxy()}/>
      </VictoryChart>
    </>
  );
}

export default App;
