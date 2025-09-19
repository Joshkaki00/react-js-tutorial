import './App.css';
import Title from './components/Title';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Title />
      <main id="main-content" className="App-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
