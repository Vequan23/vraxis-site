<script setup lang="ts">
import FoundationGrid from './components/FoundationGrid.vue'
import InstallCommand from './components/InstallCommand.vue'
import ProductGrid from './components/ProductGrid.vue'
import SiteHeader from './components/SiteHeader.vue'
import { principles } from './content/ecosystem'
</script>

<template>
  <div id="top" class="site" data-osx-theme="panther">
    <a class="skip-link" href="#main">Skip to content</a>
    <SiteHeader />

    <main id="main">
      <section class="hero section-shell" aria-labelledby="hero-title">
        <div class="hero-copy">
          <osx-badge tone="success" dot label="Local-first agent ecosystem" />
          <h1 id="hero-title">Your tools. Your agents. Your machine.</h1>
          <p>
            Vraxis is a set of local-first tools for building software with agents. Read source material, understand code,
            write clearly, and distribute what you build. One CLI opens every tool.
          </p>
          <div class="hero-actions">
            <osx-link class="primary-link" href="#install" underline="none">Install the CLI</osx-link>
            <osx-link href="#products" underline="hover">Explore the products</osx-link>
          </div>
        </div>
        <div id="install" class="hero-terminal">
          <InstallCommand />
        </div>
      </section>

      <section class="trust-strip" aria-label="Vraxis principles at a glance">
        <span>Files stay local</span>
        <span>Bring your model</span>
        <span>Inspect agent work</span>
        <span>Approve external actions</span>
      </section>

      <section id="products" class="section-shell section-block" aria-labelledby="products-title">
        <div class="section-heading">
          <span class="eyebrow">One connected workflow</span>
          <h2 id="products-title">Four tools. Four jobs.</h2>
          <p>Each product owns one part of the work. The CLI connects them without merging their data or logic.</p>
        </div>
        <ProductGrid />
      </section>

      <section class="section-shell home-callout" aria-labelledby="home-title">
        <div class="home-mark" aria-hidden="true">
          <osx-icon name="home" :size="28" />
        </div>
        <div class="home-copy">
          <span class="eyebrow">Also from Vraxis</span>
          <h2 id="home-title">One private place for family logistics.</h2>
          <p>Vraxis Home keeps school email, family events, weather, and shared routines in a local dashboard.</p>
        </div>
        <osx-link
          class="primary-link"
          href="https://www.npmjs.com/package/@vraxis/home"
          target="_blank"
          rel="noreferrer"
          underline="none"
          external
        >
          Install Vraxis Home
        </osx-link>
      </section>

      <section id="foundations" class="section-shell section-block foundation-section" aria-labelledby="foundations-title">
        <div class="section-heading">
          <span class="eyebrow">Built in public</span>
          <h2 id="foundations-title">Inspect what the products run on.</h2>
          <p>The runtime, interface system, desktop packager, and command center are separate packages with clear boundaries.</p>
        </div>
        <FoundationGrid />
      </section>

      <section id="principles" class="section-shell section-block" aria-labelledby="principles-title">
        <div class="section-heading compact-heading">
          <span class="eyebrow">Operating principles</span>
          <h2 id="principles-title">Control is part of the product.</h2>
        </div>
        <div class="principle-grid">
          <article v-for="principle in principles" :key="principle.title">
            <osx-icon name="check" :size="18" />
            <div>
              <h3>{{ principle.title }}</h3>
              <p>{{ principle.description }}</p>
            </div>
          </article>
        </div>
      </section>

      <section class="section-shell final-cta" aria-labelledby="cta-title">
        <img src="/brand/vraxis-mark.svg" alt="" width="72" height="72" />
        <div>
          <h2 id="cta-title">Start with one command.</h2>
          <p>Install the command center. Add only the tools you need.</p>
        </div>
        <osx-link class="primary-link" href="#install" underline="none">Install Vraxis</osx-link>
      </section>
    </main>

    <footer class="site-footer section-shell">
      <a class="brand-link footer-brand" href="#top" aria-label="Back to the top">
        <img src="/brand/vraxis-mark-mono.svg" alt="" width="28" height="28" />
        <span>Vraxis</span>
      </a>
      <p>Local-first tools for technical work.</p>
      <div>
        <a href="https://github.com/Vequan23" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.npmjs.com/org/vraxis" target="_blank" rel="noreferrer">npm</a>
      </div>
    </footer>
  </div>
</template>
