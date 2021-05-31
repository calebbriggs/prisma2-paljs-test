import logo from "./logo.svg";
import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Test from "./Test";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Test />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
