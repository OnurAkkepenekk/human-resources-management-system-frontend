import "./App.css";
import Navi from "./layouts/Navi.jsx";
import Dashboard from "./layouts/Dashboard";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
function App() {
  return (
    <div className="App main-background">
      <Navi></Navi>
      <Dashboard />
    </div>
  );
}

export default App;
