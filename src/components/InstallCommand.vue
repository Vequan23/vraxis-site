<script setup lang="ts">
import { computed, ref } from 'vue'
import { installCommand, runCommand } from '../content/ecosystem'

const copied = ref(false)
const command = computed(() => `${installCommand}\n${runCommand}`)

async function copyCommand() {
  await navigator.clipboard.writeText(command.value)
  copied.value = true
  window.setTimeout(() => {
    copied.value = false
  }, 2200)
}
</script>

<template>
  <div class="install-command" aria-label="Install Vraxis CLI">
    <div class="terminal-window" role="group" aria-label="Terminal, install the Vraxis command center">
      <div class="terminal-titlebar" aria-hidden="true">
        <div class="window-controls"><span></span><span></span><span></span></div>
        <div><strong>Terminal</strong><small>Install the Vraxis command center</small></div>
      </div>
      <div class="terminal-content">
        <div class="command-lines" aria-label="Commands to install and open Vraxis">
          <code><span>$</span> {{ installCommand }}</code>
          <code><span>$</span> {{ runCommand }}</code>
        </div>
        <osx-button variant="primary" icon="copy" size="small" @click="copyCommand">
          {{ copied ? 'Copied' : 'Copy commands' }}
        </osx-button>
      </div>
    </div>
    <p class="copy-status" role="status" aria-live="polite">
      {{ copied ? 'Install commands copied.' : '' }}
    </p>
  </div>
</template>
