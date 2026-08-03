import { login } from "../../actions";

export default function LoginPage() {
  return (
    <div className="admin-login">
      <h2>Вход в панель управления</h2>
      <form action={login} className="admin-form">
        <label>
          Пароль:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
