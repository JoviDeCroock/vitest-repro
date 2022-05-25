import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/preact'
import { App } from './app'

// The two tests marked with concurrent will be run in parallel
describe('suite', () => {
  it('serial test', async () => {
    const controls = render(<App />)
    console.log(controls)
    expect(true).toBe(true)
  })
})