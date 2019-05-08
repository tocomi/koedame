<template lang="pug">
  div#post
    div#user-area
      input#user.input(v-model="user" placeholder="お名前")
    div#content-area
      textarea#content.input(v-model="content" placeholder="なんでもどうぞ")
      v-btn#submit(color="info" @click="postTweet()" fab small)
        v-icon(color="white") create
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  
  @Component
  export default class Post extends Vue {

    user: string = ''
    content: string = ''

    postTweet(): void {
      if (this.content === '') {
        return
      }

      this.$emit('postTweet', this.postUser(), '../assets/icon/miura.jpg', this.content, true)

      this.content = ''
    }

    private postUser(): string {
      if (this.user === '') {
        return 'you'
      }
      return this.user
    }

  }
</script>

<style lang="scss" scoped>
.input {
  width: 300px;
  padding: 5px;
  border: 1px solid #EAEAEA;
  border-radius: 10px;
  background-color: #FFF;
  font-size: 16px;
}
#content {
  resize: none;
  height: 120px;
  margin: 2px 0 0 0;
}
#submit {
  position: absolute;
  margin: 75px 0 0 -45px;
}
</style>
