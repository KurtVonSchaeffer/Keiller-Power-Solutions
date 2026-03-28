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

  ATESS: ({ w = 120, h = 50 }) => (
    <svg viewBox="0 0 140 50" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      {/* Flame/drop icon */}
      <path d="M14 6 C14 6 5 15 5 26 C5 33 9 40 14 40 C19 40 23 33 23 26 C23 15 14 6 14 6Z"
        fill="#F97316"/>
      <path d="M14 22 C14 22 10 28 10 32 C10 36 12 39 14 39 C16 39 18 36 18 32 C18 28 14 22 14 22Z"
        fill="#fff"/>
      <text x="32" y="34" fontFamily="Arial Black, sans-serif" fontSize="26" fontWeight="900"
        fill="#F97316" letterSpacing="1">ATESS</text>
    </svg>
  ),

  'Canadian Solar': ({ w = 130, h = 55 }) => (
    <svg viewBox="0 0 160 55" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      {/* CSI logo mark */}
      <polygon points="12,5 22,5 12,25 22,25" fill="#F97316"/>
      <polygon points="22,5 30,5 30,25 22,25 28,15" fill="#CC0000"/>
      <text x="36" y="22" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="900"
        fill="#CC0000">Canadian</text>
      <text x="36" y="38" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="900"
        fill="#F97316">Solar</text>
      <line x1="36" y1="43" x2="136" y2="43" stroke="#eee" strokeWidth="1"/>
      <text x="36" y="52" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="300"
        fill="#aaa" letterSpacing="1">A GLOBAL ENERGY COMPANY</text>
    </svg>
  ),

  LONGi: ({ w = 120, h = 50 }) => (
    <svg viewBox="0 0 130 50" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="38" fontFamily="Arial, sans-serif" fontSize="34" fontWeight="900"
        fill="#D01010" letterSpacing="-1">LONGi</text>
    </svg>
  ),

  'JA Solar': ({ w = 120, h = 55 }) => (
    <svg viewBox="0 0 130 55" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="50" height="38" rx="4" fill="#0B3F8A"/>
      <text x="25" y="27" textAnchor="middle" fontFamily="Arial Black, sans-serif"
        fontSize="20" fontWeight="900" fill="#fff" letterSpacing="1">JA</text>
      <text x="58" y="22" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700"
        fill="#0B3F8A">SOLAR</text>
      <text x="58" y="36" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="300"
        fill="#888" letterSpacing="1">TECHNOLOGY CO., LTD.</text>
    </svg>
  ),

  GHTL: ({ w = 100, h = 55 }) => (
    <svg viewBox="0 0 100 55" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="6" width="95" height="42" rx="4" fill="#0B3F8A"/>
      <text x="47" y="33" textAnchor="middle" fontFamily="Arial Black, sans-serif"
        fontSize="22" fontWeight="900" fill="#fff" letterSpacing="3">GHTL</text>
    </svg>
  ),

  HUAWEI: ({ w = 130, h = 60 }) => (
    <svg viewBox="0 0 150 60" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      {/* Huawei flower petals */}
      <g transform="translate(25,30)">
        <ellipse cx="0" cy="-13" rx="5" ry="11" fill="#CC0000" transform="rotate(0)"/>
        <ellipse cx="0" cy="-13" rx="5" ry="11" fill="#CC0000" transform="rotate(60)"/>
        <ellipse cx="0" cy="-13" rx="5" ry="11" fill="#CC0000" transform="rotate(120)"/>
        <ellipse cx="0" cy="-13" rx="5" ry="11" fill="#CC0000" transform="rotate(180)"/>
        <ellipse cx="0" cy="-13" rx="5" ry="11" fill="#CC0000" transform="rotate(240)"/>
        <ellipse cx="0" cy="-13" rx="5" ry="11" fill="#CC0000" transform="rotate(300)"/>
      </g>
      <text x="60" y="35" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700"
        fill="#CC0000" letterSpacing="1">HUAWEI</text>
    </svg>
  ),

  SigenEnergy: ({ w = 140, h = 55 }) => (
    <svg viewBox="0 0 170 55" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      {/* S mark */}
      <rect x="0" y="8" width="30" height="16" rx="8" fill="#CC1B1B"/>
      <rect x="0" y="28" width="30" height="16" rx="8" fill="#CC1B1B"/>
      <rect x="0" y="18" width="15" height="12" fill="#CC1B1B"/>
      <rect x="15" y="18" width="15" height="12" fill="#fff"/>
      <text x="40" y="28" fontFamily="Arial Black, sans-serif" fontSize="16" fontWeight="900"
        fill="#CC1B1B" letterSpacing="0.5">SIGEN</text>
      <text x="40" y="44" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700"
        fill="#333" letterSpacing="0.5">ENERGY</text>
    </svg>
  ),

  Deye: ({ w = 120, h = 50 }) => (
    <svg viewBox="0 0 130 50" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      {/* "i" in blue circle */}
      <circle cx="14" cy="25" r="12" fill="#1A56DB"/>
      <text x="14" y="30" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16"
        fontStyle="italic" fontWeight="400" fill="#fff">i</text>
      <text x="34" y="36" fontFamily="Arial Black, sans-serif" fontSize="26" fontWeight="900"
        fill="#CC0000">Deye</text>
    </svg>
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
