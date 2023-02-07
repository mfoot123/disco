import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login"
import Dashboard from "./Dashboard"

// get the code portion of our URL
const code = new URLSearchParams(window.location.search).get("code")

function App() {
  // if we have a code, render our dashboard
  // else, display our login screen
  return code ? <Dashboard code={code} /> :<Login />
}

export default App;
