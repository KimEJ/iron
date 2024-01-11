<script setup lang="ts">
useHead({
  title: '이로운',
  meta: [
    { name: 'description', content: '이로운입니다.' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo.png' }
  ],
})
</script>
<template>
    <div>
        <SectionsHomeHeroSection/>
        <SectionsAboutIroun/>
        <!-- <SectionsWhyUs/> -->
        <SectionsHomeLatestProjects/>
        <!-- <SectionsHomePopularPodcasts/> -->
        <SectionsCallToAction/>
    </div>
</template>