<script lang="ts" setup>
  interface Province {
    id: number
    name: string
    capital: string
    population: number
    size: number
  }

  interface ProvincesData {
    provinces: Province[]
  }

  const config = useRuntimeConfig()
  const apiUrl = config.public.API_URL

  const {
    data: provinces,
    status,
    error
  } = useAsyncData<ProvincesData>('provinces', () => $fetch(`${apiUrl}/provinces`))
</script>

<template>
  <section class="container">
    <h1>Fetching data</h1>
    <p>
      The following <NuxtLink :to="`${apiUrl}/provinces`">data</NuxtLink> is fetched through the
      Nuxt API.
    </p>
    <p v-if="status === 'pending'" class="flex items-center gap-2 text-purple-500">
      <Icon name="svg-spinners:180-ring" /> Fetching data..
    </p>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <ul v-else class="grid grid-cols-2 md:grid-cols-4">
      <li v-for="province in provinces?.provinces" :key="province.id">
        <h3>{{ province.name }}</h3>
        <p>
          Capital: {{ province.capital }}<br />
          Population: {{ province.population }}<br />
          Size in km²:
          {{ province.size }}
        </p>
      </li>
    </ul>
  </section>
</template>
