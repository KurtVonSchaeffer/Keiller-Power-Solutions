/**
 * Partner brand SVG logos — faithful recreations of the official brand marks.
 * Usage: <PartnerLogo name="BYD" width={120} />
 */

const logos = {

  BYD: ({ w = 120, h = 60 }) => (
    <svg viewBox="0 0 120 60" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="30" rx="55" ry="25" fill="none" stroke="#CC0000" strokeWidth="3"/>
      <text x="60" y="38" textAnchor="middle" fontFamily="Arial Black, sans-serif"
        fontSize="24" fontWeight="900" fill="#CC0000" letterSpacing="2">BYD</text>
    </svg>
  ),

  'IBC Solar': ({ w = 120, h = 60 }) => (
    <svg viewBox="0 0 150 70" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="32" height="32" rx="3" fill="#CC1B1B"/>
      <rect x="36" y="0" width="32" height="32" rx="3" fill="#CC1B1B"/>
      <rect x="18" y="36" width="32" height="32" rx="3" fill="#CC1B1B"/>
      <text x="90" y="25" textAnchor="start" fontFamily="Arial Black, sans-serif"
        fontSize="22" fontWeight="900" fill="#1A1A1A" letterSpacing="1">IBC</text>
      <text x="90" y="55" textAnchor="start" fontFamily="Arial, sans-serif"
        fontSize="16" fontWeight="700" fill="#CC1B1B" letterSpacing="2">SOLAR</text>
    </svg>
  ),

  GoodWe: ({ w = 120, h = 50 }) => (
    <svg viewBox="0 0 160 50" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="38" fontFamily="Arial, sans-serif" fontSize="34" fontWeight="900"
        fill="#009F5D" letterSpacing="-1">GOODWE</text>
      <text x="0" y="50" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="400"
        fill="#888" letterSpacing="2">Smart Energy Controller</text>
    </svg>
  ),

  SolarMD: ({ w = 120, h = 60 }) => (
    <svg viewBox="0 0 130 60" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      {/* Star */}
      <polygon points="22,5 26,18 40,18 29,26 33,40 22,32 11,40 15,26 4,18 18,18"
        fill="#F5C518" stroke="#E6A800" strokeWidth="1"/>
      <text x="48" y="32" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="400"
        fill="#444">solar</text>
      <text x="101" y="32" fontFamily="Arial Black, sans-serif" fontSize="15" fontWeight="900"
        fill="#1A1A1A">MD</text>
      <text x="48" y="48" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="300"
        fill="#888" letterSpacing="0.5">smart energy solutions</text>
    </svg>
  ),

  Dyness: ({ w = 120, h = 50 }) => (
    <svg viewBox="0 0 130 50" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="22" height="8" rx="1" fill="#6AB023"/>
      <rect x="0" y="12" width="22" height="8" rx="1" fill="#6AB023"/>
      <rect x="0" y="24" width="22" height="8" rx="1" fill="#6AB023"/>
      <text x="30" y="35" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700"
        fill="#6AB023">dyness</text>
    </svg>
  ),

  SunSynk: ({ w = 130, h = 55 }) => (
    <svg viewBox="0 0 160 55" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      {/* Sun icon */}
      <circle cx="22" cy="27" r="11" fill="#F97316"/>
      <line x1="22" y1="5"  x2="22" y2="11" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="22" y1="43" x2="22" y2="49" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="44" y1="27" x2="38" y2="27" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="0"  y1="27" x2="6"  y2="27" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="37" y1="12" x2="33" y2="16" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
      <line x1="7"  y1="42" x2="11" y2="38" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
      <line x1="7"  y1="12" x2="11" y2="16" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
      <line x1="37" y1="42" x2="33" y2="38" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
      <text x="52" y="22" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700"
        fill="#F97316" letterSpacing="2">SUN</text>
      <text x="52" y="38" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700"
        fill="#F97316" letterSpacing="2">SYNK</text>
      <text x="52" y="50" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="300"
        fill="#999" letterSpacing="1">INVERTER</text>
    </svg>
  ),

  ATESS: ({ w = 120 }) => (
    <img src="/images/partners/atess.jpg" alt="ATESS" width={w} style={{ objectFit: 'contain', maxHeight: '50px' }} />
  ),

  'Canadian Solar': ({ w = 130 }) => (
    <img src="/images/partners/canadian.png" alt="Canadian Solar" width={w} style={{ objectFit: 'contain', maxHeight: '55px' }} />
  ),

  LONGi: ({ w = 120 }) => (
    <img src="/images/partners/longi.png" alt="LONGi" width={w} style={{ objectFit: 'contain', maxHeight: '50px' }} />
  ),

  'JA Solar': ({ w = 120 }) => (
    <img src="/images/partners/jasolar.png" alt="JA Solar" width={w} style={{ objectFit: 'contain', maxHeight: '55px' }} />
  ),

  GHTL: ({ w = 110 }) => (
    <img src="/images/partners/ghtl.png" alt="GHTL" width={w} style={{ objectFit: 'contain', maxHeight: '55px' }} />
  ),

  HUAWEI: ({ w = 130, h = 60 }) => (
    <svg viewBox="0 0 120 60" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      {/* HUAWEI Text */}
      <path d="M48.125 35.317h-2.45V24.564h2.45v4.357h5.452v-4.357h2.45v10.752h-2.45v-4.5h-5.452zm12.345-4.314c0 1.902.6 2.694 2.626 2.694s2.6-.8 2.6-2.694v-6.44h2.448v6.5c.126 1.013-.115 2.037-.68 2.887-.96 1.052-2.353 1.485-4.378 1.485s-3.436-.433-4.392-1.485c-.536-.578-.668-1.525-.668-2.887v-6.5h2.433zm15.683-6.44l4.96 10.753H78.4l-1.07-2.562h-5.06l-1.037 2.562H68.63l4.925-10.753zm-3.097 6.276h3.47l-1.767-4.132zM97.7 24.564l-3.6 10.752h-3L88.63 27.3l-2.17 8.027h-2.985l-3.877-10.752h2.63l2.7 8.266 2.27-8.266h2.887l2.608 8.266 2.513-8.266zm3.305 4.372h6.777V30.8h-6.8c.013 1.932.84 2.634 2.77 2.634h4.02v1.873h-4.134c-1.284.12-2.57-.213-3.632-.943a4.9 4.9 0 0 1-1.782-4.238c0-3.8 1.735-5.57 5.48-5.57h4.067v1.874h-4.02c-1.764-.001-2.655.806-2.755 2.498m8.944-4.364h2.56v10.753h-2.56z" fill="#000000"/>
      {/* Red Fan Icon */}
      <path d="M21.883 37.048c.036-.03.047-.08.028-.123a76.28 76.28 0 0 0-9.295-15.078s-2.92 2.77-2.713 5.55a4.91 4.91 0 0 0 1.693 3.346c2.547 2.483 8.715 5.617 10.15 6.326.045.025.102.016.138-.02m-.954 2.124a.14.14 0 0 0-.132-.094v-.002l-10.27.358c1.113 1.986 3 3.528 4.943 3.055 1.348-.337 4.404-2.468 5.4-3.187V39.3c.077-.07.05-.126.05-.126m.164-.924c.05-.08-.04-.15-.04-.15l.001-.004c-4.5-3.04-13.252-7.713-13.252-7.713a6.08 6.08 0 0 0 3.517 7.51 6.28 6.28 0 0 0 1.964.432c.154.03 6.108.003 7.702-.004.045-.005.085-.032.106-.072m.684-20.836c-.448.04-1.654.314-1.654.314-1.593.406-2.863 1.605-3.362 3.17a6.28 6.28 0 0 0 .014 3.257c.907 4.026 5.374 10.644 6.332 12.032.068.068.124.043.124.043.058-.014.098-.068.095-.128h.002c1.476-14.773-1.55-18.7-1.55-18.7m3.397 18.824c.056.023.12-.001.148-.055h.001c.986-1.426 5.425-8.007 6.327-12.016.27-1.068.276-2.186.017-3.257a4.77 4.77 0 0 0-3.394-3.17s-.785-.198-1.617-.315c0 0-3.044 3.918-1.564 18.7h.002c.001.05.032.095.08.112m2.43 2.864s-.1.012-.116.078c-.012.05.003.104.04.14.98.705 3.96 2.8 5.4 3.193 0 0 2.655.904 4.96-3.056l-10.282-.36zm13.02-8.728s-8.73 4.684-13.245 7.73a.14.14 0 0 0-.051.15s.043.077.106.077v.002l7.886-.02a6.14 6.14 0 0 0 1.768-.408c1.475-.578 2.662-1.714 3.306-3.162a6.21 6.21 0 0 0 .23-4.37m-14.07 6.7c.04.03.095.034.14.01 1.47-.734 7.593-3.847 10.128-6.317a4.95 4.95 0 0 0 1.692-3.361c.185-2.875-2.7-5.535-2.7-5.535a76.21 76.21 0 0 0-9.28 15.038h.003c-.027.055-.016.12.028.164" fill="#e12229" />
    </svg>
  ),

  SigenEnergy: ({ w = 140 }) => (
    <img src="/images/partners/sigenergy.png" alt="SigenEnergy" width={w} style={{ objectFit: 'contain', maxHeight: '55px' }} />
  ),

  Deye: ({ w = 120 }) => (
    <img src="/images/partners/deye.jpg" alt="Deye" width={w} style={{ objectFit: 'contain', maxHeight: '50px' }} />
  ),
};

