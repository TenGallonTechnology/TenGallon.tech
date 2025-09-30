<template>
  <main>
    <UContainer>
      <!-- Hero Section -->
      <section class="py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div class="order-2 lg:order-1">
            <NuxtImg 
              src="/solutions.png" 
              alt="Solutions" 
              width="300"
              class="w-full max-w-md mx-auto"
            />
          </div>
          <div class="order-1 lg:order-2">
            <h1 class="text-4xl font-bold font-mono mb-4">Ten Gallon Technology</h1>
            <p class="text-lg mb-6">
              We help small businesses thrive in the digital world. Our goal is to bring the same powerful tools used by large companies within reach of local businesses. Explore our range of services designed to help you grow online and beyond.
            </p>
            
          </div>
        </div>
      </section>

      <!-- CTA Banner (restyled) -->
      <UCard
        class="group relative my-12 overflow-hidden border border-primary/15 hover:border-primary/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/20/40 dark:via-primary/10 dark:to-transparent backdrop-blur supports-[backdrop-filter]:bg-primary/5"
      >
        <div class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-400 via-emerald-400 to-transparent opacity-80" aria-hidden="true" />
        <div class="flex flex-col items-center text-center gap-4 py-2">
          <div class="flex items-center gap-2 font-mono text-sm tracking-wide uppercase text-primary-600 dark:text-primary-400">
            <span class="w-2.5 h-2.5 rounded-sm bg-gradient-to-br from-primary-400 to-emerald-400 shadow ring-1 ring-black/10 dark:ring-white/10" />
            Partnership Focused
          </div>
          <p class="text-lg max-w-2xl">
            We are a small business for small business. Let us be your partner in success and growth—start with a quick conversation.
          </p>
          <div class="flex flex-wrap gap-3 justify-center">
            <UButton to="#contact" size="md" color="primary" variant="solid" icon="i-lucide-send">
              Contact Us
            </UButton>
            <UButton to="#services" size="md" variant="outline" color="neutral" icon="i-lucide-grid" class="backdrop-blur-sm">
              Explore Services
            </UButton>
          </div>
        </div>
        <div class="absolute -right-10 -bottom-10 w-52 h-52 rounded-full bg-gradient-to-tr from-primary-400/10 via-emerald-400/10 to-transparent blur-2xl pointer-events-none group-hover:opacity-90 transition-opacity" aria-hidden="true" />
      </UCard>

      <!-- Services Section -->
      <section id="services" class="py-16">
        <h2 class="text-3xl font-bold text-center mb-12 font-mono tracking-tight">What We Offer</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UCard
            v-for="service in services"
            :key="service.title"
            class="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden border border-primary/10 hover:border-primary/30 bg-gradient-to-br from-white/60 to-white/20 dark:from-neutral-900/60 dark:to-neutral-900/20 backdrop-blur supports-[backdrop-filter]:bg-white/5"
          >
            <template #header>
              <h3 class="text-xl font-bold font-mono flex items-center gap-2">
                <span
                  class="w-2.5 h-2.5 rounded-sm shadow-sm ring-1 ring-inset ring-black/10 dark:ring-white/10 transition-all duration-300 group-hover:scale-110"
                  :class="service.accent"
                  aria-hidden="true"
                />
                {{ service.title }}
              </h3>
            </template>
            <div class="space-y-4 text-sm leading-relaxed">
              <p>{{ service.description }}</p>
            </div>
            <div
              class="pointer-events-none absolute inset-x-0 top-0 h-1 opacity-70"
              :class="service.bar"
              aria-hidden="true"
            />
          </UCard>
        </div>

        <div class="text-right mt-8">
          <span class="mr-4">Questions About Our Services?</span>
          <UButton 
            to="#contact" 
            variant="outline"
            size="sm"
          >
            Contact Us
          </UButton>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <NuxtImg 
              src="/about.png" 
              alt="About" 
              width="300"
              class="w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h3 class="text-3xl font-bold font-mono text-center mb-6">
              We Find Creative Solutions To Business Problems
            </h3>
            <USeparator class="mb-6" />
            <div class="space-y-4">
              <p>
                We believe in solving business problems with creativity and technology. Since 2020, Ten Gallon Technology has helped small and medium-sized businesses close the competitive gap with larger organizations.
              </p>
              <p>
                Our mission is simple: deliver tailored digital solutions that fit your business—not a one-size-fits-all approach. We work alongside you to make sure your ideas take shape and grow throughout the process. With modern tools and a problem-solving mindset, we build solutions that move your business forward.
              </p>
              <p class="font-semibold">Let's talk—your first consultation is free.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-10 border-t-1">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div class="lg:col-span-2 text-center lg:text-left">
            <h2 class="text-3xl font-bold font-mono">How to reach us</h2>
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <UButton 
              to="mailto:kadepowell@gmail.com"
              icon="i-heroicons-envelope"
              size="lg"
              variant="outline"
              block
            >
              Email
            </UButton>
            <UButton 
              to="tel:4786978328"
              icon="i-heroicons-phone"
              size="lg"
              variant="outline"
              block
            >
              Call
            </UButton>
          </div>
        </div>
      </section>
    </UContainer>
  </main>
