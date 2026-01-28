import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/auth";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const success = register({ name, email, password });
    if (!success) {
      setError("Email já cadastrado");
      return;
    }

    navigate("/login");
  };

  return (
    <div className="page-center">
      <h2>Registro</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

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

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
