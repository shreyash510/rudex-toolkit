import './App.css';
import ChangeColor from './component/ChangeColor';
import Login from './component/Login';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello world</h1> */}
      <Profile/>
      <Login/>
     <ChangeColor/>
    </div>
  );
}

export default App;
