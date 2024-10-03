<script lang="ts" setup>
  const server = useRuntimeConfig().public.API_URL

  const {
    data: provinces,
    refresh,
    pending,
    error
  } = useFetch(`${server}/provinces`, {
    method: 'GET',
    immediate: true,
    onResponse() {
      console.log('Response received')
    }
  })
</script>

<template>
  <h1>Alle provincies in 🇳🇱</h1>
  <p v-if="pending">Loading...</p>
  <p v-else-if="error">Error: {{ error }}</p>
  <ul v-else>
    <li v-for="province in provinces || []" :key="province.id">
      <h3>{{ province.name }}</h3>
      <p>Capital: {{ province.capital }}</p>
      <p>Population: {{ province.population }}</p>
      <p>Size in km2: {{ province.size }}</p>
    </li>
  </ul>
</template>
