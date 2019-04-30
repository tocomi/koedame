<template lang="pug">
  div#post
    textarea#content(placeholder="思いの丈を、ぶちまけろ")
    v-btn#submit(color="info" @click="postTweet()" fab small)
      v-icon(color="white") create
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  
  @Component
  export default class Post extends Vue {

    postTweet(): void {
      const user: string = 'hogehoge'
      const content: string = 'fugafuga'
      this.$emit('postTweet', user, content)
    }

  }
</script>

<style lang="scss" scoped>
#content {
  resize: none;
  height: 95px;
  width: 270px;
  padding: 5px;
  background-color: #FFF;
  border: 1px solid #EAEAEA;
}
#submit {
  margin: -30px 0 5px 10px;
}
</style>
