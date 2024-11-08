<template>
  <header class="flex w-full justify-center shadow-lg">
    <div class="container">
      <div class="flex justify-between">
        <h1>
          Nuxt
          <Icon name="ph:heart-straight-duotone" class="align-middle text-2xl text-red-400" />
          Docker
        </h1>
        <nav class="flex gap-4 self-end text-md">
          <NuxtLink to="/"><Icon name="ph:house-duotone" />Home</NuxtLink>
          <NuxtLink to="/provinces"><Icon name="ph:map-pin-line-duotone" /> Provinces</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
