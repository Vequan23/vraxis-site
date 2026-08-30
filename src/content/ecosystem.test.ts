import { describe, expect, it } from 'vitest'
import { foundations, installCommand, products } from './ecosystem'

describe('ecosystem content', () => {
  it('keeps the CLI install command first and exact', () => {
    expect(installCommand).toBe('npm install -g @vraxis/cli')
  })

  it('gives every product a unique stage, id, and secure destination', () => {
    expect(new Set(products.map((product) => product.id)).size).toBe(products.length)
    expect(new Set(products.map((product) => product.stage)).size).toBe(products.length)
    expect(products.every((product) => product.href.startsWith('https://'))).toBe(true)
  })

  it('keeps foundations distinct from end-user products', () => {
    const productNames = new Set(products.map((product) => product.name))
    expect(foundations.every((foundation) => !productNames.has(foundation.name))).toBe(true)
  })
})
