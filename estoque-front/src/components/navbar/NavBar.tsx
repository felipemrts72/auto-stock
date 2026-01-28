import { useAuth } from "../../contexts/AuthContext";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const { isAuthenticated, userName, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-right">
        {!isAuthenticated ? (
          <>
            <a href="/login" className="nav-btn">Login</a>
            <a href="/register" className="nav-btn outline">Registrar</a>
          </>
        ) : (
          <>
            <span className="user-name">{userName}</span>
            <button className="nav-btn logout" onClick={logout}>
              Sair
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
