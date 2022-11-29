import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { CarsProvider } from './context/Cars';
import { EditModeProvider } from './context/EditMode';

const App = () => {
  return (
    <div className='App container'>
      <CarsProvider>
        <EditModeProvider>
          <Form />
          <Table />
        </EditModeProvider>
      </CarsProvider>
    </div>
  );
};

export default App;
