export function GeometricDecor() {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
      style={{ zIndex: -1 }}
    >
      <style>{`
        /* ─── Keyframes ────────────────────────────────── */
        @keyframes geo-tr-drift {
          0%   { transform: rotate(14deg) translateY(0px)   scale(1);     opacity: 0.5; }
          100% { transform: rotate(17deg) translateY(-40px) scale(1.055); opacity: 1; }
        }
        @keyframes geo-lc-drift {
          0%   { transform: translateY(0px)   scale(1);     opacity: 0.45; }
          100% { transform: translateY(-20px) scale(1.04);  opacity: 1; }
        }
        @keyframes geo-rc-drift {
          0%   { transform: rotate(-9deg)  translateY(0px);   opacity: 0.5; }
          100% { transform: rotate(-14deg) translateY(-24px); opacity: 1; }
        }
        @keyframes geo-bl-drift {
          0%   { transform: rotate(-6deg) translateY(0px);   opacity: 0.45; }
          100% { transform: rotate(-3deg) translateY(-18px); opacity: 1; }
        }
        @keyframes geo-fb-drift {
          0%   { transform: rotate(10deg) translateY(0px);   opacity: 0.45; }
          100% { transform: rotate(13deg) translateY(-16px); opacity: 1; }
        }

        /* ─── Mobile defaults ──────────────────────────── */
        .geo-tr {
          position: absolute;
          top: -40px; right: -140px;
          width: 480px; height: 480px;
          animation: geo-tr-drift 12s ease-in-out infinite alternate;
        }
        .geo-lc {
          position: absolute;
          top: 860px; left: -260px;
          width: 520px; height: 520px;
          animation: geo-lc-drift 15s ease-in-out infinite alternate;
          animation-delay: -8s;
        }
        .geo-rc {
          position: absolute;
          top: 1640px; right: -180px;
          width: 620px; height: 340px;
          animation: geo-rc-drift 21s ease-in-out infinite alternate;
          animation-delay: -14s;
        }
        /* SelectedWork uses 3×100vh sticky scroll → add 200vh offset to elements below it */
        .geo-cd {
          position: absolute;
          top: calc(2300px + 200vh); left: 32%;
          width: 360px; height: 360px;
          transform: rotate(45deg);
        }
        .geo-bl {
          position: absolute;
          top: calc(2900px + 200vh); left: -130px;
          width: 360px; height: 500px;
          animation: geo-bl-drift 15s ease-in-out infinite alternate;
          animation-delay: -5s;
        }
        .geo-fb {
          position: absolute;
          top: calc(3600px + 200vh); right: -80px;
          width: 200px; height: 360px;
          animation: geo-fb-drift 17s ease-in-out infinite alternate;
          animation-delay: -11s;
        }

        /* ─── Tablet ───────────────────────────────────── */
        @media (min-width: 768px) {
          .geo-tr  { top: -60px;   right: -220px; width: 760px;  height: 760px; }
          .geo-lc  { top: 1100px;  left: -340px;  width: 700px;  height: 700px; }
          .geo-rc  { top: 2000px;  right: -280px; width: 860px;  height: 480px; }
          .geo-cd  { top: calc(2900px + 200vh);  left: 38%;     width: 520px;  height: 520px; }
          .geo-bl  { top: calc(3600px + 200vh);  left: -180px;  width: 500px;  height: 700px; }
          .geo-fb  { top: calc(4500px + 200vh);  right: -120px; width: 300px;  height: 540px; }
        }

        /* ─── Desktop ──────────────────────────────────── */
        @media (min-width: 1024px) {
          .geo-tr  { top: -120px;  right: -380px; width: 1140px; height: 1140px; }
          .geo-lc  { top: 1300px;  left: -500px;  width: 1060px; height: 1060px; }
          .geo-rc  { top: 2500px;  right: -420px; width: 1300px; height: 740px;  }
          .geo-cd  { top: calc(3500px + 200vh);  left: 36%;     width: 820px;  height: 820px;  }
          .geo-bl  { top: calc(4300px + 200vh);  left: -280px;  width: 760px;  height: 1060px; }
          .geo-fb  { top: calc(5400px + 200vh);  right: -180px; width: 440px;  height: 800px; }
        }

        /* ─── Reduced motion ───────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .geo-tr { animation: none; transform: rotate(14deg); }
          .geo-lc { animation: none; }
          .geo-rc { animation: none; transform: rotate(-9deg); }
          .geo-bl { animation: none; transform: rotate(-6deg); }
          .geo-fb { animation: none; transform: rotate(10deg); }
        }
      `}</style>

      {/* Top-right: two nested rectangles — Hero into TrustBar */}
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

      {/* Bottom-left: tall rectangle — About into Contact */}
      <svg className="geo-bl" viewBox="0 0 500 700">
        <rect x="0" y="0" width="500" height="700" fill="#06080E" rx="28" />
      </svg>

      {/* Footer-right: tall rectangle — Contact into Footer */}
      <svg className="geo-fb" viewBox="0 0 440 800">
        <rect x="0" y="0" width="440" height="800" fill="#06080E" rx="24" />
      </svg>
    </div>
  )
}
