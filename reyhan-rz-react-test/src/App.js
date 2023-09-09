import './App.css';
import ViewList from './Components/ViewList';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Welcome />
      <ViewList />
      <Footer />
    </div>
  );
}

export default App;
