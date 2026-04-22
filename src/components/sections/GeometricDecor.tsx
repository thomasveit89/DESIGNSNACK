export function GeometricDecor() {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
      style={{ zIndex: -1 }}
    >
      <style>{`
        /* Mobile defaults — smaller shapes */
        .geo-tr {
          position: absolute;
          top: -40px; right: -140px;
          width: 480px; height: 480px;
          transform: rotate(14deg);
        }
        .geo-lc {
          position: absolute;
          top: 860px; left: -260px;
          width: 520px; height: 520px;
        }
        .geo-rc {
          position: absolute;
          top: 1640px; right: -180px;
          width: 620px; height: 340px;
          transform: rotate(-9deg);
        }
        .geo-cd {
          position: absolute;
          top: 2300px; left: 32%;
          width: 360px; height: 360px;
          transform: rotate(45deg);
        }
        .geo-bl {
          position: absolute;
          top: 2900px; left: -130px;
          width: 360px; height: 500px;
          transform: rotate(-6deg);
        }

        /* Tablet — original calibrated sizes */
        @media (min-width: 768px) {
          .geo-tr  { top: -60px;   right: -220px; width: 760px;  height: 760px; }
          .geo-lc  { top: 1100px;  left: -340px;  width: 700px;  height: 700px; }
          .geo-rc  { top: 2000px;  right: -280px; width: 860px;  height: 480px; }
          .geo-cd  { top: 2900px;  left: 38%;     width: 520px;  height: 520px; }
          .geo-bl  { top: 3600px;  left: -180px;  width: 500px;  height: 700px; }
        }

        /* Desktop — much bigger, repositioned to match section proportions */
        @media (min-width: 1024px) {
          .geo-tr  { top: -120px;  right: -380px; width: 1140px; height: 1140px; }
          .geo-lc  { top: 1300px;  left: -500px;  width: 1060px; height: 1060px; }
          .geo-rc  { top: 2500px;  right: -420px; width: 1300px; height: 740px;  }
          .geo-cd  { top: 3500px;  left: 36%;     width: 820px;  height: 820px;  }
          .geo-bl  { top: 4300px;  left: -280px;  width: 760px;  height: 1060px; }
        }
      `}</style>

      {/* Top-right: two nested rectangles, rotated — Hero into TrustBar */}
      <svg className="geo-tr" viewBox="0 0 760 760">
        <rect x="0" y="0" width="760" height="760" fill="#06080E" rx="32" />
        <rect x="80" y="80" width="600" height="600" fill="#06080E" rx="20" />
      </svg>

      {/* Left-center: large circle — WhatIOffer into SelectedWork */}
      <svg className="geo-lc" viewBox="0 0 700 700">
        <circle cx="350" cy="350" r="340" fill="#06080E" />
        <circle cx="350" cy="350" r="220" fill="#06080E" />
      </svg>

      {/* Right-center: wide rotated rectangle — SelectedWork into BuildingInPublic */}
      <svg className="geo-rc" viewBox="0 0 860 480">
        <rect x="0" y="0" width="860" height="480" fill="#06080E" rx="24" />
      </svg>

      {/* Center: diamond — BuildingInPublic into About */}
      <svg className="geo-cd" viewBox="0 0 520 520">
        <rect x="0" y="0" width="520" height="520" fill="#06080E" rx="16" />
      </svg>

      {/* Bottom-left: tall rectangle — About into Contact */}
      <svg className="geo-bl" viewBox="0 0 500 700">
        <rect x="0" y="0" width="500" height="700" fill="#06080E" rx="28" />
      </svg>
    </div>
  )
}
