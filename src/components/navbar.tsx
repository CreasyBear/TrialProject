"use client"

import React, { useState, createContext, useContext, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

const DirectionContext = createContext<{
  direction: 'rtl' | 'ltr' | null
  setAnimationDirection: (tab: number | null) => void
} | null>(null)

const CurrentTabContext = createContext<{
  currentTab: number | null
} | null>(null)

const Dropdown: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<null | number>(null)
  const [direction, setDirection] = useState<'rtl' | 'ltr' | null>(null)

  const setAnimationDirection = (tab: number | null) => {
    if (typeof currentTab === 'number' && typeof tab === 'number') {
      setDirection(currentTab > tab ? 'rtl' : 'ltr')
    } else if (tab === null) {
      setDirection(null)
    }
    setCurrentTab(tab)
  }

  return (
    <DirectionContext.Provider value={{ direction, setAnimationDirection }}>
      <CurrentTabContext.Provider value={{ currentTab }}>
        <span
          onMouseLeave={() => setAnimationDirection(null)}
          className={'relative flex h-fit gap-2'}>
          {children}
        </span>
      </CurrentTabContext.Provider>
    </DirectionContext.Provider>
  )
}

const TriggerWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentTab } = useContext(CurrentTabContext)!
  const { setAnimationDirection } = useContext(DirectionContext)!

  return (
    <>
      {React.Children.map(children, (e, i) => (
        <button
          onMouseEnter={() => setAnimationDirection(i + 1)}
          onClick={() => setAnimationDirection(i + 1)}
          className={`flex h-10 items-center gap-0.5 rounded-md px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors ${
            currentTab === i + 1 ? 'bg-background/10 [&>svg]:rotate-180' : ''
          }`}>
          {e}
        </button>
      ))}
    </>
  )
}

const Trigger: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => {
  return (
    <>
      <span className={cn('', className)}>{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200"
        aria-hidden="true">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </>
  )
}

const Tabs: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => {
  const { currentTab } = useContext(CurrentTabContext)!
  const { direction } = useContext(DirectionContext)!
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.98
        }}
        animate={
          currentTab
            ? {
                opacity: 1,
                scale: 1
              }
            : { opacity: 0, scale: 0.98 }
        }
        className="absolute left-0 top-[calc(100%_+_6px)] w-auto z-50">
        <div className="absolute -top-[6px] left-0 right-0 h-[6px]" />
        <div
          className={cn(
            'rounded-md border border-neutral-200 bg-background/80 backdrop-blur-xl transition-all duration-300 dark:border-neutral-800 shadow-lg',
            className
          )}>
          {React.Children.map(children, (e, i) => (
            <div className="overflow-hidden">
              <AnimatePresence>
                {currentTab !== null && (
                  <motion.div exit={{ opacity: 0 }}>
                    {currentTab === i + 1 && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: direction === 'ltr' ? 100 : direction === 'rtl' ? -100 : 0
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}>
                        {e}
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  )
}

const Tab: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => {
  return <div className={cn('h-full w-[500px]', className)}>{children}</div>
}

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="bg-background border-b z-40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/image.png" alt="RENOZ Energy" width={120} height={40} />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Dropdown>
              <TriggerWrapper>
                <Trigger>Products</Trigger>
              </TriggerWrapper>
              <Tabs>
                <Tab>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold mb-2 text-foreground">Battery Systems</h3>
                    <ul className="space-y-2">
                      <li><Link href="/products/residential" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Residential Storage</Link></li>
                      <li><Link href="/products/commercial" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Commercial Storage</Link></li>
                      <li><Link href="/products/grid-scale" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Grid-Scale Solutions</Link></li>
                    </ul>
                  </div>
                </Tab>
              </Tabs>
            </Dropdown>
            <Dropdown>
              <TriggerWrapper>
                <Trigger>Technology</Trigger>
              </TriggerWrapper>
              <Tabs>
                <Tab>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold mb-2 text-foreground">Our Innovations</h3>
                    <ul className="space-y-2">
                      <li><Link href="/technology/battery-chemistry" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Battery Chemistry</Link></li>
                      <li><Link href="/technology/energy-management" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Energy Management</Link></li>
                      <li><Link href="/technology/sustainability" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sustainability Features</Link></li>
                    </ul>
                  </div>
                </Tab>
              </Tabs>
            </Dropdown>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button size="sm" variant="outline" className="ml-4">
              Request a Consultation
            </Button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}