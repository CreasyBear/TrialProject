import React from 'react'
import { cn } from '@/utils/cn'

export const BackgroundLights: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('w-full h-full overflow-hidden', className)}>
    <div
      className="w-full h-full relative bottom-[-200px]"
      style={{
        background:
          'conic-gradient(from 180deg at 50% 50%, hsl(var(--blue-500)) 0deg, hsl(var(--cyan-400)) 180deg, hsl(var(--yellow-400)) 1turn)',
        filter: 'blur(75px)',
        opacity: '20%'
      }}
    />
  </div>
)