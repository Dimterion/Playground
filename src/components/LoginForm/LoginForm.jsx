import "./loginForm.css";

export default function LoginForm() {
  return (
    <div className="loginForm-container">
      <h1 className="loginForm-title">Log in</h1>
      <form className="loginForm-form">
        <div className="loginForm-inputGroup loginForm-success">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <span className="loginForm-msg">Valid email</span>
        </div>
        <div className="loginForm-inputGroup loginForm-error">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <span className="loginForm-msg">Incorrect password</span>
        </div>
        <button type="submit" className="loginForm-submitBtn">
          Log in
        </button>
      </form>
    </div>
  );
}
