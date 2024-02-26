import logo from './logo.svg';
import './App.css';
import xxx from "css-wrapper-xxx";
console.log(xxx);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
			Typeof xxx.adobe : {typeof xxx.adobe}<br/>
			Valueof xxx.adobe : {xxx.adobe}<br/>
			Typeof xxx.lodash : {typeof xxx.lodash}<br/>
			Valueof xxx.lodash : {xxx.lodash.toString()}<br/>
        </p>
      </header>
    </div>
  );
}

export default App;
