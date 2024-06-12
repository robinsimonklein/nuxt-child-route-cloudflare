<template>
  <header>
    <p>dashboard layout</p>
    <ul class="nav">
      <li class="nav__item">
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink to="/dashboard/parent">Parent</NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink to="/dashboard/parent/child">Child</NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink to="/dashboard/other">Other</NuxtLink>
      </li>
      <li class="nav__item" style="margin-left: auto;">
        <NuxtLink to="/auth/logout" external>Logout</NuxtLink>
      </li>
    </ul>
  </header>
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">

</script>

<style>
.nav {
  display: flex;
  gap: 12px;
  list-style: none;
  padding: 8px;
  background: #EEE;
}
</style>
