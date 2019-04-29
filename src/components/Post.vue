<template lang="pug">
  div#post
    textarea.content
    v-btn#submit(color="info")
      v-icon(color="white") create
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  
  @Component
  export default class Tweet extends Vue {

  }
</script>

<style lang="scss" scoped>
.content {
  height: 70px;
  width: 250px;
  padding: 5px;
  background-color: #FFF;
  border: 1px solid #EAEAEA;
}
#submit {
  margin: -30px 0 0 10px;
}
</style>
