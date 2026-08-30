import { describe, expect, it } from 'vitest'
import { injectPrerenderedHtml, verifyPrerenderedHtml } from './prerender.mjs'

describe('static prerendering', () => {
  const appHtml = [
    '<main>',
    '<h1>Your tools. Your agents. Your machine.</h1>',
    '<a href="https://read.vraxis.dev">Vraxis Read</a>',
    '</main>',
  ].join('')

  it('injects rendered content without removing client scripts', () => {
    const template = '<div id="app"></div><script type="module" src="/assets/app.js"></script>'
    const html = injectPrerenderedHtml(template, appHtml)

    expect(html).toContain(`<div id="app">${appHtml}</div>`)
    expect(html).toContain('<script type="module" src="/assets/app.js"></script>')
    expect(() => verifyPrerenderedHtml(html)).not.toThrow()
  })

  it('rejects a template without the application marker', () => {
    expect(() => injectPrerenderedHtml('<main></main>', appHtml)).toThrow('was not found')
  })

  it('rejects an empty server render', () => {
    expect(() => injectPrerenderedHtml('<div id="app"></div>', '  ')).toThrow('empty application')
  })
})
