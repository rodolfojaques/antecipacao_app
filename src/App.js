import './App.css';
import { Home } from './pages/home';
import { CardProvider } from './providers/card';

function App() {
  return (
    <CardProvider>
      <div className="App">
        <Home/>
      </div>      
    </CardProvider>

  );
}

export default App;
