<template>
  <div>
    <!-- <button @click="modalOpen">Modal</button> -->
    <AtomsBtn @click="modalOpen" variant="primary">이 프로젝트 참여하기</AtomsBtn>

    <div class="modal-wrap" v-show="modalCheck" @click="modalClose">
      <div class="modal-container" @click.stop="">
        <div>
          <AtomsTitle :texte="title" />
        </div>
        <hr/>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const { title } = defineProps<{
  title: string
}>()

const modalCheck = ref(false)

function modalOpen() {
  modalCheck.value = true
}

function modalClose() {
  modalCheck.value = false
}

</script>

<style >
hr {
  border: 1px solid #eaeaea;
  margin: 1rem 0 !important;
}

h2 {
  font-size: 1.5rem;
  margin: 1rem 0 !important;
}
/* dimmed */
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
/* modal or popup */
.modal-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}
</style>