import React from 'react'
import { render, screen } from '@testing-library/react'
import Navbar from './navbar'

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}))

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    const logo = screen.getByAltText('RENOZ Energy')
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Technology')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the consultation button', () => {
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /Request a Consultation/i })
    expect(button).toBeInTheDocument()
  })
})