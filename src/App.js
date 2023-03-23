import logo from './logo.svg';
import './App.css';
import InputComponent from './components/InputComponent';
import RegisterForm from './components/RegisterForm';
import TextInputWithFocusButton from './components/useRefHook';

function App() {
  return (
    <div className="App">
      {/* <InputComponent /> */}
      {/* <RegisterForm /> */}
      <TextInputWithFocusButton />
    </div>
  );
}

export default App;
