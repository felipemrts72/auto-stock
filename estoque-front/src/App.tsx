import {  Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ScanQR from "./pages/ScanQR";
import Audit from "./pages/Audit";
import { useAuth } from "./contexts/AuthContext";

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<ScanQR />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/auditoria"
          element={
            isAuthenticated ? <Audit /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </>
  );
};

export default App;