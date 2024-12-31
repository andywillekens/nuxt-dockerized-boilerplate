<script setup lang="ts">
  const currentYear = ref(new Date().getFullYear())
</script>
<template>
  <footer class="flex w-full justify-center bg-gray-50 py-2">
    <p class="m-0">
      &copy; Boilerplate by <NuxtLink href="https://andywillekens.nl/">Andy Willekens</NuxtLink> -
      {{ currentYear }}
    </p>
  </footer>
</template>
