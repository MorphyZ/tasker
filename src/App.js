import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container';

function App() {
  return (
    <div>
      <header>
        <h1>
          Менеджер задач
        </h1>
      </header>

      <main>
        <Container />
      </main>
    </div>
  );
}

export default App;
