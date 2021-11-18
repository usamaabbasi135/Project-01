import logo from "./logo.svg";
import "./App.css";

function Hello({ name }) {
  return (
    <div className='App'>
      <p>This is paragraph in Hello component. {name}</p>
    </div>
  );
}

export default Hello;
