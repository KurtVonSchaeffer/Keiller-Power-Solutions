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
          <KPLogo width={400} height={400} className="splash-logo-anim" />
        </div>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
}
