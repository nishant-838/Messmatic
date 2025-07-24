import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <section className="features">
      <h3>Core Features</h3>
      <div className="features-grid">
        <Link to="/menu" className="feature-box">
          <h4>📅 Daily Menu</h4>
          <p>Check what's cooking today before heading to the mess.</p>
        </Link>

        <Link to="/skip-meal" className="feature-box">
          <h4>✅ Skip My Meal</h4>
          <p>Let the mess know in advance if you're not eating — save food, save money.</p>
        </Link>

        <Link to="/rate" className="feature-box">
          <h4>⭐ Rate Meals</h4>
          <p>Rate the food and view what others think too.</p>
        </Link>

        <Link to="/feedback" className="feature-box">
          <h4>📢 Feedback</h4>
          <p>Submit complaints or suggestions with full transparency.</p>
        </Link>

        <Link to="/balance" className="feature-box">
          <h4>🧾 Mess Card Balance</h4>
          <p>Check your current mess card balance easily.</p>
        </Link>

        <Link to="/admin" className="feature-box">
          <h4>📊 Admin Dashboard</h4>
          <p>Manage skips, feedback, and ratings from one place.</p>
        </Link>
      </div>
    </section>
  );
}
