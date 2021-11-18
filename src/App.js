import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";

function App(props) {
  const { name, age } = props;
  return (
    <div className='App'>
      <Hello name={name} />
      <h1>
        Hello World {name}. Age = {age - 10}
      </h1>
    </div>
  );
}

export default App;
