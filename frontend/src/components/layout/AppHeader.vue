<template>
  <header class="flex w-full justify-center shadow-lg">
    <div class="container">
      <div class="flex flex-col self-center md:flex-row md:justify-between">
        <h1 class="text-center md:text-left">
          Nuxt
          <Icon name="ph:heart-straight-duotone" class="align-middle text-2xl text-red-400" />
          Docker
        </h1>
        <nav class="flex gap-6 self-center text-md md:self-end">
          <NuxtLink to="/"><Icon name="ph:house-duotone" />Home</NuxtLink>
          <NuxtLink to="/fetching-data"><Icon name="ph:dog-duotone" /> Fetching data</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
