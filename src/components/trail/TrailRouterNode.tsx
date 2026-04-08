const TrailRouterNode = () => (
  <div
    className="trail-router"
    aria-hidden="true"
    style={{ top: "48.06%", left: "71.51%" }}
  >
    <div className="trail-router__halo" />
    <div className="trail-router__chip">
      <span className="chip-emblem">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <mask id="routerCompass">
            <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path
                fill="#fff"
                d="M12 3c4.97 0 9 4.03 9 9c0 4.97-4.03 9-9 9c-4.97 0-9-4.03-9-9c0-4.97 4.03-9 9-9Z"
              />
              <path
                fill="#000"
                stroke="none"
                d="M10.2 10.2L17 7L13.8 13.8L7 17z"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="-180 12 12;0 12 12;0 12 12;0 12 12;0 12 12;270 12 12;-90 12 12;0 12 12;-180 12 12;-35 12 12;-40 12 12;-45 12 12;-45 12 12;-110 12 12;-135 12 12;-180 12 12"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
              <circle cx="12" cy="12" r="1" fill="#fff" stroke="none" />
            </g>
          </mask>
          <rect width="24" height="24" fill="currentColor" mask="url(#routerCompass)" />
        </svg>
      </span>
    </div>
  </div>
);

export default TrailRouterNode;
