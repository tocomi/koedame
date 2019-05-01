<template lang="pug">
  div.retweet
    div.user-and-time
      span.user {{ reTweet.user }}
      span.created_at {{ reTweet.createdAt }}
    span.content {{ reTweet.content }}
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  
  @Component
  export default class Tweet extends Vue {

    @Prop() reTweet!: any

  }
</script>

<style lang="scss" scoped>
</style>
