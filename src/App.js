import DataGrid from 'react-data-grid';
import data from './data';
import { generateColumns } from './data-utils';

function App() {
  return (
    <>
      <DataGrid columns= {generateColumns(data)} rows={data} />;
    </>
  );
}

export default App;
