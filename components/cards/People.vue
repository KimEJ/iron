<template>
    <button class="w-full relative rounded-2xl overflow-hidden" @click="$emit('click', $event)">
        <nuxt-img :src="coverImage" alt="Cover image" width="2280" class="w-full aspect-square object-cover rounded-2xl" />
        <div
            class="absolute py-2 px-3 md:py-3 md:px-4 bottom-0 h-20 flex flex-col justify-between inset-x-0 bg-gradient-to-t from-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm">
            <h1 class="text-white font-semibold text-2xl line-clamp-2">
                {{ title }}
            </h1>
            <p class="text-gray-400 text-xs sm:text-sm line-clamp-2">
                {{ description }}
            </p>
        </div>
    </button>
</template>

<script lang="ts" setup>
const { title, description, href, timestamp, coverImage } = defineProps<{
    title: string,
    description: string,
    href: string,
    timestamp: string,
    coverImage: string
}>()
</script>