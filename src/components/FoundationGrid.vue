<script setup lang="ts">
import { foundations } from '../content/ecosystem'
</script>

<template>
  <div class="foundation-grid">
    <a
      v-for="foundation in foundations"
      :key="foundation.name"
      class="foundation-card"
      :href="foundation.href"
      target="_blank"
      rel="noreferrer"
    >
      <span>{{ foundation.label }}</span>
      <h3>{{ foundation.name }}</h3>
      <p>{{ foundation.description }}</p>
      <span class="foundation-action">Inspect the project <osx-icon name="external" :size="15" /></span>
    </a>
  </div>
</template>
