import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { login as loginService, getUserByEmail } from "../services/auth";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const success = loginService(email, password);
    if (!success) {
      setError("Email ou senha inválidos");
      return;
    }

    const user = getUserByEmail(email);
    login(user?.name || "Usuário");

    navigate("/auditoria");
  };

  return (
    <div className="page-center">
      <h2>Login</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        {error && <span className="error">{error}</span>}

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
