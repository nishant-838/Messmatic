export default function Balance() {
  const mockBalance = 1050.00; // This can later come from backend or API

  return (
    <div className="page-container">
      <h2>Mess Card Balance</h2>
      <p>Your current balance is:</p>
      <div style={{
        marginTop: '1rem',
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: '#0284c7'
      }}>
        ₹{mockBalance.toFixed(2)}
      </div>
    </div>
  );
}
