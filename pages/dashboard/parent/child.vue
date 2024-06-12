<template>
  <h2>Child route</h2>

  <div>
    <h4>Posts</h4>
    <div>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useFetch} from "nuxt/app";

type Post = { id: number; title: string };

const { data: posts } = await useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts')
</script>
