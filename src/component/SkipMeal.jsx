import { useState } from 'react';

export default function SkipMeal() {
  const [meal, setMeal] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [message, setMessage] = useState('');

  const mealTimes = {
    breakfast: '08:00',
    lunch: '13:00',
    dinner: '20:00',
  };

  const handleSubmit = () => {
    if (!meal || !date) {
      setMessage('⚠️ Please select both meal and date.');
      return;
    }

    const selectedDateTime = new Date(`${date}T${mealTimes[meal]}`);
    const now = new Date();

    const diffInHours = (selectedDateTime - now) / (1000 * 60 * 60);

    if (diffInHours < 2) {
      setMessage(`❌ You must skip ${meal} at least 2 hours before.`);
    } else {
      setMessage(`✅ Successfully skipped ${meal} on ${date}.`);
    }
  };

  return (
    <div className="skip-meal-wrapper">
      <div className="skip-meal-card">
        <h2>Skip My Meal</h2>
        <p>Select a meal and date. Skipping helps reduce food waste & cost.</p>

        <label>
          Meal:
          <select value={meal} onChange={(e) => setMeal(e.target.value)}>
            <option value="">-- Select --</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </label>

        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <button className="btn" onClick={handleSubmit}>Submit</button>

        {message && (
          <p className={`skip-message ${message.startsWith('✅') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
