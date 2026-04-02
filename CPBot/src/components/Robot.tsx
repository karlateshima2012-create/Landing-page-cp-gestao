import { motion } from "motion/react";

export type RobotExpression = "happy" | "cheerful" | "curious" | "thinking" | "surprised" | "sad" | "love" | "sparkle" | "confused" | "angry";

interface RobotProps {
  expression?: RobotExpression;
  className?: string;
}

interface RobotVariant {
  head: any;
  body: any;
  eyes: any;
}

export default function Robot({ expression = "happy", className = "" }: RobotProps) {
  const variants: Record<RobotExpression, RobotVariant> = {
    happy: {
      head: { y: [0, -6, 0], rotate: [0, 2, -2, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } },
      body: { y: [0, -3, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } },
      eyes: { scaleY: [1, 0.1, 1], transition: { duration: 4, repeat: Infinity, times: [0, 0.95, 1] } },
    },
    cheerful: {
      head: { rotate: [0, 15, -15, 0], y: [0, -8, 0], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } },
      body: { y: [0, -5, 0], x: [0, 2, -2, 0], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } },
      eyes: { scale: [1, 1.2, 1], transition: { duration: 0.5, repeat: Infinity } },
    },
    curious: {
      head: { rotate: [12, 18, 12], x: [4, 6, 4], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } },
      body: { rotate: 4, x: 2 },
      eyes: { 
        left: { scale: 0.6, y: 4, x: 2 },
        right: { scale: 1.5, y: -4, x: -2 }
      },
    },
    thinking: {
      head: { y: 2, rotate: -12, x: -2 },
      body: { y: 0, rotate: -2 },
      eyes: { scaleY: 0.1, y: 4 },
    },
    surprised: {
      head: { y: [-12, -18, -12], scale: 1.1, transition: { duration: 0.3, repeat: Infinity, repeatType: "mirror" } },
      body: { scale: 0.9 },
      eyes: { scale: 1.8, y: -4 },
    },
    sad: {
      head: { y: 10, rotate: 5 },
      body: { y: 5, scale: 0.95, rotate: -2 },
      eyes: { y: 10, scaleY: 0.2, opacity: 0.3 },
    },
    love: {
      head: { y: [0, -4, 0], transition: { duration: 2, repeat: Infinity } },
      body: { scale: 1.05 },
      eyes: { scale: [1, 1.2, 1], transition: { duration: 0.8, repeat: Infinity } }
    },
    sparkle: {
      head: { rotate: [0, 5, -5, 0], transition: { duration: 1, repeat: Infinity } },
      body: { y: -2 },
      eyes: { scale: [1, 1.3, 1], rotate: [0, 90, 180, 270, 360], transition: { duration: 2, repeat: Infinity } }
    },
    confused: {
      head: { rotate: -10, x: -5 },
      body: { rotate: -2 },
      eyes: { y: 2 }
    },
    angry: {
      head: { y: 4, scale: 1.05 },
      body: { y: 2, scale: 1.1 },
      eyes: { rotate: [0, 2, -2, 0], transition: { duration: 0.1, repeat: Infinity } }
    }
  };

  const current = variants[expression];

  return (
    <div className={`relative select-none ${className}`}>
      <svg
        viewBox="0 0 100 120"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="robotBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F3F4F6" />
            <stop offset="100%" stopColor="#E5E7EB" />
          </linearGradient>
          
          <linearGradient id="robotHeadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E5E7EB" />
          </linearGradient>

          <linearGradient id="robotScreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1F2937" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#0891B2" />
          </radialGradient>

          <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF4D4D" />
            <stop offset="100%" stopColor="#B30000" />
          </radialGradient>
        </defs>

        {/* Shadow */}
        <motion.ellipse
          cx="50"
          cy="114"
          rx="28"
          ry="8"
          fill="rgba(0,0,0,0.1)"
          animate={{
            rx: [26, 32, 26],
            opacity: [0.06, 0.12, 0.06]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Entire Robot Group for floating effect */}
        <motion.g
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Body Group */}
          <motion.g animate={current.body} className="origin-center">
            {/* Main Body */}
            <path
              d="M 25 60 C 25 110 75 110 75 60 L 75 50 L 25 50 Z"
              fill="url(#robotBodyGrad)"
              stroke="#D1D5DB"
              strokeWidth="0.5"
            />
          </motion.g>

          {/* Head Group */}
          <motion.g animate={current.head} className="origin-[50px_60px]">
            {/* Head Shape */}
            <rect x="10" y="10" width="80" height="56" rx="28" fill="url(#robotHeadGrad)" stroke="#D1D5DB" strokeWidth="0.5" />
            
            {/* Ears/Antennas */}
            <rect x="6" y="30" width="6" height="18" rx="3" fill="#D1D5DB" />
            <rect x="88" y="30" width="6" height="18" rx="3" fill="#D1D5DB" />
            
            {/* Face Screen */}
            <rect x="18" y="18" width="64" height="40" rx="16" fill="url(#robotScreenGrad)" />

            {/* Expressive Eyes */}
            <g filter="url(#glow)">
              {expression === "curious" ? (
                <>
                  <motion.circle cx="36" cy="36" r="6" fill="url(#cyanGlow)" animate={current.eyes.left} />
                  <motion.circle cx="64" cy="36" r="6" fill="url(#cyanGlow)" animate={current.eyes.right} />
                </>
              ) : expression === "cheerful" ? (
                <>
                  <motion.path 
                    d="M 28 40 Q 36 28 44 40" 
                    fill="none" 
                    stroke="url(#cyanGlow)" 
                    strokeWidth="6" 
                    strokeLinecap="round" 
                    animate={current.eyes} 
                  />
                  <motion.path 
                    d="M 56 40 Q 64 28 72 40" 
                    fill="none" 
                    stroke="url(#cyanGlow)" 
                    strokeWidth="6" 
                    strokeLinecap="round" 
                    animate={current.eyes} 
                  />
                </>
              ) : expression === "thinking" ? (
                <>
                  <motion.rect x="28" y="34" width="16" height="4" rx="2" fill="url(#cyanGlow)" animate={current.eyes} />
                  <motion.rect x="56" y="34" width="16" height="4" rx="2" fill="url(#cyanGlow)" animate={current.eyes} />
                </>
              ) : expression === "love" ? (
                <>
                  <motion.path 
                    d="M 36 42 Q 36 38 32 38 Q 28 38 28 42 Q 28 48 36 54 Q 44 48 44 42 Q 44 38 40 38 Q 36 38 36 42" 
                    fill="url(#redGlow)" 
                    animate={current.eyes}
                    transform="translate(0, -8)"
                  />
                  <motion.path 
                    d="M 64 42 Q 64 38 60 38 Q 56 38 56 42 Q 56 48 64 54 Q 72 48 72 42 Q 72 38 68 38 Q 64 38 64 42" 
                    fill="url(#redGlow)" 
                    animate={current.eyes}
                    transform="translate(0, -8)"
                  />
                </>
              ) : expression === "sparkle" ? (
                <>
                  <motion.path 
                    d="M 36 28 L 40 38 L 50 42 L 40 46 L 36 56 L 32 46 L 22 42 L 32 38 Z" 
                    fill="url(#cyanGlow)" 
                    animate={current.eyes}
                    className="origin-[36px_42px]"
                  />
                  <motion.path 
                    d="M 64 28 L 68 38 L 78 42 L 68 46 L 64 56 L 60 46 L 50 42 L 60 38 Z" 
                    fill="url(#cyanGlow)" 
                    animate={current.eyes}
                    className="origin-[64px_42px]"
                  />
                </>
              ) : expression === "confused" ? (
                <>
                  <motion.rect x="28" y="38" width="16" height="4" rx="2" fill="url(#cyanGlow)" />
                  <motion.path 
                    d="M 58 32 Q 64 28 70 32 Q 70 38 64 40 L 64 44 M 64 48 L 64 50" 
                    fill="none" 
                    stroke="url(#cyanGlow)" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                  />
                </>
              ) : expression === "angry" ? (
                <>
                  <motion.path 
                    d="M 24 32 L 44 42 L 44 46 L 24 36 Z" 
                    fill="url(#cyanGlow)" 
                    animate={current.eyes}
                  />
                  <motion.path 
                    d="M 76 32 L 56 42 L 56 46 L 76 36 Z" 
                    fill="url(#cyanGlow)" 
                    animate={current.eyes}
                  />
                </>
              ) : (
                <>
                  <motion.ellipse cx="36" cy="38" rx="7" ry="6" fill="url(#cyanGlow)" animate={current.eyes} />
                  <motion.ellipse cx="64" cy="38" rx="7" ry="6" fill="url(#cyanGlow)" animate={current.eyes} />
                </>
              )}
            </g>
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
}
