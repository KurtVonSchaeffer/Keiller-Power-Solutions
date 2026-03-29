import { useState, useEffect } from 'react';
import KPLogo from './KPLogo';
import './Splash.css';

export default function Splash() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="splash-overlay">
      <div className="splash__content">
        <div className="splash__logo">
          <KPLogo variant="white" width={360} height={360} className="splash-logo-anim" />
        </div>
        <h1 className="splash__title">KP SOLUTIONS</h1>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
}
