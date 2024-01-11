<template>
    <section class="pt-20 md:pt-24 relative">
        <AtomsContainer>
            <div class="flex justify-between items-center pb-6">
                <div class="">
                    <AtomsTitle texte="지난 프로젝트" />
                </div>
                <div class="flex items-center min-w-max relative">
                    <AtomsLinkBtn href="#" variant="primary">
                        더 많은 프로젝트 보기
                    </AtomsLinkBtn>
                </div>
            </div>
            <div class="relative">
                <!--  -->
                <div 
                    class="flex absolute top-1/2 -left-5 -translate-y-1/2 z-10 transition duration-300 ease-linear" 
                    :class="prevIsVisible?'visible opacity-100':'insisible opacity-0'" 
                    
                    >
                    <AtomsSwiperNavButton @click="scrollToLeft()">
                        <IconsPrevIco />
                    </AtomsSwiperNavButton>
                </div><!--  -->
                <div  
                    class="flex absolute top-1/2 -right-5 -translate-y-1/2 z-10 transition duration-300 ease-linear" 
                    :class="nextIsVisible?'visible opacity-100':'insisible opacity-0'">
                    <AtomsSwiperNavButton @click="scrollToRight()">
                        <IconsNextIco />
                    </AtomsSwiperNavButton>
                </div>

                <div data-slide-recent @scroll="initScroll()"
                    class="flex items-stretch gap-5 overflow-hidden overflow-x-auto invisible-scroll">
                    <div
                        v-for="project in projects"
                        class=" w-11/12 min-w-[91.666667%] xs:w-80 xs:min-w-[20rem] md:w-1/3 md:min-w-[33.333333%] lg:w-1/4 lg:min-w-[25%]">
                        <CardsRecentProj :title='project.title' :description="project.description" :timestamp='project.timestamp' :href='project.href' :cover-image='project.coverImage' />
                    </div>
                </div>
            </div>
        </AtomsContainer>
    </section>
</template>

<script lang="ts" setup>


// const scrollLeft = useState('scrollLeft', ()=> 0)
const nextIsVisible = useState('nextIsVisible', () => false)
const prevIsVisible = useState('prevIsVisible', () => false)

const projects = [
    {
        title: "프로젝트 1",
        description: "프로젝트 1에 대한 설명",
        timestamp: "2023-12-12",
        href: "#",
        coverImage: "/images/blocks-503109_1280.jpg"
    },
    {
        title: "프로젝트 2",
        description: "프로젝트 1에 대한 설명",
        timestamp: "2023-12-12",
        href: "#",
        coverImage: "/images/read-4208554_1280.jpg"
    },
    {
        title: "프로젝트 3",
        description: "프로젝트 1에 대한 설명",
        timestamp: "2023-12-12",
        href: "#",
        coverImage: "/images/blocks-503109_1280.jpg"
    },
    {
        title: "프로젝트 4",
        description: "프로젝트 1에 대한 설명",
        timestamp: "2023-12-12",
        href: "#",
        coverImage: "/images/read-4208554_1280.jpg"
    },
]

let element:HTMLDivElement
if (typeof document !== "undefined") {
    element = document.querySelector("[data-slide-recent]") as HTMLDivElement
}
function initScroll(): void {
    if (typeof element === "undefined" || element === null) {
        return
    }
    prevIsVisible.value = element.scrollLeft <= 0 ? false : true
    nextIsVisible.value = element.scrollLeft >= element.scrollWidth - element.offsetWidth - 1?false:true
}

function scrollToLeft():void{
    if (typeof element === "undefined" || element === null) {
        return
    }
    element.scrollLeft -= element.clientWidth
}

function scrollToRight():void{
    if (typeof element === "undefined" || element === null) {
        return
    }
    element.scrollLeft += element.clientWidth
}

onMounted(() => {
    if (window !== null) {
        initScroll()
    }
})
</script>