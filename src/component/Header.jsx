import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="nav">
        <div className="logo-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046753.png"
            alt="MessMate Logo"
            className="logo-img"
          />
          <h1 className="logo-text">Messmatic</h1>
        </div>
        <div className="nav-auth">
          <Link to="/login" className="auth-link">Login</Link>
          <Link to="/signup" className="auth-link signup">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}