</template>

<script setup lang="ts">
// SEO Meta tags
useSeoMeta({
  title: 'Ten Gallon Technology',
  description: 'A software company based in Dublin GA specializing in web development and data analytics',
  ogTitle: 'Ten Gallon Technology',
  ogDescription: 'A software company based in Dublin GA specializing in web development and data analytics',
  ogImage: '/tengallon.png',
  ogUrl: 'https://www.tengallon.tech',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Ten Gallon Technology',
  twitterDescription: 'A software company based in Dublin GA specializing in web development and data analytics'
})

interface Service {
  title: string
  description: string
  accent: string
  bar: string
}

const services: Service[] = [
  {
    title: 'Software Development',
    description: 'We build websites and software solutions that work for you and your customers. Whether you need a polished online presence or tools to streamline operations, our solutions integrate seamlessly with the systems you already use—boosting productivity and creating better experiences.',
    accent: 'bg-gradient-to-br from-emerald-400 to-primary-500 dark:from-emerald-500 dark:to-primary-400',
    bar: 'bg-gradient-to-r from-emerald-400 via-primary-400 to-transparent'
  },
  {
    title: 'Data Analytics and Engineering',
    description: 'Your data has value—let\'s unlock it. We help you transform raw information into clear insights that drive smarter decisions and measurable results.',
    accent: 'bg-gradient-to-br from-sky-400 to-primary-500 dark:from-sky-500 dark:to-primary-400',
    bar: 'bg-gradient-to-r from-sky-400 via-primary-400 to-transparent'
  },
  {
    title: 'Consulting',
    description: 'Technology decisions can make or break a business. We guide you with clear advice and ongoing support—so you always have a trusted partner from planning through execution.',
    accent: 'bg-gradient-to-br from-fuchsia-400 to-primary-500 dark:from-fuchsia-500 dark:to-primary-400',
    bar: 'bg-gradient-to-r from-fuchsia-400 via-primary-400 to-transparent'
  },
  {
    title: 'Process Automation',
    description: 'Eliminate repetitive manual tasks with targeted automation. From data syncing and reporting to notification workflows and integrations, we design lightweight automations that save time, reduce errors, and scale with your operations.',
    accent: 'bg-gradient-to-br from-amber-400 to-primary-500 dark:from-amber-500 dark:to-primary-400',
    bar: 'bg-gradient-to-r from-amber-400 via-primary-400 to-transparent'
  },
  {
    title: 'Systems Integration',
    description: 'Unify disconnected tools—CRMs, accounting, scheduling, marketing platforms—so data flows automatically. Reduce double entry and errors while creating a single source of operational truth.',
    accent: 'bg-gradient-to-br from-indigo-400 to-primary-500 dark:from-indigo-500 dark:to-primary-400',
    bar: 'bg-gradient-to-r from-indigo-400 via-primary-400 to-transparent'
  },
  {
    title: 'Reporting Dashboards',
    description: 'Bring KPIs, operational metrics, and financial indicators together in clear, actionable dashboards. Empower faster decisions with automated refresh and shareable views.',
    accent: 'bg-gradient-to-br from-teal-400 to-primary-500 dark:from-teal-500 dark:to-primary-400',
    bar: 'bg-gradient-to-r from-teal-400 via-primary-400 to-transparent'
  }
]
</script>