import './App.css';
import ViewList from './Components/ViewList';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Welcome />
      <ViewList />

    </div>
  );
}

export default App;
