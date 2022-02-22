import DataGrid from 'react-data-grid';
import data from './data';
import { generateColumns, howManyByCountry } from './data-utils';
import { VictoryBar } from 'victory';

function App() {
  return (
    <>
      <DataGrid columns= {generateColumns(data)} rows={data} />;

      <VictoryBar data={howManyByCountry(data)} />
    </>
  );
}

export default App;
