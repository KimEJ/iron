<script lang="ts" setup>
    const { text, href } = defineProps<
    {
        text:string,
        href:string | undefined,
        child: {
            text:string,
            href:string
        }[] | undefined
    }>()

    function toggleNav(event: MouseEvent): void {
        event.preventDefault()
        navIsOpen.value = !navIsOpen.value
    }
    const navIsOpen = useState('navIsOpen', () => false)
</script>
<template>
    <li class="lg:inline-flex group">
        <NuxtLink class="lg:inline-flex transition hover:text-primary ease-linear text-lg" :to="href">
            {{ text }}
        </NuxtLink>
        
        <ul v-if="child" class="inline-flex lg:hidden lg:top-full lg:absolute lg:group-hover:inline-flex dark:bg-body">
            <li v-for="childItem in child" class="lg:inline-flex">
                <NuxtLink class="lg:inline-flex transition hover:text-primary ease-linear text-lg" :to="childItem.href">
                    {{ childItem.text }}
                </NuxtLink>
            </li>
        </ul>
        <!-- <NuxtLink class="lg:inline-flex transition hover:text-primary ease-linear text-lg" :to="href">
            {{ text }}
        </NuxtLink> -->
    </li>
</template>
<style scoped>
/* ul {
    display: inline-flex;
} */

/* li:hover>ul {
    display: inline-flex;
} */

/* li {
    float: left;
    position: relative;
    list-style-type: none;
} */

/* li:visited NuxtLink {
    color: #fff;
} */

ul {
    /* backdrop-filter: blur(10px); */
    background-color: rgba(255, 255, 255);
    /* position: absolute; */
    width: 100%;
    /* top: 100%; */
    border-radius: 0 10px 10px 10px;
}

ul li {
    padding: 10px
}

</style>