import './App.scss';

import Form from './Components/Form/Form';
import LoginPage from "./Components/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <LoginPage>
        <Form />
      </LoginPage>
    </div>
  );
}

export default App;
