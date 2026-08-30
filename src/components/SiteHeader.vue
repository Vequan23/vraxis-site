<script setup lang="ts">
const navigation = [
  { label: 'Products', href: '#products' },
  { label: 'How it works', href: '#foundations' },
  { label: 'Principles', href: '#principles' },
]
</script>

<template>
  <header class="site-header" aria-label="Primary navigation">
    <a class="brand-link" href="#top" aria-label="Vraxis home">
      <img src="/brand/vraxis-mark.svg" alt="" width="40" height="40" />
      <span>Vraxis</span>
    </a>

    <nav class="desktop-navigation" aria-label="Site sections">
      <a v-for="item in navigation" :key="item.href" :href="item.href">{{ item.label }}</a>
    </nav>

    <osx-link
      class="header-cta"
      href="https://github.com/Vequan23/vraxis"
      target="_blank"
      rel="noreferrer"
      external
    >
      View on GitHub
    </osx-link>
  </header>
</template>
