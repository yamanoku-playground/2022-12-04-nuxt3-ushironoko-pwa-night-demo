<script setup lang="ts">
const { params } = useRoute();

const id = Array.isArray(params.id) ? params.id[0] : params.id;

const { data } = useFetch(`/api/posts/postData?id=${encodeURIComponent(id)}`, {
  key: id,
});

useHead({
  title: data.title,
  meta: [
    {
      'og:image': `https://og-image.vercel.app/${encodeURI(data.title)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`,
    }
  ]
})
</script>

<template>
  <div class="whitespace-pre-wrap" v-html="data?.contentHtml"></div>
</template>

<style scoped>
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
</style>