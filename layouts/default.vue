<template>
  <header>
    <ul>
      <li>
        <NuxtLink to="/">Index</NuxtLink>
        <NuxtLink to="/parent">Parent</NuxtLink>
        <NuxtLink to="/parent/child">Child</NuxtLink>
      </li>
    </ul>
  </header>
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">

</script>
