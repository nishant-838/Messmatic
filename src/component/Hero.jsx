export default function Hero({ onGetStarted }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Say Goodbye to Mess Hassles</h2>
        <p>View menus, rate meals, skip meals smartly, and help reduce waste — all from one app.</p>
        <a href="#" className="btn" onClick={onGetStarted}>Get Started</a>
      </div>
      <div className="hero-image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
          alt="MessMate App"
        />
      </div>
    </section>
  );
}
