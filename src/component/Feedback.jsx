import { useState } from 'react';

export default function Feedback() {
  const [type, setType] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!type || !text.trim()) {
      setMessage('⚠️ Please select a type and write your message.');
      return;
    }

    // Simulate submission logic
    setMessage('✅ Feedback submitted successfully.');
    setType('');
    setText('');
  };

  return (
    <div className="page-container">
      <h2>Submit Feedback</h2>

      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">-- Select Type --</option>
          <option value="suggestion">Suggestion</option>
          <option value="complaint">Complaint</option>
        </select>
      </label>

      <label>
        Message:
        <textarea
          rows="5"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your message..."
        />
      </label>

      <button className="btn" onClick={handleSubmit}>Submit</button>

      {message && (
        <p className="form-msg" style={{ marginTop: '1rem' }}>
          {message}
        </p>
      )}
    </div>
  );
}
