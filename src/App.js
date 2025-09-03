import './App.css';
import Title from './components/Title';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Title />
      <main className="App-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
