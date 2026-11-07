// Illustrated scenes for the Training page.
// Pure inline SVG using the XS1 palette (navy #102a43, ink #17314a,
// turquoise #1dd3c9, teal #126c6a, mist #eaf5f3, cream #f7f2e9) so the page
// needs no image files. Animation classes live in globals.css.

export function CorporateScene() {
  const bars = [
    { x: 96, h: 44, c: "#1dd3c9" },
    { x: 134, h: 70, c: "#102a43" },
    { x: 172, h: 56, c: "#1dd3c9" },
    { x: 210, h: 92, c: "#102a43" },
  ];
  const people = [
    { x: 110, body: "#102a43" },
    { x: 195, body: "#1dd3c9" },
    { x: 285, body: "#126c6a" },
    { x: 370, body: "#17314a" },
  ];

  return (
    <svg
      aria-label="A team learning together around a screen showing charts and workflows"
      className="h-auto w-full"
      role="img"
      viewBox="0 0 480 360"
    >
      <rect fill="#eaf5f3" height="360" rx="28" width="480" />
      <circle cx="420" cy="50" fill="none" r="96" stroke="#1dd3c9" strokeOpacity=".45" />
      <circle cx="420" cy="50" fill="none" r="64" stroke="#1dd3c9" strokeOpacity=".45" />

      {/* screen */}
      <rect fill="#fff" height="156" rx="16" stroke="#102a43" strokeOpacity=".12" width="340" x="70" y="64" />
      <rect fill="#102a43" height="30" rx="16" width="340" x="70" y="64" />
      <rect fill="#102a43" height="14" width="340" x="70" y="80" />
      <circle cx="90" cy="79" fill="#1dd3c9" r="4" />
      <circle cx="104" cy="79" fill="#fff" fillOpacity=".5" r="4" />
      <circle cx="118" cy="79" fill="#fff" fillOpacity=".5" r="4" />

      {bars.map((b, i) => (
        <rect
          className="bar-grow"
          fill={b.c}
          height={b.h}
          key={b.x}
          rx="6"
          style={{ animationDelay: `${i * 0.35}s` }}
          width="26"
          x={b.x}
          y={204 - b.h}
        />
      ))}
      <line stroke="#102a43" strokeOpacity=".15" x1="90" x2="250" y1="204" y2="204" />
      <polyline
        className="dash-draw"
        fill="none"
        points="275,190 310,160 345,168 392,110"
        stroke="#126c6a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <circle cx="392" cy="110" fill="#1dd3c9" r="7" stroke="#fff" strokeWidth="3" />

      {/* people around the table */}
      {people.map((p, i) => (
        <g className="bob" key={p.x} style={{ animationDelay: `${i * 0.5}s` }}>
          <rect fill={p.body} height="40" rx="18" width="44" x={p.x - 22} y="250" />
          <circle cx={p.x} cy="236" fill="#fff" r="16" stroke="#102a43" strokeOpacity=".25" strokeWidth="2" />
        </g>
      ))}
      <rect fill="#102a43" height="16" rx="8" width="368" x="56" y="278" />
      <rect fill="#102a43" fillOpacity=".12" height="6" rx="3" width="368" x="56" y="296" />

      {/* floating workflow card */}
      <g className="float-slow">
        <rect fill="#fff" height="38" rx="19" stroke="#102a43" strokeOpacity=".1" width="104" x="22" y="18" />
        <circle cx="42" cy="37" fill="#1dd3c9" r="8" />
        <rect fill="#102a43" fillOpacity=".7" height="5" rx="2.5" width="54" x="58" y="31" />
        <rect fill="#102a43" fillOpacity=".25" height="5" rx="2.5" width="36" x="58" y="41" />
      </g>
    </svg>
  );
}

export function IndividualScene() {
  const lines = [
    { x: 148, y: 94, w: 90, c: "#1dd3c9", o: 1 },
    { x: 148, y: 112, w: 140, c: "#fff", o: 0.7 },
    { x: 168, y: 130, w: 100, c: "#fff", o: 0.7 },
    { x: 168, y: 148, w: 120, c: "#1dd3c9", o: 1 },
    { x: 148, y: 166, w: 70, c: "#fff", o: 0.7 },
  ];

  return (
    <svg
      aria-label="A learner at a laptop writing code, surrounded by web development, AI and progress icons"
      className="h-auto w-full"
      role="img"
      viewBox="0 0 480 360"
    >
      <rect fill="#f7f2e9" height="360" rx="28" width="480" />
      <circle cx="90" cy="310" fill="#1dd3c9" fillOpacity=".15" r="90" />
      <circle cx="430" cy="40" fill="none" r="70" stroke="#1dd3c9" strokeOpacity=".45" />

      {/* laptop */}
      <rect fill="#102a43" height="156" rx="14" width="240" x="120" y="64" />
      <rect fill="#17314a" height="132" rx="8" width="216" x="132" y="76" />
      {lines.map((l) => (
        <rect fill={l.c} fillOpacity={l.o} height="7" key={l.y} rx="3.5" width={l.w} x={l.x} y={l.y} />
      ))}
      <rect className="cursor-blink" fill="#1dd3c9" height="14" rx="2" width="8" x="224" y="162" />
      <rect fill="#17314a" height="14" rx="7" width="288" x="96" y="224" />
      <rect fill="#102a43" height="6" rx="3" width="60" x="210" y="224" />
      <rect fill="#102a43" fillOpacity=".15" height="8" rx="4" width="400" x="40" y="238" />

      {/* coffee */}
      <rect fill="#fff" height="30" rx="6" stroke="#102a43" strokeOpacity=".25" strokeWidth="2" width="28" x="394" y="208" />
      <path d="M422 216 q12 2 0 14" fill="none" stroke="#102a43" strokeOpacity=".25" strokeWidth="2" />
      <path className="steam" d="M402 200 q-5 -8 0 -14 q5 -6 0 -12" fill="none" stroke="#126c6a" strokeLinecap="round" strokeOpacity=".5" strokeWidth="2.5" />

      {/* floating badges */}
      <g className="float-slow">
        <rect fill="#fff" height="64" rx="18" stroke="#102a43" strokeOpacity=".1" width="64" x="36" y="70" />
        <text fill="#126c6a" fontFamily="ui-monospace, monospace" fontSize="22" fontWeight="700" textAnchor="middle" x="68" y="110">
          {"</>"}
        </text>
      </g>
      <g className="float-slow" style={{ animationDelay: "1.2s" }}>
        <rect fill="#fff" height="64" rx="18" stroke="#102a43" strokeOpacity=".1" width="64" x="392" y="80" />
        <path d="M424 92 L430 106 L444 112 L430 118 L424 132 L418 118 L404 112 L418 106 Z" fill="#1dd3c9" />
      </g>
      <g className="float-slow" style={{ animationDelay: "2.2s" }}>
        <rect fill="#fff" height="64" rx="18" stroke="#102a43" strokeOpacity=".1" width="64" x="36" y="156" />
        <path d="M52 188 l8 8 l16 -18" fill="none" stroke="#1dd3c9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
      </g>
    </svg>
  );
}

