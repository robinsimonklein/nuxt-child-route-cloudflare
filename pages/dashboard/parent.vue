<template>
  <div>
    <h1>Parent route</h1>
    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  redirect: '/dashboard/parent/child',
});
</script>
