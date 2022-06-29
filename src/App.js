import style from './App.module.css';
import FlightForm from './components/Flights/FlightForm';

function App() {
  return (
    <div className={style.app}>
      <FlightForm />
    </div>
  );
}

export default App;
