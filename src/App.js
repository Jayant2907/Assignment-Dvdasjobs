import './App.css';
import SignupForm from './Components/SignupForm/SignupForm';
import yahoo from "./images/yahoo.jpg"

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={yahoo} className="yahoo-logo" alt="yahoo" />
        <h3>Help</h3>
      </div>
      <div className="content">
        <SignupForm/>
        

      </div>
    </div>
  );
}

export default App;
