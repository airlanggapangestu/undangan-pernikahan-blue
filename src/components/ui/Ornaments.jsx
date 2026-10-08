// ─── 1. FLORAL CORNER ─────────────────────────
export function FloralCorner({ position = "top-left", className = "" }) {
  const rotations = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  };
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
  };

  return (
    <svg
      className={`absolute ${positions[position]} ${rotations[position]} w-32 h-32 md:w-48 md:h-48 
                  text-pearl/40 pointer-events-none ${className}`}
      viewBox="0 0 200 200"
      fill="none"
    >
      <path
        d="M10 10 Q 60 20, 80 60 Q 95 90, 120 100"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M40 25 Q 55 15, 70 25 Q 55 40, 40 25 Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M70 55 Q 85 45, 100 55 Q 85 70, 70 55 Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M30 45 Q 40 35, 55 45 Q 40 60, 30 45 Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M90 80 Q 105 70, 120 80 Q 105 95, 90 80 Z"
        fill="currentColor"
        opacity="0.6"
      />
      <circle cx="60" cy="35" r="6" fill="currentColor" opacity="0.6" />
      <circle cx="60" cy="35" r="3" fill="#F6FAFF" />
      <circle cx="105" cy="70" r="5" fill="currentColor" opacity="0.5" />
      <circle cx="105" cy="70" r="2.5" fill="#F6FAFF" />
      <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="130" cy="95" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

// ─── 2. DIVIDER BUNGA ─────────────────────────
export function FloralDivider({ className = "" }) {
  return (
    <div
      className={`flex items-center justify-center gap-4 my-10 ${className}`}
    >
      <span className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-pearl" />
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="text-pearl"
      >
        <circle cx="20" cy="20" r="3" fill="currentColor" />
        <path
          d="M20 8 Q 22 15, 20 17 Q 18 15, 20 8 Z"
          fill="currentColor"
          opacity="0.7"
        />
        <path
          d="M20 32 Q 18 25, 20 23 Q 22 25, 20 32 Z"
          fill="currentColor"
          opacity="0.7"
        />
        <path
          d="M8 20 Q 15 18, 17 20 Q 15 22, 8 20 Z"
          fill="currentColor"
          opacity="0.7"
        />
        <path
          d="M32 20 Q 25 22, 23 20 Q 25 18, 32 20 Z"
          fill="currentColor"
          opacity="0.7"
        />
        <circle cx="6" cy="20" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="34" cy="20" r="1.5" fill="currentColor" opacity="0.5" />
      </svg>
      <span className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-pearl" />
    </div>
  );
}

// ─── 3. MONOGRAM ──────────────────────────────
export function Monogram({ text = "R & A", className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <div
          className="w-20 h-20 md:w-24 md:h-24 rounded-full 
                        border-2 border-pearl/40 flex items-center justify-center
                        bg-gradient-to-br from-cream to-cream-dark shadow-md"
        >
          <span className="font-script text-3xl md:text-4xl text-pearl-gradient">
            {text}
          </span>
        </div>
        <div className="absolute inset-0 rounded-full border border-pearl/20 scale-110" />
      </div>
    </div>
  );
}

// ─── 4. WATERCOLOR BLOB ───────────────────────
export function WatercolorBlob({ className = "", color = "azure" }) {
  const colors = {
    azure: "from-azure-soft/40 to-azure-deep/20",
    pearl: "from-pearl-light/40 to-pearl/20",
    mist: "from-mist/30 to-mist/10",
  };
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-60 pointer-events-none
                  bg-gradient-to-br ${colors[color]} ${className}`}
    />
  );
}

// ─── 5. LEAF SPRIG ────────────────────────────
export function LeafSprig({ className = "" }) {
  return (
    <svg
      className={`text-mist/60 ${className}`}
      width="60"
      height="120"
      viewBox="0 0 60 120"
      fill="none"
    >
      <path d="M30 120 Q 30 60, 30 10" stroke="currentColor" strokeWidth="1" />
      <ellipse
        cx="20"
        cy="30"
        rx="8"
        ry="4"
        fill="currentColor"
        opacity="0.6"
        transform="rotate(-30 20 30)"
      />
      <ellipse
        cx="40"
        cy="45"
        rx="8"
        ry="4"
        fill="currentColor"
        opacity="0.6"
        transform="rotate(30 40 45)"
      />
      <ellipse
        cx="20"
        cy="60"
        rx="8"
        ry="4"
        fill="currentColor"
        opacity="0.5"
        transform="rotate(-30 20 60)"
      />
      <ellipse
        cx="40"
        cy="75"
        rx="8"
        ry="4"
        fill="currentColor"
        opacity="0.5"
        transform="rotate(30 40 75)"
      />
      <ellipse
        cx="20"
        cy="90"
        rx="8"
        ry="4"
        fill="currentColor"
        opacity="0.4"
        transform="rotate(-30 20 90)"
      />
      <ellipse
        cx="40"
        cy="105"
        rx="8"
        ry="4"
        fill="currentColor"
        opacity="0.4"
        transform="rotate(30 40 105)"
      />
    </svg>
  );
}
