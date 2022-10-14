import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import UserList from "./Components/UserList";
import Details from "./Components/Details";
import Navigation from "./Components/Navigation"
function App() {
  return (
    <div className="App">
    <Navigation/>
    
      <Routes>
        
        <Route path="/Users" element={<UserList />}></Route>
        <Route path="/UserDetails/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
