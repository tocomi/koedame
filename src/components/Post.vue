<template lang="pug">
  div#post
    div#user-area
      input#user.input(v-model="userName" placeholder="お名前")
    div#content-area
      textarea#content.input(v-model="content" placeholder="なんでもどうぞ")
      v-btn#submit(color="info" @click="postTweet()" fab small)
        v-icon(color="white") create
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Post extends Vue {
  // data
  userName: string = '';
  content: string = '';

  // lifecycle
  created() {
    if (localStorage.userName) this.userName = localStorage.userName;
  }

  // computed
  get postUser(): string {
    if (this.userName === '') {
      return 'you';
    }
    return this.userName;
  }

  // methods
  postTweet(): void {
    if (this.content === '') {
      return;
    }

    this.$emit(
      'postTweet',
      this.postUser,
      require('../assets/icon/you.jpg'),
      this.content,
      true,
    );

    if (this.userName) localStorage.userName = this.userName;
    this.content = '';
  }
}
</script>

<style lang="scss" scoped>
.input {
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  font-size: 16px;
  padding: 8px;
  width: 300px;

  &:focus {
    outline: none;
  }
}

#content {
  height: 120px;
  margin: 2px 0 0 0;
  resize: none;
}

#submit {
  margin: 75px 0 0 -45px;
  position: absolute;
}
</style>
