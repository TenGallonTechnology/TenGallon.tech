<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <UHeader mode="drawer">
      <template #title>
        <img
          src="/tengallon.png"
          alt="Ten Gallon Technology logo"
          class="w-auto h-20"
        >
      </template>
      <UNavigationMenu :items="navItems" />
      <template #right>
        <UColorModeSwitch />
      </template>
      <template #body>
        <UNavigationMenu
          :items="navItems"
          :highlight="false"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <UMain>
      <!-- Hidden intro paragraph for semantic context / keyword support -->
      <p class="sr-only">Ten Gallon Technology provides web development, data analytics, and software consulting services.</p>
      <NuxtPage :key="route.fullPath" />
    </UMain>

    <USeparator />

    <UFooter class="backdrop-blur-sm">
      <template #right>
        <p class="text-sm text-muted">Copyright © {{ new Date().getFullYear() }}</p>
      </template>

      <!-- <UButton to="mailto:info@tengallon.tech" label="info@tengallon.tech" variant="ghost" icon="i-mdi-email" /> -->

      <template #left>
        <UButton
          to="https://tengallon.tech"
          target="_blank"
          :ui="{ leadingAvatarSize: 'lg' }"
          :avatar="{ src: 'https://raw.githubusercontent.com/TenGallonTechnology/images/refs/heads/main/tenGallonSolid.png' }"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>

<script setup lang="ts">
const route = useRoute()

interface NavItem {
  label: string
  to?: string
  icon?: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '#services' },
  { label: 'About', to: '#about' },
  { label: 'Contact', to: '#contact' }
]
</script>

<style>
/* Add any global layout-specific overrides here if needed */
</style>
