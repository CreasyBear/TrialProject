import '@testing-library/jest-dom'

// Add custom matchers
expect.extend({
  toHaveTextContent(received, expected) {
    const pass = received.textContent.includes(expected)
    if (pass) {
      return {
        message: () => `expected ${received} not to have text content ${expected}`,
        pass: true,
      }
    } else {
      return {
        message: () => `expected ${received} to have text content ${expected}`,
        pass: false,
      }
    }
  },
  toBeInTheDocument() {
    return {
      message: () => 'expected element to be in the document',
      pass: this.equals(document.body.contains(this.actual)),
    }
  },
})