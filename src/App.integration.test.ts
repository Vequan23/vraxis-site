import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App.vue'
import { installCommand, products, runCommand } from './content/ecosystem'

describe('Vraxis homepage', () => {
  const writeText = vi.fn<(_: string) => Promise<void>>()

  beforeEach(() => {
    writeText.mockResolvedValue()
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('leads with the CLI and renders every product once', () => {
    const wrapper = mount(App)

    expect(wrapper.get('h1').text()).toBe('Your tools. Your agents. Your machine.')
    expect(wrapper.get('.hero-copy p').text()).toBe(
      'Vraxis is a set of local-first tools for building software with agents. Read source material, understand code, write clearly, and distribute what you build. One CLI opens every tool.',
    )
    expect(wrapper.text()).toContain(installCommand)
    expect(wrapper.text()).toContain(runCommand)

    for (const product of products) {
      expect(wrapper.findAll(`osx-ecosystem-card[name="${product.name}"]`)).toHaveLength(1)
    }

    expect(wrapper.text()).not.toContain('OSX Components')
    expect(wrapper.text()).not.toContain('OS X Components')
    expect(wrapper.findAll('osx-ecosystem-card[provenance="Built with osx Components"]')).toHaveLength(products.length)
  })

  it('copies both commands and confirms the action', async () => {
    vi.useFakeTimers()
    const wrapper = mount(App)
    const button = wrapper.findAll('osx-button').find((candidate) => candidate.text().includes('Copy commands'))

    expect(button).toBeDefined()
    await button!.trigger('click')
    await Promise.resolve()

    expect(writeText).toHaveBeenCalledWith(`${installCommand}\n${runCommand}`)
    expect(wrapper.get('[role="status"]').text()).toBe('Install commands copied.')
    vi.useRealTimers()
  })

  it('uses one stable Panther theme boundary', () => {
    const wrapper = mount(App)
    expect(wrapper.findAll('[data-osx-theme="panther"]')).toHaveLength(1)
  })
})
