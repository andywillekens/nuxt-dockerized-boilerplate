<script lang="ts" setup>
  import { createGlobalState, useStorage } from '@vueuse/core'
  const name = ref('')
  const showInput = ref(true)

  const useState = createGlobalState(() => {
    useStorage('name', name)
    useStorage('showInput', showInput)
  })
  const state = useState()

  const clearName = () => {
    name.value = ''
    showInput.value = true
  }

  const handleInputBlur = () => {
    if (name.value) {
      showInput.value = false
    }
  }

  const handleEnterPress = () => {
    if (name.value) {
      showInput.value = false
    }
  }
</script>
<template>
  <section class="container">
    <div class="flex items-center gap-4">
      <h1>{{ name ? `Hi ${name}!` : `Hi!` }}</h1>
      <Icon
        v-if="!showInput"
        name="ph:x-circle-duotone"
        class="cursor-pointer text-gray-400 hover:text-purple-500"
        title="Clear this name"
        @click="clearName"
      />
    </div>
    <p v-if="showInput">Let's get to know eachother!</p>
    <FormKit
      v-if="showInput"
      placeholder="What's your name"
      type="text"
      v-model="name"
      @blur="handleInputBlur"
      @keyup.enter="handleEnterPress"
    />
    <p>
      Welcome to this Dockerized Nuxt 4 application. This will act as a boilerplate for later
      projects.
    </p>
    <p>
      Before you continue, make sure you have read the documentation over at
      <NuxtLink
        to="https://github.com/andywillekens/nuxt-dockerized-boilerplate?tab=readme-ov-file#docker-example"
      >
        GitHub </NuxtLink
      >.
    </p>
  </section>
</template>
