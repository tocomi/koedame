<template lang="pug">
  div.retweet
    div.user-and-time
      span.user {{ reTweet.user }}
      span.created_at {{ reTweet.createdAt }}
    span.content {{ reTweet.content }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Tweet extends Vue {
  @Prop() reTweet!: any;
}
</script>

<style lang="scss" scoped>
.retweet {
  margin: 0 5px 5px 60px;
  padding: 5px 10px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  .user {
    font-weight: bold;
  }
  .created_at {
    margin: 0 0 0 10px;
    color: #8a8a8a;
  }
}
</style>