export function YouthScene() {
  const steps = [
    { x: 40, h: 50, c: "#102a43" },
    { x: 132, h: 95, c: "#17314a" },
    { x: 224, h: 140, c: "#126c6a" },
    { x: 316, h: 185, c: "#1dd3c9" },
  ];

  return (
    <svg
      aria-label="A young person climbing steps toward a star while a parent cheers them on"
      className="h-auto w-full"
      role="img"
      viewBox="0 0 480 360"
    >
      <rect fill="#eaf5f3" height="360" rx="28" width="480" />
      <circle cx="100" cy="60" fill="#1dd3c9" fillOpacity=".2" r="80" />
      <circle cx="440" cy="300" fill="none" r="80" stroke="#1dd3c9" strokeOpacity=".45" />

      {/* path to the star */}
      <path
        className="dash-move"
        d="M104 226 C 150 120, 280 70, 338 92"
        fill="none"
        stroke="#126c6a"
        strokeDasharray="6 8"
        strokeLinecap="round"
        strokeOpacity=".7"
        strokeWidth="3"
      />

      {/* steps */}
      {steps.map((s) => (
        <rect fill={s.c} height={s.h + 20} key={s.x} rx="10" width="92" x={s.x} y={330 - s.h} />
      ))}
      <rect fill="#102a43" fillOpacity=".15" height="6" rx="3" width="440" x="20" y="330" />

      {/* parent */}
      <g className="bob">
        <rect fill="#fff" height="46" rx="16" stroke="#102a43" strokeOpacity=".3" strokeWidth="2" width="36" x="68" y="234" />
        <circle cx="86" cy="220" fill="#f7f2e9" r="15" stroke="#102a43" strokeOpacity=".4" strokeWidth="2" />
      </g>

      {/* young person, arm raised */}
      <g className="bob" style={{ animationDelay: "0.6s" }}>
        <line stroke="#1dd3c9" strokeLinecap="round" strokeWidth="7" x1="284" x2="302" y1="166" y2="142" />
        <rect fill="#1dd3c9" height="36" rx="12" width="28" x="256" y="154" />
        <circle cx="270" cy="142" fill="#f7f2e9" r="13" stroke="#102a43" strokeOpacity=".4" strokeWidth="2" />
      </g>

      {/* star */}
      <g className="float-slow">
        <polygon
          fill="#1dd3c9"
          points="362,78 366.7,89.5 379.1,90.4 369.6,98.5 372.6,110.6 362,104 351.4,110.6 354.4,98.5 344.9,90.4 357.3,89.5"
          stroke="#102a43"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>

      {/* floating tech bits */}
      <g className="float-slow" style={{ animationDelay: "1s" }}>
        <rect fill="#fff" height="44" rx="14" stroke="#102a43" strokeOpacity=".1" width="64" x="30" y="108" />
        <text fill="#126c6a" fontFamily="ui-monospace, monospace" fontSize="20" fontWeight="700" textAnchor="middle" x="62" y="137">
          {"{ }"}
        </text>
      </g>
      <g className="float-slow" style={{ animationDelay: "1.8s" }}>
        <rect fill="#1dd3c9" height="16" rx="4" width="16" x="150" y="46" />
        <rect fill="#102a43" height="16" rx="4" width="16" x="170" y="46" />
        <rect fill="#102a43" height="16" rx="4" width="16" x="150" y="66" />
        <rect fill="#1dd3c9" height="16" rx="4" width="16" x="170" y="66" />
      </g>
      <g className="float-slow" style={{ animationDelay: "2.4s" }}>
        <rect fill="#102a43" height="36" rx="12" width="52" x="400" y="30" />
        <text fill="#1dd3c9" fontSize="16" fontWeight="700" textAnchor="middle" x="426" y="54">
          AI
        </text>
      </g>
    </svg>
  );
}