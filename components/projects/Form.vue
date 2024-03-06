<template>
    <flow-form :questions="questions" :language="language" @submit="submitForm">
    <template #complete>
        <div class="vff__complete">
        <h2 class="vff__complete__tagline">참여해 주셔서 감사합니다!</h2>
        <p class="vff__complete__description">Submit 버튼을 누르면 신청이 완료 됩니다.</p>
        <!-- <p class="text-sm vff__complete__description text-rose-500">* 참석이 확정 된 것이 아닙니다. 꼭 확정 문자를 확인 해 주세요.</p> -->
        </div>
    
    </template>
    </flow-form>
</template>
  
<script lang="ts" setup>
// Import necessary components and classes
import { FlowForm, QuestionModel, LanguageModel } from '@ditdot-dev/vue-flow-form'
import { v4 as uuidv4 } from 'uuid'

const language = new LanguageModel({
    // Your language definitions here (optional).
    // You can leave out this prop if you want to use the default definitions.
})
const { questions, title } = defineProps < {
    questions: Array < QuestionModel >,
    title: string
} > ()

async function submitForm(list: Array<{
    "id": string,
    "answer": string | Array < string >
}>) {
    const answer = list.reduce((acc, cur) => {
        acc[cur.id] = cur.answer
        return acc
    }, {title} as any)
    console.log('answer: ', answer)

    // Send the form data to your server
    await setFirestoreData('submit', Object(answer))

}

</script>
  
<style>
/* Import Vue Flow Form base CSS */
@import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
/* Import one of the Vue Flow Form CSS themes (optional) */
@import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css';
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css'; */

.vff {
    margin: 3rem auto;
}
.vff .fh2 {
    padding-right: 0;
}
</style>