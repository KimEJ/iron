<script setup lang="ts">
import type { BlogPost } from '@/types/blog';

const props = defineProps<{
  title: string
}>()

const articles = ref<BlogPost | null>(null)

watch(() => props.title, async (newTitle, oldTitle) => {
  console.log(newTitle, oldTitle)
  console.log(await queryContent('people').where({ title: newTitle }).findOne())

  articles.value = await queryContent('people').where({ title: newTitle }).findOne()
    // .findOne()
    // .catch((err) => {
    //   console.log(err)
    //   return null
    // })
})

const data = computed<BlogPost>(() => {
  return {
    title: articles.value?.title || 'no-title available',
    description: articles.value?.description || 'no-description available',
    image: articles.value?.image || '/not-found.jpg',
    alt: articles.value?.alt || 'no alter data available',
    ogImage: articles.value?.ogImage || '/not-found.jpg',
    date: articles.value?.date || 'not-date-available',
    tags: articles.value?.tags || [],
    published: articles.value?.published || false,
  }
})

</script>
<template>
  <div v-auto-animate v-if="articles" class="p-6 container rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900 dark:to-body-color max-w-5xl mx-auto my-5 sm:grid grid-cols-12 gap-x-12 ">
    <div class="col-span-12 lg:col-span-3">
      <NuxtImg
        :src="data.image"
        :alt="data.alt"
        width="600"
        class="m-auto rounded-2xl shadow-lg content-center object-cover"
      />
    </div>
    <div class="col-span-12 lg:col-span-9 prose dark:prose-invert">

      <h1 class="text-xl dark:text-zinc-300 md:text-3xl lg:text-4xl m-7 font-bold text-center">
        {{ data.title || '' }}
      </h1>

      <p class="text-xs sm:text-sm my-3 max-w-xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
        {{ data.description }}
      </p>
      <ContentRenderer :value="articles">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </div>
  </div>
  <div v-else class="m-6"></div>
</template>
