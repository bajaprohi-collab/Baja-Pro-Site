import React from "react";

interface LogoProps {
  className?: string;
  variant?: "color" | "white";
}

export function Logo({ className = "h-16 w-auto", variant = "color" }: LogoProps) {
  const isColor = variant === "color";
  
  // High-fidelity color palette directly from the uploaded image
  const navyDark = isColor ? "#0B223F" : "currentColor";
  const crimsonRed = isColor ? "#C91E25" : "currentColor";
  const orangeGold = isColor ? "#F37021" : "currentColor";
  const waveAccent = isColor ? "#1C5BB0" : "rgba(255, 255, 255, 0.7)";
  const sunBg = isColor ? "url(#sunsetGradHorizontal)" : "rgba(255, 255, 255, 0.2)";
  const houseFill = isColor ? "#FFFFFF" : "#1B2A4A"; // Dark background friendly support

  return (
    <svg 
      className={className} 
      viewBox="0 0 600 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Baja Pro Home Improvement Logo"
      id="baja-pro-logo-svg"
    >
      <defs>
        {/* Exact sunset gradient matching the uploaded logo (vibrant golden yellow/orange to fiery crimson red) */}
        <linearGradient id="sunsetGradHorizontal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F9A01B" />
          <stop offset="60%" stopColor="#F15A24" />
          <stop offset="100%" stopColor="#C91E25" />
        </linearGradient>

        {/* Premium PRO golden-orange gradient */}
        <linearGradient id="proGoldGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F9A01B" />
          <stop offset="100%" stopColor="#F15A24" />
        </linearGradient>

        {/* Shadow for modern depth */}
        <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.15" />
        </filter>

        {/* Clips for window panes to look perfectly filled and sharp */}
        <clipPath id="windowClip">
          <rect x="0" y="0" width="100" height="100" rx="2" />
        </clipPath>
      </defs>

      <g filter="url(#logoShadow)">
        {/* ========================================================== */}
        {/* 1. SCENIC BACKGROUND (SUNSET, MOUNTAINS, SOARING BIRDS)    */}
        {/* ========================================================== */}
        
        {/* SUNSET SUN */}
        <g id="sun-group">
          {/* Semicircle dome for the sunset sun */}
          <path d="M 200,140 C 200,75 245,45 300,45 C 355,45 400,75 400,140 Z" fill={sunBg} />
          
          {/* Precision sunset horizontal slices from the original uploaded image */}
          <path d="M 190,62 h 220" stroke="#FFFFFF" strokeWidth="4.5" />
          <path d="M 190,75 h 220" stroke="#FFFFFF" strokeWidth="4.5" />
          <path d="M 190,89 h 220" stroke="#FFFFFF" strokeWidth="4.5" />
          <path d="M 190,103 h 220" stroke="#FFFFFF" strokeWidth="4.5" />
          <path d="M 190,117 h 220" stroke="#FFFFFF" strokeWidth="4.5" />
          <path d="M 190,131 h 220" stroke="#FFFFFF" strokeWidth="4.5" />
        </g>

        {/* SOARING BIRDS (3 elegant silhouettes flying high above the mountains) */}
        <g id="birds" stroke={navyDark} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9">
          {/* Bird 1 */}
          <path d="M 185,58 Q 190,52 195,58 Q 200,52 205,58" />
          {/* Bird 2 */}
          <path d="M 166,75 Q 171,69 175,76 Q 179,69 184,75" />
          {/* Bird 3 */}
          <path d="M 182,88 Q 186,83 189,89 Q 192,83 195,88" />
        </g>

        {/* MOUNTAINS (Left-side high-fidelity silhouette) */}
        <g id="mountains" fill={isColor ? navyDark : "rgba(255,255,255,0.25)"}>
          {/* Detailed multi-peak mountain range path perfectly replicating the original logo */}
          <path d="M 75,145 
                   C 95,130 110,115 125,100 
                   L 142,120 
                   L 165,95 
                   L 185,115 
                   L 215,80 
                   L 245,122 
                   L 260,110 
                   L 285,145 Z" />
        </g>

        {/* DOUBLE COCONUT PALM TREES (Right-side signature coastline foliage) */}
        <g id="palm-trees" stroke={navyDark} strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Main trunk (curving left toward the center house) */}
          <path d="M 460,145 Q 452,100 435,62" />
          {/* Main palm leaves/fronds */}
          <path d="M 435,62 Q 448,51 465,54" strokeWidth="4.2" />
          <path d="M 435,62 Q 452,65 463,78" strokeWidth="4.2" />
          <path d="M 435,62 Q 442,75 447,90" strokeWidth="4.2" />
          <path d="M 435,62 Q 422,68 408,78" strokeWidth="4.2" />
          <path d="M 435,62 Q 418,57 410,45" strokeWidth="4.2" />
          <path d="M 435,62 Q 428,48 438,35" strokeWidth="4.2" />

          {/* Secondary trunk (smaller, lower, curving right) */}
          <path d="M 500,145 Q 495,115 482,82" strokeWidth="4.2" />
          {/* Secondary palm leaves */}
          <path d="M 482,82 Q 492,72 506,75" strokeWidth="3.2" />
          <path d="M 482,82 Q 496,85 505,96" strokeWidth="3.2" />
          <path d="M 482,82 Q 486,94 490,106" strokeWidth="3.2" />
          <path d="M 482,82 Q 471,87 459,95" strokeWidth="3.2" />
          <path d="M 482,82 Q 467,78 461,68" strokeWidth="3.2" />
          <path d="M 482,82 Q 475,71 483,60" strokeWidth="3.2" />
        </g>

        {/* ========================================================== */}
        {/* 2. THREE ARCHITECTURAL HOUSES (CENTER OVER INTRO STAGE)    */}
        {/* ========================================================== */}
        
        {/* LEFT HOUSE (Sits slightly lower, behind center house) */}
        <g id="house-left">
          {/* White solid backfill */}
          <polygon points="175,145 220,100 265,145" fill={houseFill} />
          {/* Roof lines */}
          <line x1="172" y1="145" x2="220" y2="100" stroke={navyDark} strokeWidth="6.5" strokeLinecap="round" />
          <line x1="220" y1="100" x2="268" y2="145" stroke={navyDark} strokeWidth="6.5" strokeLinecap="round" />
          {/* Standard 4-Pane Core Window */}
          <rect x="206" y="122" width="22" height="20" fill={navyDark} />
          <line x1="217" y1="122" x2="217" y2="142" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="206" y1="132" x2="228" y2="132" stroke="#FFFFFF" strokeWidth="2.5" />
        </g>

        {/* RIGHT HOUSE (Balanced symmetry helper) */}
        <g id="house-right">
          {/* White solid backfill */}
          <polygon points="335,145 378,102 421,145" fill={houseFill} />
          {/* Roof lines */}
          <line x1="332" y1="145" x2="378" y2="102" stroke={navyDark} strokeWidth="6.5" strokeLinecap="round" />
          <line x1="378" y1="102" x2="424" y2="145" stroke={navyDark} strokeWidth="6.5" strokeLinecap="round" />
          {/* Standard 4-Pane Core Window */}
          <rect x="367" y="124" width="22" height="20" fill={navyDark} />
          <line x1="378" y1="124" x2="378" y2="144" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="367" y1="134" x2="389" y2="134" stroke="#FFFFFF" strokeWidth="2.5" />
        </g>

        {/* MIDDLE HOUSE (TALLEST - STANDS PROMINENTLY IN THE FOREGROUND) */}
        <g id="house-middle">
          {/* Heavy Chimney on the right roof slope */}
          <polygon points="316,70 330,70 330,105 316,105" fill={houseFill} stroke={navyDark} strokeWidth="6" strokeLinejoin="round" />
          
          {/* Main big center roof structure */}
          <polygon points="230,145 285,78 340,145" fill={houseFill} />
          
          {/* Outlining roof edge with thick, high-end profile strokes */}
          <line x1="225" y1="145" x2="285" y2="78" stroke={navyDark} strokeWidth="8" strokeLinecap="round" />
          <line x1="285" y1="78" x2="345" y2="145" stroke={navyDark} strokeWidth="8" strokeLinecap="round" />

          {/* Core Window of the central home (Larger 4-pane accent) */}
          <rect x="270" y="110" width="28" height="26" fill={navyDark} />
          <line x1="284" y1="110" x2="284" y2="136" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="270" y1="123" x2="298" y2="123" stroke="#FFFFFF" strokeWidth="3" />
        </g>

        {/* ========================================================== */}
        {/* 3. DYNAMIC WAVE (COASTAL RIPPLE DIVIDER SEPARATING GRAPHIC) */}
        {/* ========================================================== */}
        
        {/* Top thick Deep Navy active wave */}
        <path 
          d="M 50,145 C 130,125 210,165 300,145 C 390,125 470,165 550,145" 
          stroke={navyDark} 
          strokeWidth="8.5" 
          strokeLinecap="round" 
          fill="none" 
        />
        
        {/* Bottom thinner Royal Blue flowing wave highlight */}
        <path 
          d="M 50,152 C 130,132 210,172 300,152 C 390,132 470,172 550,152" 
          stroke={waveAccent} 
          strokeWidth="5" 
          strokeLinecap="round" 
          fill="none" 
        />

        {/* ========================================================== */}
        {/* 4. SOLID SHIELD / EMBLEM CONTOUR BADGE (LOWER REGION)    */}
        {/* ========================================================== */}
        
        {/* Main Badge body contouring text and ribbon */}
        <path 
          d="M 50,150 
             L 550,150 
             C 562,150 570,155 570,165 
             L 570,270 
             C 570,282 558,288 548,291 
             L 300,348 
             L 52,291 
             C 42,288 30,282 30,270 
             L 30,165 
             C 30,155 38,150 50,150 Z" 
          fill={isColor ? "#FFFFFF" : "transparent"} 
          stroke={navyDark} 
          strokeWidth="6" 
          strokeLinejoin="round" 
        />

        {/* Mirror red badge highlight line at the lower bottom tip */}
        <path 
          d="M 85,282 L 300,332 L 515,282" 
          stroke={crimsonRed} 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          fill="none" 
        />

        {/* ========================================================== */}
        {/* 5. BRAND WORDMARK: "BAJA PRO"                              */}
        {/* ========================================================== */}
        
        {/* "BAJA" (Deep Navy/Navy-Blue geometric layout with extreme thick presence) */}
        <text 
          x="80" 
          y="232" 
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
          fontWeight="900" 
          fontSize="92" 
          fill={navyDark} 
          letterSpacing="-2px"
        >
          BAJA
        </text>

        {/* "PRO" (Vibrant Sunset Orange gold color gradient directly matching the brand) */}
        <text 
          x="352" 
          y="232" 
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
          fontWeight="900" 
          fontSize="92" 
          fill={isColor ? "url(#proGoldGrad)" : "currentColor"} 
          letterSpacing="-1.5px"
        >
          PRO
        </text>

        {/* ========================================================== */}
        {/* 6. RED BRAND RIBBON: "HOME IMPROVEMENT"                   */}
        {/* ========================================================== */}
        <g id="ribbon-banner">
          
          {/* Main Ribbon Polygon wrapper */}
          <polygon 
            points="110,250 490,250 468,284 132,284" 
            fill={crimsonRed} 
            stroke={navyDark} 
            strokeWidth="3.8" 
            strokeLinejoin="round" 
          />

          {/* Swallowtail 3D folds flanking on both left/right ends */}
          {/* Left corner fold shadow */}
          <polygon points="104,257 120,284 132,284 116,257" fill="#801014" stroke={navyDark} strokeWidth="2" />
          {/* Right corner fold shadow */}
          <polygon points="496,257 480,284 468,284 484,257" fill="#801014" stroke={navyDark} strokeWidth="2" />

          {/* Centered clean white sans-serif Wordmark inside the ribbon */}
          <text 
            x="300" 
            y="274" 
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
            fontWeight="900" 
            fontSize="18.5" 
            fill="#FFFFFF" 
            letterSpacing="6.5px" 
            textAnchor="middle"
          >
            • HOME IMPROVEMENT •
          </text>
        </g>
      </g>
    </svg>
  );
}
