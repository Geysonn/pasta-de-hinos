// Logo provisória inspirada na identidade da ADBA (chama + escudo).
// Substituir pelo arquivo oficial da marca quando disponível.
export function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="100" height="100" rx="20" fill="#12131f" />
      <path
        d="M50 20c8 10 14 16 14 26a14 14 0 1 1-28 0c0-6 3-10 6-14-1 6 1 9 4 11-2-9 1-16 4-23Z"
        fill="url(#flame)"
      />
      <path
        d="M30 55h40l-4 20-16 8-16-8-4-20Z"
        stroke="#9a9ba6"
        strokeWidth="3"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <linearGradient id="flame" x1="50" y1="20" x2="50" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e2536a" />
          <stop offset="1" stopColor="#8b1e2b" />
        </linearGradient>
      </defs>
    </svg>
  )
}
