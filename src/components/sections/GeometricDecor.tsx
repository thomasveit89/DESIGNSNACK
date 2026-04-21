export function GeometricDecor() {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
      style={{ zIndex: -1 }}
    >
      {/* Top-right: two nested rectangles, rotated — spans Hero into TrustBar */}
      <svg
        style={{ position: 'absolute', top: '-60px', right: '-220px', width: '760px', height: '760px', transform: 'rotate(14deg)' }}
        viewBox="0 0 760 760"
      >
        <rect x="0" y="0" width="760" height="760" fill="#06080E" rx="32" />
        <rect x="80" y="80" width="600" height="600" fill="#06080E" rx="20" />
      </svg>

      {/* Left-center: large circle overlapping off the edge — WhatIOffer into SelectedWork */}
      <svg
        style={{ position: 'absolute', top: '1100px', left: '-340px', width: '700px', height: '700px' }}
        viewBox="0 0 700 700"
      >
        <circle cx="350" cy="350" r="340" fill="#06080E" />
        <circle cx="350" cy="350" r="220" fill="#06080E" />
      </svg>

      {/* Right-center: wide rotated rectangle — SelectedWork into BuildingInPublic */}
      <svg
        style={{ position: 'absolute', top: '2000px', right: '-280px', width: '860px', height: '480px', transform: 'rotate(-9deg)' }}
        viewBox="0 0 860 480"
      >
        <rect x="0" y="0" width="860" height="480" fill="#06080E" rx="24" />
      </svg>

      {/* Center: diamond (rotated square) — BuildingInPublic into About */}
      <svg
        style={{ position: 'absolute', top: '2900px', left: '38%', width: '520px', height: '520px', transform: 'rotate(45deg)' }}
        viewBox="0 0 520 520"
      >
        <rect x="0" y="0" width="520" height="520" fill="#06080E" rx="16" />
      </svg>

      {/* Bottom-left: tall rectangle, slightly rotated — About into Contact */}
      <svg
        style={{ position: 'absolute', top: '3600px', left: '-180px', width: '500px', height: '700px', transform: 'rotate(-6deg)' }}
        viewBox="0 0 500 700"
      >
        <rect x="0" y="0" width="500" height="700" fill="#06080E" rx="28" />
      </svg>
    </div>
  )
}
