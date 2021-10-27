import './App.css';
import { useFetchData } from './hooks/useRequest';
import { Pagination } from 'antd';
import { getPagingList } from './services/paging-api';
import PagingList from './components/PagingList';

function App() {
  const { data, loading, pagination } = useFetchData(getPagingList);

  return (
    <div className="App">
      <header className="App-header">
        {
          loading ?
            <p>loading</p> :
            <PagingList list={data!.list} />
        }
        <Pagination {...pagination} />
      </header>
    </div>
  );
}

export default App;
