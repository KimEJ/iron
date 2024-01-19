<script setup lang="ts">
import type { BlogPost } from '@/types/blog'
import { QuestionType, QuestionModel, ChoiceOption } from '@ditdot-dev/vue-flow-form'

const { path } = useRoute()

const { data: articles, error } = await useAsyncData(`projects-post-${path}`, () => queryContent(path).findOne())

if (error.value)
  navigateTo('/404')

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

const questions = computed<Array<QuestionModel> | undefined>(() => {
  return articles.value?.survey?.map((el: {
    id: string,
    type: "Text" | "MultipleChoice" | "Dropdown" | "Phone" | "Email" | "SectionBreak"
    title: string,
    required: boolean,
    placeholder?: string,
    content?: string,
    tagline?: string,
    description?: string,
    jump?: Object,
    inline?: boolean,
    multiple?: boolean,
    options?: Array<{
      label: string,
      value: string,
    }>
  }) => {
    return new QuestionModel({
      id: el.id,
      title: el.title,
      tagline: el.tagline,
      type: QuestionType[el.type],
      required: el.required,
      placeholder: el.placeholder,
      content: el.content,
      description: el.description,
      jump: el.jump,
      inline: el.inline,
      multiple: el.multiple,
      options: el.options?.map((el) => {
        return new ChoiceOption({
          label: el.label,
          value: el.value,
        })
      })
    })
  })
})

useHead({
  title: data.value.title || '',
  meta: [
    { name: 'description', content: data.value.description },
    {
      name: 'description',
      content: data.value.description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: 'Riyad\'s Blog' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: `https://blog-nurriyad.vercel.app/${path}`,
    },
    {
      property: 'og:title',
      content: data.value.title,
    },
    {
      property: 'og:description',
      content: data.value.description,
    },
    {
      property: 'og:image',
      content: data.value.ogImage || data.value.image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@qdnvubp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: `https://blog-nurriyad.vercel.app/${path}`,
    },
    {
      name: 'twitter:title',
      content: data.value.title,
    },
    {
      name: 'twitter:description',
      content: data.value.description,
    },
    {
      name: 'twitter:image',
      content: data.value.ogImage || data.value.image,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://blog-nurriyad.vercel.app/${path}`,
    },
  ],
})

// Generate OG Image
defineOgImageComponent('Test', {
  headline: 'Greetings 👋',
  title: data.value.title || '',
  description: data.value.description || '',
  link: data.value.ogImage,

})
</script>

<template>
  <div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12 ">
    <div class="col-span-12 lg:col-span-9 pt-24 ">
      <ProjectsHeader :title="data.title" :image="data.image" :alt="data.alt" :date="data.date"
        :description="data.description" :tags="data.tags" />
      <div class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg
        prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg">
        <ContentRenderer v-if="articles" :value="articles">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
        <div class="text-center">
          <!-- {{ articles?.body?.toc }} -->
          <AtomsModal class="py-10" title="프로젝트 참여하기">
            <ProjectsForm v-if="questions" :questions="questions" />
          </AtomsModal>
        </div>
      </div>
    </div>
    <ProjectsToc />
  </div>
</template>
