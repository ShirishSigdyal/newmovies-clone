import "./App.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <Navbar />
        <div className="body-wrapper">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
