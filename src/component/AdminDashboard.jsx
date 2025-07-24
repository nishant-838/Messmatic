export default function AdminDashboard() {
  const skippedMealsToday = 24;
  const feedbackCount = 8;
  const avgRating = 4.2;

  return (
    <div className="page-container">
      <h2>Admin Dashboard</h2>
      <p>View mess insights and manage submissions:</p>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><strong>🥗 Skipped Meals Today:</strong> {skippedMealsToday}</li>
        <li><strong>📝 Feedback Entries:</strong> {feedbackCount}</li>
        <li><strong>⭐ Average Meal Rating:</strong> {avgRating} / 5</li>
      </ul>

      <div style={{ marginTop: '2rem' }}>
        <p><em>(Coming soon: export data, student-wise reports, mess analytics)</em></p>
      </div>
    </div>
  );
}
