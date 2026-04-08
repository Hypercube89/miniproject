import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    
    <BrowserRouter>
      <div style={{ textAlign: "center" }}>
        <h1>React App</h1>

        {/* Navigation */}
        {/* <nav>
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </nav> */}

        <hr />
        

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Login />} />   
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;