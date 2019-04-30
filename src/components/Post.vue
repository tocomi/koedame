<template lang="pug">
  div#post
    div#content-area
      textarea#content(v-model="content" placeholder="思いの丈を、ぶちまけろ")
      v-btn#submit(color="info" @click="postTweet()" fab small)
        v-icon(color="white") create
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  
  @Component
  export default class Post extends Vue {

    content: string = ''

    postTweet(): void {
      if (this.content === '') {
        return
      }
      const user: string = 'hogehoge'
      const content: string = this.content
      this.$emit('postTweet', user, content)
      this.content = ''
    }

  }
</script>

<style lang="scss" scoped>
#content {
  resize: none;
  height: 95px;
  width: 300px;
  padding: 5px;
  background-color: #FFF;
  border: 1px solid #EAEAEA;
  font-size: 13px;
}
#submit {
  position: absolute;
  margin: 50px 0 0 -45px;
}
</style>
