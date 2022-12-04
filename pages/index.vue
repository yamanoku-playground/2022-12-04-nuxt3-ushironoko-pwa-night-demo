<script setup lang="ts">
definePageMeta({
  layout: "home",
});

const { data: posts } = useFetch("/api/posts/sortedpostsData");
</script>

<template>
  <div class="flex justify-center">
    <main>
      <section>
        <div v-for="post in posts" :key="post.id">
          <p>{{ post.publishedAt }}</p>
          <NuxtLink :href="`/posts/${post.id}`">
            <h2 class="headingLg">
              <p>{{ post.title }}</p>
            </h2>
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
@import "~/assets/styles/utils.css";
</style>