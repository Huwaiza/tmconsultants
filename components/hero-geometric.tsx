export function HeroGeometric() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large blurred circle top-right */}
      <div className="hero-geo-1 absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      {/* Medium circle bottom-left */}
      <div className="hero-geo-2 absolute bottom-10 -left-10 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
      {/* Small sharp circle mid-right */}
      <div className="hero-geo-3 absolute top-1/3 right-1/4 w-32 h-32 rounded-full border border-white/10" />
      {/* Diagonal line motif */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <line x1="0" y1="150" x2="800" y2="450" stroke="white" strokeWidth="1" />
        <line x1="0" y1="250" x2="800" y2="550" stroke="white" strokeWidth="0.5" />
        <line x1="100" y1="0" x2="500" y2="600" stroke="white" strokeWidth="0.5" />
        <circle cx="600" cy="150" r="80" stroke="white" strokeWidth="1" />
        <circle cx="150" cy="400" r="50" stroke="white" strokeWidth="0.5" />
      </svg>
      {/* Dot grid subtle overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  )
}
