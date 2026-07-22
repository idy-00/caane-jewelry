// Cadres d'angle dorés — motif catalogue Čaané
export default function FrameCorners({ size = 24, light = false, className = '' }) {
  const c = light ? 'border-gold-light/50' : 'border-gold/50'
  const style = { width: size, height: size }
  return (
    <div className={`absolute inset-7 pointer-events-none ${className}`} aria-hidden="true">
      <span className={`absolute top-0 left-0 border-t border-l ${c}`} style={style} />
      <span className={`absolute top-0 right-0 border-t border-r ${c}`} style={style} />
      <span className={`absolute bottom-0 left-0 border-b border-l ${c}`} style={style} />
      <span className={`absolute bottom-0 right-0 border-b border-r ${c}`} style={style} />
    </div>
  )
}
