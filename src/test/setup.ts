import { config } from '@vue/test-utils'

config.global.config.warnHandler = (message) => {
  if (message.includes('Failed to resolve component: osx-')) return
  console.warn(message)
}
