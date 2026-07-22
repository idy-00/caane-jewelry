export default function Logo({ size = 36, className = '' }) {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <span className="font-playfair font-bold text-cream tracking-[0.12em]" style={{ fontSize: size * 0.45 }}>
        ČAANÉ
      </span>
    </div>
  )
}
