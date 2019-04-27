<template lang="pug">
  v-container
    v-layout(text-xs-center wrap)
      v-flex(xs12)
        v-img(
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        )

      v-flex(mb-4)
        v-btn(@click="onClick()" color="info") hoge

      v-flex(mb-5 xs12)
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  
  @Component
  export default class Index extends Vue {

    message: string = 'Hello!'

    onClick(): void {
      window.alert(this.message)
    }
  }
</script>

<style lang="scss" scoped>

</style>
