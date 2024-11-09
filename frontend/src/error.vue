<script setup lang="ts">
  import type { NuxtError } from '#app'

  const props = defineProps({
    error: Object as () => NuxtError
  })
</script>

<template>
  <NuxtLayout>
    <section class="container">
      <h1>Wait? What..</h1>
      <p>
        It seems you are lost..<br />Maybe you should go back to the
        <NuxtLink to="/">home page</NuxtLink>?
      </p>
    </section>
  </NuxtLayout>
</template>
