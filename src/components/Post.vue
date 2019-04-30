<template lang="pug">
  div#post
    textarea#content(placeholder="思いの丈を、ぶちまけろ")
    v-btn#submit(color="info" fab small)
      v-icon(color="white") create
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  
  @Component
  export default class Post extends Vue {

  }
</script>

<style lang="scss" scoped>
#content {
  resize: none;
  height: 70px;
  width: 290px;
  padding: 5px;
  background-color: #FFF;
  border: 1px solid #EAEAEA;
}
#submit {
  margin: -30px 0 0 10px;
}
</style>
