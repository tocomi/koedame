<template lang="pug">
  div#post
    div#user-area
      input#user(v-model="user" placeholder="お名前")
    div#content-area
      textarea#content(v-model="content" placeholder="なんでもどうぞ")
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

      this.$emit('postTweet', this.postUser(), this.content)

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
#user {
  width: 300px;
  padding: 5px;
  border: 1px solid #EAEAEA;
  border-radius: 10px;
  background-color: #FFF;
}
#content {
  resize: none;
  height: 95px;
  width: 300px;
  margin: 2px 0 0 0;
  padding: 5px;
  background-color: #FFF;
  border: 1px solid #EAEAEA;
  border-radius: 10px;
  font-size: 13px;
}
#submit {
  position: absolute;
  margin: 50px 0 0 -45px;
}
</style>
