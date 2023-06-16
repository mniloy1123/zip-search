import Zipsearch from './components/zipsearch';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <label>
        Zip Code: <input name="zipcode" />
      </label> */}
      <Zipsearch zipcode={11235} />
    </div>
  );
}

export default App;

