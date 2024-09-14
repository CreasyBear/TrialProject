import React from 'react'
import { render, screen } from '@testing-library/react'
import HeroSection from './hero-section'

describe('HeroSection', () => {
  it('renders the heading', () => {
    render(<HeroSection />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Shaping the future of energy through intelligent design')
  })

  it('renders the description', () => {
    render(<HeroSection />)
    const description = screen.getByText(/Experience the future of energy with RENOZ battery systems/)
    expect(description).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<HeroSection />)
    const button = screen.getByRole('button', { name: /Discover Our Solutions/i })
    expect(button).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<HeroSection />)
    const image = screen.getByAltText('RENOZ Energy Storage Solution')
    expect(image).toBeInTheDocument()
  })
})