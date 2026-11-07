const iconPaths = {
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <path d="M10 6h4a2 2 0 0 1 2 2v6M14 18h-4a2 2 0 0 1-2-2v-2" />
    </>
  ),
  code: (
    <>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </>
  ),
  store: (
    <>
      <path d="M3 10v10h18V10M2 10l2-7h16l2 7" />
      <path d="M2 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 4 0M10 20v-6h4v6" />
    </>
  ),
  graduation: (
    <>
      <path d="m2 10 10-5 10 5-10 5-10-5Z" />
      <path d="M6 12v5c3.5 3 8.5 3 12 0v-5M22 10v6" />
    </>
  ),
  boxes: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4.5 7.5 7.5 4 7.5-4M12 12v9M8 5l8 4.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5l8-3v19M4 9H2v12h20V9h-2M12 7h8v14M8 8v.01M8 12v.01M8 16v.01M16 12v.01M16 16v.01" />
    </>
  ),
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  check: <path d="m5 12 4 4L19 6" />,
};

export default function Icon({ name, className = "h-6 w-6", strokeWidth = 1.7 }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
    >
      {iconPaths[name] || iconPaths.layers}
    </svg>
  );
}
