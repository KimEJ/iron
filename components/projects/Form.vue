<template>
    <flow-form v-bind:questions="questions" v-bind:language="language" />
</template>
  
<script lang="ts" setup>
// Import necessary components and classes
import { FlowForm, QuestionModel, LanguageModel } from '@ditdot-dev/vue-flow-form'

const language = new LanguageModel({
    // Your language definitions here (optional).
    // You can leave out this prop if you want to use the default definitions.
})
const { questions } = defineProps < {
    questions: Array < QuestionModel >
} > ()

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