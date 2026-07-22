export default function Divider({ light = false, className = '' }) {
  const c = light ? 'bg-gold/30' : 'bg-gold/40'
  return (
    <div className={`flex items-center ${className}`}>
      <span className={`w-10 h-px ${c}`} />
    </div>
  )
}
