import React from 'react'
import { ModeToggle } from './mode-toggle'
import { cn } from '@/lib/utils'
import HistoryContainer from './history-container'

export const Header: React.FC = async () => {
  return (
    <header className="fixed w-full p-1 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img 
            src="https://res.cloudinary.com/radhe-img/image/upload/v1719300807/sWtgFLSqDKtlZ1ACdAj7w5PA9QVuu5DDyOq9_iofjzd.png" 
            alt="WEBSPACEAI RESEARCH Logo" 
            className={cn('w-8 h-8 object-contain')} 
          />
          <span className="ml-2 text-sm font-semibold hidden md:inline">WEBSPACEAI RESEARCH</span>
          <span className="sr-only">WEBSPACEAI RESEARCH</span>
        </a>
      </div>
      <div className="flex gap-0.5">
        <ModeToggle />
        <HistoryContainer location="header" />
      </div>
    </header>
  )
}

export default Header
