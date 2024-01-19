<script setup lang="ts">
const { path } = useRoute()
const articles = await queryContent(path).findOne()

const links = articles?.body?.toc?.links || []
</script>

<template>
  <div class="lg:col-span-3 sticky top-28 h-96  hidden lg:block  justify-self-end">
    <div class="border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900">
      <h1 class="text-sm font-bold mb-3 border-b dark:border-gray-800 pb-2">
        목차
      </h1>
      <div v-for="link in links" :key="link.id" class="block text-xs mb-3">
        <NuxtLink :to="`#${link.id}`" class="hover:underline">
          {{ link.text }}
        </NuxtLink>
        <div v-if="link.children" v-for="child in link.children" :key="child.id" class="ml-3">
          <NuxtLink :to="`#${child.id}`" class="block text-xs mb-3 hover:underline ml-3">
            {{ child.text }}
          </NuxtLink>
          <div v-if="child.children" v-for="child1 in child.children" :key="child1.id" class="ml-3">
            <NuxtLink :to="`#${child1.id}`" class="block text-xs mb-3 hover:underline ml-3">
              {{ child1.text }}
            </NuxtLink>
            <div v-if="child1.children" v-for="child2 in child1.children" :key="child2.id" class="ml-3">
              <NuxtLink :to="`#${child2.id}`" class="block text-xs mb-3 hover:underline ml-3">
                {{ child2.text }}
              </NuxtLink>
              <div v-if="child2.children" v-for="child3 in child2.children" :key="child3.id" class="ml-3">
                <NuxtLink :to="`#${child3.id}`" class="block text-xs mb-3 hover:underline ml-3">
                  {{ child3.text }}
                </NuxtLink>
                <div v-if="child3.children" v-for="child4 in child3.children" :key="child4.id" class="ml-3">
                  <NuxtLink :to="`#${child4.id}`" class="block text-xs mb-3 hover:underline ml-3">
                    {{ child4.text }}
                  </NuxtLink>
                  <div v-if="child4.children" v-for="child5 in child4.children" :key="child5.id" class="ml-3">
                    <NuxtLink :to="`#${child5.id}`" class="block text-xs mb-3 hover:underline ml-3">
                      {{ child5.text }}
                    </NuxtLink>
                    <div v-if="child5.children" v-for="child6 in child5.children" :key="child6.id" class="ml-3">
                      <NuxtLink :to="`#${child6.id}`" class="block text-xs mb-3 hover:underline ml-3">
                        {{ child6.text }}
                      </NuxtLink>
                      <div v-if="child6.children" v-for="child7 in child6.children" :key="child7.id" class="ml-3">
                        <NuxtLink :to="`#${child7.id}`" class="block text-xs mb-3 hover:underline ml-3">
                          {{ child7.text }}
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
