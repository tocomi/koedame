<template lang="pug">
  div.retweet
    div.user-and-time
      span.user {{ reTweet.user }}
      span.created-at {{ reTweet.createdAt }}
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
  border: 1px solid #eeeeee;
  border-radius: 10px;
  margin: 0 5px 5px 60px;
  padding: 5px 10px;

  .user-and-time {
    font-size: 12px;

    .user {
      font-weight: bold;
    }

    .created-at {
      color: #8a8a8a;
      margin: 0 0 0 10px;
    }
  }

  .content {
    font-size: 12px;
  }
}
</style>
