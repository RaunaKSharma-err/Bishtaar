import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Admin } from "./pages/admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
