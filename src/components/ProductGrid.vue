<script setup lang="ts">
import { products } from '../content/ecosystem'
</script>

<template>
  <div class="product-grid">
    <article v-for="(product, index) in products" :key="product.id" class="product-step">
      <div class="product-stage">
        <span>{{ String(index + 1).padStart(2, '0') }}</span>
        <strong>{{ product.stage }}</strong>
      </div>
      <osx-ecosystem-card
        :name="product.name"
        :category="product.stage"
        :description="product.description"
        :href="product.href"
        :action-label="product.action"
        :mark="product.mark"
        :tone="product.tone"
        provenance="Built with osx Components"
        external
      />
    </article>
  </div>
</template>
