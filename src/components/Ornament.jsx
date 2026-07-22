// Rosette géométrique — signature DA "luxe africain"
export default function Ornament({ className = '', opacity = 0.06 }) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity }}
    >
      <polygon
        points="60,6 72,34 102,34 79,53 88,81 60,64 32,81 41,53 18,34 48,34"
        stroke="#9C7A3C" strokeWidth="1.1"
      />
      <polygon
        points="60,16 70,38 96,38 76,54 83,78 60,64 37,78 44,54 24,38 50,38"
        stroke="#9C7A3C" strokeWidth="0.55" opacity="0.6"
      />
      <circle cx="60" cy="60" r="26" stroke="#9C7A3C" strokeWidth="0.8" />
      <circle cx="60" cy="60" r="4" fill="#9C7A3C" />
      <line x1="60" y1="30" x2="60" y2="6"   stroke="#9C7A3C" strokeWidth="0.55" />
      <line x1="60" y1="90" x2="60" y2="114" stroke="#9C7A3C" strokeWidth="0.55" />
      <line x1="6"  y1="60" x2="30" y2="60"  stroke="#9C7A3C" strokeWidth="0.55" />
      <line x1="90" y1="60" x2="114" y2="60" stroke="#9C7A3C" strokeWidth="0.55" />
    </svg>
  )
}
