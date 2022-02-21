import DataGrid from 'react-data-grid';
import data from './data';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' }
];

const rows = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' }
];

function App() {
  return (
    <>
      <DataGrid columns={columns} rows={data} />;
    </>
  );
}

export default App;
