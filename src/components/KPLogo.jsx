/**
 * KPLogo — renders the KP Solutions brand mark.
 * Pass variant="white" on dark sections (hero, footer, dark navbar).
 * Default is the brand blue/orange version for white/light sections.
 */
export default function KPLogo({ variant = 'color', size = 40 }) {
  const isWhite = variant === 'white';
  const blue   = isWhite ? '#FFFFFF' : '#1A56DB';
  const orange = isWhite ? '#FFFFFF' : '#F97316';
  const text   = isWhite ? '#FFFFFF' : '#1A56DB';

  return (
    <svg
      width={size * 2.8}
      height={size}
      viewBox="0 0 112 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="KP Solutions"
    >
      {/* Circle ring */}
      <circle cx="20" cy="20" r="18" stroke={blue} strokeWidth="2.2" fill="none"/>

      {/* House shape */}
      <polygon points="20,8 10,17 12,17 12,28 18,28 18,22 22,22 22,28 28,28 28,17 30,17" fill={blue} />

      {/* Solar panel lines on roof */}
      <line x1="14" y1="22" x2="14" y2="17" stroke={isWhite ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.6)'} strokeWidth="1"/>
      <line x1="17" y1="19" x2="17" y2="14" stroke={isWhite ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.6)'} strokeWidth="1"/>
      <line x1="23" y1="19" x2="23" y2="14" stroke={isWhite ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.6)'} strokeWidth="1"/>
      <line x1="26" y1="22" x2="26" y2="17" stroke={isWhite ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.6)'} strokeWidth="1"/>

      {/* Sun burst top left of circle */}
      <circle cx="11" cy="10" r="3" fill={orange}/>
      <line x1="11" y1="5"  x2="11" y2="3"  stroke={orange} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="7"  y1="7"  x2="5.5" y2="5.5" stroke={orange} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="6"  y1="10" x2="4"  y2="10" stroke={orange} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="15" y1="7"  x2="16.5" y2="5.5" stroke={orange} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="16" y1="10" x2="18" y2="10" stroke={orange} strokeWidth="1.5" strokeLinecap="round"/>

      {/* "KP SOLUTIONS" text */}
      <text
        x="44"
        y="16"
        fontFamily="Inter, sans-serif"
        fontSize="11"
        fontWeight="800"
        fill={text}
        letterSpacing="0.5"
      >KP</text>
      <text
        x="44"
        y="28"
        fontFamily="Inter, sans-serif"
        fontSize="7.5"
        fontWeight="700"
        fill={isWhite ? 'rgba(255,255,255,0.85)' : text}
        letterSpacing="1.2"
      >SOLUTIONS</text>
    </svg>
  );
}
