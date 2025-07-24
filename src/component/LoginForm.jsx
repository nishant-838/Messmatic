export default function LoginForm({ visible, closeForm, onLogin, message }) {
  if (!visible) return null;

  return (
    <div className="popup-form">
      <span className="close-btn" onClick={closeForm}>❌</span>
      <h2>Login</h2>
      {message && <p className="form-msg">{message}</p>}
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={onLogin}>Login</button>
    </div>
  );
}
