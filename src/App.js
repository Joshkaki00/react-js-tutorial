import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
