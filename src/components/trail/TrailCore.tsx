const TrailCore = () => (
  <div
    className="trail-core"
    aria-hidden="true"
    style={{ top: "48.06%", left: "40%" }}
  >
    <div className="trail-core__halo" />
    <div className="trail-core__logo">
      <span className="chip-emblem">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <mask id="coreGear">
            <defs>
              <symbol id="coreGearTooth">
                <path d="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 19.09 5.04 19.09 5.04C19.25 4.98 19.52 5.01 19.6 5.17C19.6 5.17 21.67 8.75 21.67 8.75C21.77 8.92 21.73 9.2 21.6 9.32C21.6 9.32 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z" />
              </symbol>
            </defs>
            <g fill="none" stroke="#fff" strokeWidth="2">
              <g fill="#fff" stroke="none">
                <use href="#coreGearTooth" />
                <use href="#coreGearTooth" transform="rotate(60 12 12)" />
                <use href="#coreGearTooth" transform="rotate(120 12 12)" />
                <use href="#coreGearTooth" transform="rotate(180 12 12)" />
                <use href="#coreGearTooth" transform="rotate(240 12 12)" />
                <use href="#coreGearTooth" transform="rotate(300 12 12)" />
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 12 12;360 12 12"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </g>
              <circle cx="12" cy="12" r="3.5" />
            </g>
          </mask>
          <rect width="24" height="24" fill="currentColor" mask="url(#coreGear)" />
        </svg>
      </span>
    </div>
  </div>
);

export default TrailCore;
