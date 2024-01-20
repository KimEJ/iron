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

const title = ref('')

</script>
<template>
    <div>
      <sectionsTeamsPeoples @selected="(el: string) => title = el"/>
      <sectionsTeamsInterview :title="title"/>
    </div>
</template>