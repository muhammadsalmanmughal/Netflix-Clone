import "./App.css";
import { Button } from "antd";
import { LoginHome } from "./containers";
import { AuthRoutes } from "./config";

function App() {
  return (
    <div className="App">
      <AuthRoutes />
    </div>
  );
}

export default App;
