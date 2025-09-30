// https://nuxt.com/docs/api/configuration/nuxt-config
/// <reference types="vite/client" />

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  // Disable devtools in production builds
  devtools: { enabled: import.meta.dev },
  // Global CSS (Tailwind + custom theme)
  css: ['~/assets/css/main.css'],
  
  // Static Site Generation (SSG) for optimal SEO and performance
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  
  // Enable static site generation
  ssr: true,
  
  // Modules configuration
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui'
  ],
  
  // (Site config removed for type compatibility; meta handled via app.head)
  
  // App configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Ten Gallon Technology',
      meta: [
        { name: 'description', content: 'A software company based in Dublin GA specializing in web development and data analytics' },
        { name: 'keywords', content: 'web development, data analytics, software consulting, Dublin GA, small business technology' },
        { name: 'author', content: 'Ten Gallon Technology' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Ten Gallon Technology' },
        { property: 'og:description', content: 'A software company based in Dublin GA specializing in web development and data analytics' },
        { property: 'og:url', content: 'https://www.tengallon.tech' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Ten Gallon Technology' },
        { name: 'twitter:description', content: 'A software company based in Dublin GA specializing in web development and data analytics' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/tengallon.png' },
        { rel: 'canonical', href: 'https://www.tengallon.tech/' }
      ]
    }
  },
  
  // Image optimization
  image: {
    format: ['webp', 'png', 'jpg'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },
  
  // Build configuration
  // Vite configuration adjustments
  vite: {
    build: {
      // Keep sourcemaps only in dev; suppress Tailwind plugin sourcemap warnings in prod
      sourcemap: import.meta.dev
    }
  },
  
  // Performance optimization
  experimental: {
    payloadExtraction: false
  }
})
