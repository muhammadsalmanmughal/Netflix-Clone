import './App.css';
import { Button } from 'antd';
import {Navbar} from './components'

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Button type="primary">
        Primary
      </Button>
    </div>
  );
}

export default App;