export const PARTNER_LIST = [
  'BYD', 'IBC Solar', 'GoodWe', 'SolarMD', 'Dyness',
  'SunSynk', 'ATESS', 'Canadian Solar', 'LONGi', 'JA Solar',
  'GHTL', 'HUAWEI', 'SigenEnergy', 'Deye',
];

export const PARTNER_CATEGORIES = {
  'BYD':            { cat: 'Battery',  desc: "World's leading EV & energy storage manufacturer with best-in-class LFP battery technology." },
  'IBC Solar':      { cat: 'Solar',    desc: 'German solar pioneer with 40+ years of high-efficiency PV module manufacturing excellence.' },
  'GoodWe':         { cat: 'Inverter', desc: 'Globally trusted smart energy controller brand with hybrid inverter solutions for all scales.' },
  'SolarMD':        { cat: 'Battery',  desc: 'South African-designed modular battery systems built for the local energy landscape.' },
  'Dyness':         { cat: 'Battery',  desc: 'Premium residential and commercial lithium battery storage solutions with smart BMS.' },
  'SunSynk':        { cat: 'Inverter', desc: 'Hybrid inverter specialists offering seamless solar, battery, and grid integration.' },
  'ATESS':          { cat: 'Inverter', desc: 'Commercial-grade energy storage and power conversion systems for demanding applications.' },
  'Canadian Solar': { cat: 'Solar',    desc: "One of the world's largest solar PV manufacturers — Tier 1, bankable, and reliable." },
  'LONGi':          { cat: 'Solar',    desc: 'Global leader in high-efficiency monocrystalline solar modules and green energy innovation.' },
  'JA Solar':       { cat: 'Solar',    desc: 'High-performance mono-PERC panels with industry-leading efficiency and durability.' },
  'GHTL':           { cat: 'Solar',    desc: 'High-quality solar modules with consistent performance in South African conditions.' },
  'HUAWEI':         { cat: 'Inverter', desc: 'Smart string inverter technology with FusionSolar monitoring platform for all system sizes.' },
  'SigenEnergy':    { cat: 'Battery',  desc: 'All-in-one battery storage systems with advanced energy management and grid-tie ability.' },
  'Deye':           { cat: 'Inverter', desc: 'Versatile hybrid inverters trusted by installers across Africa for robust performance.' },
};

export default function PartnerLogo({ name, width, height }) {
  const Logo = logos[name];
  if (!Logo) return <span style={{fontWeight:700}}>{name}</span>;
  return <Logo w={width} h={height} />;
}
