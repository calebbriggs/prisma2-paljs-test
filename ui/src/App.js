import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Test from "./Test";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <Test />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
