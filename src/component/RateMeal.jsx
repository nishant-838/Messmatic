import { useState } from 'react';

export default function RateMeal() {
  const [meal, setMeal] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!meal || rating === 0) {
      setMessage('⚠️ Please select a meal and provide a rating.');
      return;
    }

    setMessage(`✅ Thank you! You rated ${meal} ${'⭐'.repeat(rating)}.`);
    setMeal('');
    setRating(0);
  };

  return (
    <div className="page-container">
      <h2>Rate Your Meal</h2>

      <label>
        Meal:
        <select value={meal} onChange={(e) => setMeal(e.target.value)}>
          <option value="">-- Select Meal --</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </label>

      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          <option value={0}>-- Select Rating --</option>
          <option value={1}>⭐</option>
          <option value={2}>⭐⭐</option>
          <option value={3}>⭐⭐⭐</option>
          <option value={4}>⭐⭐⭐⭐</option>
          <option value={5}>⭐⭐⭐⭐⭐</option>
        </select>
      </label>

      <button className="btn" onClick={handleSubmit}>Submit Rating</button>

      {message && <p className="form-msg" style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
}
