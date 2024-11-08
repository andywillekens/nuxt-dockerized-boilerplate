<script lang="ts" setup>
  const config = useRuntimeConfig()

  const serverUrl = config.public.SERVER_URL

  const {
    data: provinces,
    refresh,
    pending,
    error
  } = useFetch(`${serverUrl}/provinces`, {
    method: 'GET',
    immediate: true,
    onResponse() {
      console.log('Houston, we have a response!')
    }
  })
</script>

<template>
  <section class="container">
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
  </section>
</template>
