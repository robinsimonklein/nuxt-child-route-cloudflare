<template>
  <header>
    <ul>
      <li>
        <NuxtLink to="/">Index</NuxtLink>
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
        <NuxtLink to="/dashboard/parent">Parent</NuxtLink>
        <NuxtLink to="/dashboard/parent/child">Child</NuxtLink>
      </li>
    </ul>
  </header>
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">

</script>
