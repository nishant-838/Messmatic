import { useState } from 'react';
import { QrReader } from 'react-qr-reader'; // ✅ correct


export default function ScanQRCode() {
  const [result, setResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="page-container" style={{ textAlign: 'center' }}>
      <h2>Scan Mess QR Code</h2>

      {!result ? (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      ) : (
        <div className="tick-screen">
          <div className={`tick-icon ${result.includes('nonveg') ? 'red' : 'green'}`}>
            {result.includes('nonveg') ? '❌' : '✅'}
          </div>
          <h3>
            {result.includes('nonveg')
              ? 'Non-Veg Meal Confirmed'
              : 'Veg Meal Confirmed'}
          </h3>
        </div>
      )}
    </div>
  );
}
