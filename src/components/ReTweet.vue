<template lang="pug">
  div.retweet
    div.user-and-time
      span.user {{ tweet.user }}
      span.created_at {{ tweet.createdAt }}
    span.content {{ tweet.content }}
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  
  @Component
  export default class Tweet extends Vue {

    @Prop() tweet!: any

  }
</script>

<style lang="scss" scoped>
</style>
