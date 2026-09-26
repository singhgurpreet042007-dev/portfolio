import React, { useId } from 'react';

export interface AngledDividerProps {
  /**
   * 'dark-to-light': Transitions from top dark (#0a0a0a) to bottom white (#ffffff).
   * 'light-to-dark': Transitions from top white (#ffffff) to bottom dark (#0a0a0a).
   * 'dark-to-dark': Seamless dark on both sides, displaying an angled glowing line bar between dark sections.
   */
  direction: 'dark-to-light' | 'light-to-dark' | 'dark-to-dark';
  /**
   * 'up-right': Corner triangle on top-right (slopes up to the right).
   * 'down-right': Corner triangle on top-left (slopes down to the right).
   */
  slant?: 'up-right' | 'down-right';
  /**
   * 'orange' (default) or 'arctic-blue'
   */
  color?: 'orange' | 'arctic-blue';
  className?: string;
}

export const AngledDivider: React.FC<AngledDividerProps> = React.memo(({
  direction,
  slant,
  color = 'orange',
  className = '',
}) => {
  const rawId = useId();
  const id = rawId.replace(/:/g, '');

  // Default to opposite slopes for top and bottom dividers
  const effectiveSlant = slant || (direction === 'dark-to-light' ? 'up-right' : 'down-right');
  const isUpRight = effectiveSlant === 'up-right';

  // ─── DARK-TO-DARK: Glowing angled line bar between two dark sections (e.g. Profile & Projects) ───
  if (direction === 'dark-to-dark') {
    const isArctic = color === 'arctic-blue';
    const gradientId = isArctic ? `arcticDark_${id}` : `orangeDark_${id}`;
    const glowId = isArctic ? `glowDark_${id}` : `glowDark_${id}`;
    const shadowFilter = isArctic
      ? 'drop-shadow(0 0 12px rgba(0, 180, 255, 0.4))'
      : 'drop-shadow(0 0 12px rgba(255, 102, 0, 0.4))';
    const topStroke = isArctic ? '#f0f9ff' : '#fff7ed';
    const bottomStroke = isArctic ? '#0099ff' : '#ea580c';
    const glowFill = isArctic ? '#00d2ff' : '#ff6a00';

    return (
      <div className={`relative w-full overflow-hidden bg-surface leading-none ${className}`}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24 md:h-28 lg:h-32 block select-none"
          style={{ filter: shadowFilter }}
        >
          <defs>
            {isArctic ? (
              <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0066cc" />
                <stop offset="35%" stopColor="#0099ff" />
                <stop offset="70%" stopColor="#00d2ff" />
                <stop offset="100%" stopColor="#60efff" />
              </linearGradient>
            ) : (
              <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="35%" stopColor="#f97316" />
                <stop offset="70%" stopColor="#ff7700" />
                <stop offset="100%" stopColor="#ffaa00" />
              </linearGradient>
            )}
            <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {isUpRight ? (
            <>
              {/* Glowing Corner Triangle (Same to Same pattern as Orange, widens upwards into top-right corner) */}
              <polygon
                points="0,120 1440,0 1440,65"
                fill={`url(#${gradientId})`}
              />

              {/* Ambient Glow behind the triangle apex */}
              <polygon
                points="0,120 1440,0 1440,65"
                fill={glowFill}
                opacity="0.3"
                filter={`url(#${glowId})`}
              />

              {/* Top Edge Highlight Hairline */}
              <line
                x1="0"
                y1="120"
                x2="1440"
                y2="0"
                stroke={topStroke}
                strokeWidth="1.75"
                strokeOpacity="0.9"
                strokeLinecap="round"
              />

              {/* Bottom Edge Defining Line */}
              <line
                x1="0"
                y1="120"
                x2="1440"
                y2="65"
                stroke={bottomStroke}
                strokeWidth="1.25"
                strokeOpacity="0.75"
                strokeLinecap="round"
              />
            </>
          ) : (
            <>
              {/* Glowing Corner Triangle (Widens upwards into top-left corner) */}
              <polygon
                points="0,0 0,65 1440,120"
                fill={`url(#${gradientId})`}
              />

              {/* Ambient Glow behind the triangle apex */}
              <polygon
                points="0,0 0,65 1440,120"
                fill={glowFill}
                opacity="0.3"
                filter={`url(#${glowId})`}
              />

              {/* Top Edge Highlight Hairline */}
              <line
                x1="0"
                y1="0"
                x2="1440"
                y2="120"
                stroke={topStroke}
                strokeWidth="1.75"
                strokeOpacity="0.9"
                strokeLinecap="round"
              />

              {/* Bottom Edge Defining Line */}
              <line
                x1="0"
                y1="65"
                x2="1440"
                y2="120"
                stroke={bottomStroke}
                strokeWidth="1.25"
                strokeOpacity="0.75"
                strokeLinecap="round"
              />
            </>
          )}
        </svg>
      </div>
    );
  }

  if (direction === 'dark-to-light') {
    return (
      <div className={`relative w-full overflow-hidden bg-surface leading-none ${className}`}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24 md:h-28 lg:h-32 block select-none"
          style={{ filter: 'drop-shadow(0 0 12px rgba(255, 102, 0, 0.4))' }}
        >
          <defs>
            {/* Rich, fiery orange gradient filling the corner triangle */}
            <linearGradient id={`orangeTriangle_${id}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="35%" stopColor="#f97316" />
              <stop offset="70%" stopColor="#ff7700" />
              <stop offset="100%" stopColor="#ffaa00" />
            </linearGradient>
            <filter id={`glow_${id}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {isUpRight ? (
            <>
              {/* White section base below the cut */}
              <polygon points="0,120 1440,65 1440,120 0,120" fill="#ffffff" />

              {/* Glowing Corner Triangle (Full of Orange Color, widens upwards into top-right corner) */}
              <polygon
                points="0,120 1440,0 1440,65"
                fill={`url(#orangeTriangle_${id})`}
              />

              {/* Ambient Glow behind the triangle apex */}
              <polygon
                points="0,120 1440,0 1440,65"
                fill="#ff6a00"
                opacity="0.3"
                filter={`url(#glow_${id})`}
              />

              {/* Top Edge Highlight Hairline */}
              <line
                x1="0"
                y1="120"
                x2="1440"
                y2="0"
                stroke="#fff7ed"
                strokeWidth="1.75"
                strokeOpacity="0.9"
                strokeLinecap="round"
              />

              {/* Bottom Edge Defining Line */}
              <line
                x1="0"
                y1="120"
                x2="1440"
                y2="65"
                stroke="#ea580c"
                strokeWidth="1.25"
                strokeOpacity="0.75"
                strokeLinecap="round"
              />
            </>
          ) : (
            <>
              {/* White section base below the cut */}
              <polygon points="0,65 1440,120 1440,120 0,120" fill="#ffffff" />

              {/* Glowing Corner Triangle (Full of Orange Color, widens upwards into top-left corner) */}
              <polygon
                points="0,0 0,65 1440,120"
                fill={`url(#orangeTriangle_${id})`}
              />

              {/* Ambient Glow behind the triangle apex */}
              <polygon
                points="0,0 0,65 1440,120"
                fill="#ff6a00"
                opacity="0.3"
                filter={`url(#glow_${id})`}
              />

              {/* Top Edge Highlight Hairline */}
              <line
                x1="0"
                y1="0"
                x2="1440"
                y2="120"
                stroke="#fff7ed"
                strokeWidth="1.75"
                strokeOpacity="0.9"
                strokeLinecap="round"
              />

              {/* Bottom Edge Defining Line */}
              <line
                x1="0"
                y1="65"
                x2="1440"
                y2="120"
                stroke="#ea580c"
                strokeWidth="1.25"
                strokeOpacity="0.75"
                strokeLinecap="round"
              />
            </>
          )}
        </svg>
      </div>
    );
  }

  // light-to-dark: transitions from top white to bottom dark (#0a0a0a)
  return (
    <div className={`relative w-full overflow-hidden bg-white leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-24 md:h-28 lg:h-32 block select-none"
        style={{ filter: 'drop-shadow(0 0 12px rgba(255, 102, 0, 0.4))' }}
      >
        <defs>
          <linearGradient id={`orangeTriangleLight_${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffaa00" />
            <stop offset="35%" stopColor="#ff7700" />
            <stop offset="70%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <filter id={`glowLight_${id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {isUpRight ? (
          <>
            {/* Dark section base below the cut */}
            <polygon points="0,120 1440,65 1440,120 0,120" fill="#0a0a0a" />

            {/* Glowing Corner Triangle (Full of Orange Color in top-right corner) */}
            <polygon
              points="0,120 1440,0 1440,65"
              fill={`url(#orangeTriangleLight_${id})`}
            />

            {/* Ambient Glow */}
            <polygon
              points="0,120 1440,0 1440,65"
              fill="#ff6a00"
              opacity="0.3"
              filter={`url(#glowLight_${id})`}
            />

            {/* Top Edge Highlight Line */}
            <line
              x1="0"
              y1="120"
              x2="1440"
              y2="0"
              stroke="#fff7ed"
              strokeWidth="1.75"
              strokeOpacity="0.9"
              strokeLinecap="round"
            />

            {/* Bottom Edge Defining Line */}
            <line
              x1="0"
              y1="120"
              x2="1440"
              y2="65"
              stroke="#ea580c"
              strokeWidth="1.25"
              strokeOpacity="0.75"
              strokeLinecap="round"
            />
          </>
        ) : (
          <>
            {/* Dark section base below the cut */}
            <polygon points="0,65 1440,120 1440,120 0,120" fill="#0a0a0a" />

            {/* Glowing Corner Triangle (Full of Orange Color in top-left corner) */}
            <polygon
              points="0,0 0,65 1440,120"
              fill={`url(#orangeTriangleLight_${id})`}
            />

            {/* Ambient Glow */}
            <polygon
              points="0,0 0,65 1440,120"
              fill="#ff6a00"
              opacity="0.3"
              filter={`url(#glowLight_${id})`}
            />

            {/* Top Edge Highlight Line */}
            <line
              x1="0"
              y1="0"
              x2="1440"
              y2="120"
              stroke="#fff7ed"
              strokeWidth="1.75"
              strokeOpacity="0.9"
              strokeLinecap="round"
            />

            {/* Bottom Edge Defining Line */}
            <line
              x1="0"
              y1="65"
              x2="1440"
              y2="120"
              stroke="#ea580c"
              strokeWidth="1.25"
              strokeOpacity="0.75"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </div>
  );
});

AngledDivider.displayName = 'AngledDivider';

export default AngledDivider;
