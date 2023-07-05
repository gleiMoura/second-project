import Home from "./template/Home";
import ContextComponent from "./context/CreatingContext";

function App() {
  return (
    <ContextComponent>
      <Home />
    </ContextComponent>
  )
}

export default App
