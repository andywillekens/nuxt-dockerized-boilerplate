<script lang="ts" setup>
  import { ref, onMounted } from 'vue'

  const provinces = ref([])
  const isLoading = ref(true)
  const errorMessage = ref('')

  onMounted(async () => {
    try {
      const response = await fetch('http://localhost:8080/provinces')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      provinces.value = await response.json()
    } catch (error) {
      errorMessage.value = 'There was a problem with the fetch operation: ' + error.message
      console.error(errorMessage.value)
    } finally {
      isLoading.value = false
    }
  })
</script>

<template>
  <h1>Alle provincies</h1>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="errorMessage">{{ errorMessage }}</div>
  <ul v-else>
    <li v-for="province in provinces" :key="province.id">{{ province }}</li>
  </ul>
</template>
