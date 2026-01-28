export interface User {
  name: string;
  email: string;
  password: string;
}

const USERS_KEY = "users";
const TOKEN_KEY = "token";

export function getUsers(): User[] {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
}

export function register(user: User): boolean {
  const users = getUsers();

  const exists = users.some(u => u.email === user.email);
  if (exists) return false;

  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return true;
}

export function login(email: string, password: string): boolean {
  const users = getUsers();

  const found = users.find(
    u => u.email === email && u.password === password
  );

  if (!found) return false;

  localStorage.setItem(TOKEN_KEY, "fake-token");
  return true;
}

export function logout(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated(): boolean {
  return Boolean(localStorage.getItem(TOKEN_KEY));
}
export function getUserByEmail(email: string) {
  const users = getUsers();
  return users.find(u => u.email === email) || null;
}
